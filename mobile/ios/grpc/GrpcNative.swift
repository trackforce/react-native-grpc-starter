import SwiftGRPC

protocol RNGrpcBridge {
  func initialize(_ apiUrl: String, secure: Bool, certFile: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func setMetadata(_ jsMetadata: [String: String], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func makeUnaryCall(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  // server stream
  func makeServerStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  // client stream
  func makeClientStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func sendClientStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func closeClientStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  // bidi stream
  func makeBidiStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func sendBidiStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
  func closeBidiStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void
}

public enum GrpcNativeError: Error {
  case notInitialized
  case streamNotFound
}

extension GrpcNativeError : LocalizedError {
  public var errorDescription: String? {
    switch self {
    case .notInitialized:
      return NSLocalizedString("GrpcNative is not initialize. Call GrpcNative.initialize first.", comment: "")
    case .streamNotFound:
      return NSLocalizedString("GrpcNative client sream not found.", comment: "")
    }
  }
}

@objc(GrpcNative)
class GrpcNative: NSObject, RNGrpcBridge {
  static var channel: Channel? = nil
  static var metadata: Metadata? = nil
  
  static var clientStreamHandlers: [String: RNClientCallClientStreaming<RNProtoMessageRequest, RNProtoMessageReply>] = [:]
  static var bidiStreamHandlers: [String: RNClientCallBidirectionalStreaming<RNProtoMessageRequest, RNProtoMessageReply>] = [:]
  static var pendingServerStreamCancel: [String] = []
  let sem = DispatchSemaphore(value: 1)
  
  /// Initialize grpc channel
  @objc func initialize(_ apiUrl: String, secure: Bool, certFile: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    gRPC.initialize()
    GrpcNative.metadata = Metadata()
    if (certFile == "") {
      GrpcNative.channel = Channel(address: apiUrl, secure: secure)
      resolve(true)
      return
    }
    let certificateURL = Bundle.main.url(forResource: certFile, withExtension: "crt")!
    let certificates = try! String(contentsOf: certificateURL, encoding: .utf8)
    GrpcNative.channel = Channel(address: apiUrl, certificates: certificates)
    resolve(true)
  }
  
  // Set global metadata for channel
  @objc func setMetadata(_ jsMetadata: [String: String], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    GrpcNative.metadata = try! Metadata(jsMetadata)
    resolve(true)
  }
  
  @objc func makeUnaryCall(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let call = GrpcNative.channel!.makeCall(method as String)
      let req = RNProtoMessageRequest(base64Data: data as String)
      let handler = RNClientCallUnary<RNProtoMessageRequest, RNProtoMessageReply>(call: call)
      let res = try handler.run(request: req, metadata: GrpcNative.metadata!)
      resolve(res.base64Data)
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func makeServerStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      DispatchQueue.global(qos: .background).async {
        self.startReceiveServerStream(method: method as String, data: data as String)
      }
      resolve(true)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  private func startReceiveServerStream(method: String, data: String) -> Void {
    do {
      let call = GrpcNative.channel!.makeCall(method)
      let handler = RNClientCallServerStreaming<RNProtoMessageRequest, RNProtoMessageReply>(call:call)
      let req = RNProtoMessageRequest(base64Data: data)
      let stream = try handler.start(request: req, metadata: GrpcNative.metadata!) { _ in }
      
      var running = true
      while running {
        do {
          if GrpcNative.pendingServerStreamCancel.contains(method) {
            sem.wait()
            GrpcNative.pendingServerStreamCancel = GrpcNative.pendingServerStreamCancel.filter{ $0 != method }
            sem.signal()
            call.cancel()
            return
          }
          let response = try stream._receive(timeout: .distantFuture)
          if let response = response {
            GrpcEventEmitter.instance.grpcStreamReceive(method: method, data: response.base64Data)
          } else {
            running = false
            GrpcEventEmitter.instance.grpcStreamEnd(method: method, data: "")
          }
        } catch {
          running = false
          GrpcEventEmitter.instance.grpcStreamError(method: method, data: error.localizedDescription)
          GrpcEventEmitter.instance.grpcStreamEnd(method: method, data: "")
          call.cancel()
        }
      }
    } catch RPCError.callError(let err) {
      GrpcEventEmitter.instance.grpcStreamError(method: method, data: err.statusMessage ?? "")
    } catch {
      GrpcEventEmitter.instance.grpcStreamError(method: method, data: error.localizedDescription)
    }
  }
  
  @objc func closeServerStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      if !GrpcNative.pendingServerStreamCancel.contains(method as String) {
        sem.wait()
        GrpcNative.pendingServerStreamCancel.append(method as String)
        sem.signal()
      }
      
      resolve(true)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func makeClientStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let call = GrpcNative.channel!.makeCall(method as String)
      let stream = RNClientCallClientStreaming<RNProtoMessageRequest, RNProtoMessageReply>(call:call)
      _ = try stream.start(metadata: GrpcNative.metadata!) { _ in }
      sem.wait()
      GrpcNative.clientStreamHandlers[method as String] = stream
      sem.signal()
      resolve("")
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func sendClientStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let stream = GrpcNative.clientStreamHandlers[method as String]
      if let stream = stream {
        let req = RNProtoMessageRequest(base64Data: data as String)
        try stream._send(req, timeout: .distantFuture)
        resolve(true)
      } else {
        throw GrpcNativeError.streamNotFound
      }
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func closeClientStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let stream = GrpcNative.clientStreamHandlers[method as String]
      if let stream = stream {
        _ = try stream.closeAndReceive()
        resolve(true)
      } else {
        throw GrpcNativeError.streamNotFound
      }
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func makeBidiStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      DispatchQueue.global(qos: .background).async {
        self.startReceiveBidiStream(method: method as String)
      }
      resolve(true)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  private func startReceiveBidiStream(method: String) -> Void {
    do {
      let call = GrpcNative.channel!.makeCall(method as String)
      let stream = RNClientCallBidirectionalStreaming<RNProtoMessageRequest, RNProtoMessageReply>(call:call)
      _ = try stream.start(metadata: GrpcNative.metadata!) { _ in }
      sem.wait()
      GrpcNative.bidiStreamHandlers[method as String] = stream
      sem.signal()
      
      var running = true
      while running {
        do {
          let response = try stream._receive(timeout: .distantFuture)
          if let response = response {
            GrpcEventEmitter.instance.grpcStreamReceive(method: method, data: response.base64Data)
          } else {
            running = false
            GrpcEventEmitter.instance.grpcStreamEnd(method: method, data: "")
          }
        } catch {
          running = false
          GrpcEventEmitter.instance.grpcStreamError(method: method, data: error.localizedDescription)
          GrpcEventEmitter.instance.grpcStreamEnd(method: method, data: "")
          call.cancel()
        }
      }
    } catch RPCError.callError(let err) {
      GrpcEventEmitter.instance.grpcStreamError(method: method , data: err.statusMessage ?? "")
    } catch {
      GrpcEventEmitter.instance.grpcStreamError(method: method, data: error.localizedDescription)
    }
  }
  
  @objc func sendBidiStream(_ method: NSString, data: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let stream = GrpcNative.bidiStreamHandlers[method as String]
      if let stream = stream {
        let req = RNProtoMessageRequest(base64Data: data as String)
        try stream._send(req, timeout: .distantFuture)
        resolve(true)
      } else {
        throw GrpcNativeError.streamNotFound
      }
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  @objc func closeBidiStream(_ method: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    do {
      try checkInitialized()
      let stream = GrpcNative.bidiStreamHandlers[method as String]
      if let stream = stream {
        try stream.closeSend()
      } else {
        throw GrpcNativeError.streamNotFound
      }
    } catch RPCError.callError(let err) {
      reject(String(err.statusCode.rawValue), err.statusMessage, err as? Error)
    } catch {
      reject("-1", error.localizedDescription, error)
    }
  }
  
  private func checkInitialized() throws -> Void {
    if (GrpcNative.channel == nil) {
      throw GrpcNativeError.notInitialized
    }
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
