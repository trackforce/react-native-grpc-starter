import Foundation
import Dispatch
import SwiftGRPC
import SwiftProtobuf

protocol RNProtoMessage {
  init()
  init(serializedData: Data) throws
  func serializedData() throws -> Data
}

// RNProtoMessageReq converts input Base64 string to protobuf binary
struct RNProtoMessageRequest: RNProtoMessage {
  var base64Data: String = String()
  
  init() {
  }
  
  public init(base64Data: String) {
    self.base64Data = base64Data
  }

  public init(serializedData: Data) throws {}
  
  public func serializedData() throws -> Data {
    return Data(base64Encoded: self.base64Data, options: Data.Base64DecodingOptions(rawValue: 0))!
  }
}

// RNProtoMessageReply converts reply protobuf binary to Base64 string
struct RNProtoMessageReply: RNProtoMessage {
  var base64Data: String = String()
  
  init() {
  }

  public init(serializedData: Data) throws {
    self.base64Data = serializedData.base64EncodedString(options: Data.Base64EncodingOptions(rawValue: 0))
  }
  
  public func serializedData() throws -> Data {
    return Data(base64Encoded: self.base64Data, options: Data.Base64DecodingOptions(rawValue: 0))!
  }
}

// Client unary
class RNClientCallUnary<InputType: RNProtoMessage, OutputType: RNProtoMessage> {
  public let call: Call
  init(call: Call) {
    self.call = call
  }
  
  /// Run the call. Blocks until the reply is received.
  public func run(request: InputType, metadata: Metadata) throws -> OutputType {
    let sem = DispatchSemaphore(value: 0)
    var returnCallResult: CallResult!
    var returnResponse: OutputType?
    _ = try start(request: request, metadata: metadata) { response, callResult in
      returnResponse = response
      returnCallResult = callResult
      sem.signal()
    }
    _ = sem.wait()
    if let returnResponse = returnResponse {
      return returnResponse
    } else {
      throw RPCError.callError(returnCallResult)
    }
  }
  
  /// Start the call. Nonblocking.
  /// - Throws: `BinaryEncodingError` if encoding fails. `CallError` if fails to call.
  public func start(request: InputType,
                    metadata: Metadata,
                    completion: @escaping ((OutputType?, CallResult) -> Void)) throws -> Self {
    let requestData = try request.serializedData()
    try call.start(.unary, metadata: metadata, message: requestData) { callResult in
      if let responseData = callResult.resultData {
        completion(try? OutputType(serializedData: responseData), callResult)
      } else {
        completion(nil, callResult)
      }
    }
    return self
  }
}

// Client streaming
class RNClientCallClientStreaming<InputType: RNProtoMessage, OutputType: RNProtoMessage>: RNStreamSending {
  public let call: Call
  init(call: Call) {
    self.call = call
  }
  
  public typealias SentType = InputType
  
  /// Call this to start a call. Nonblocking.
  public func start(metadata: Metadata, completion: ((CallResult) -> Void)?) throws -> Self {
    try call.start(.clientStreaming, metadata: metadata, completion: completion)
    return self
  }
  
  public func closeAndReceive(completion: @escaping (ResultOrRPCError<OutputType>) -> Void) throws {
    try call.closeAndReceiveMessage { callResult in
      guard let responseData = callResult.resultData else {
        completion(.error(.callError(callResult))); return
      }
      if let response = try? OutputType(serializedData: responseData) {
        completion(.result(response))
      } else {
        completion(.error(.invalidMessageReceived))
      }
    }
  }
  
  public func closeAndReceive() throws -> OutputType {
    var result: ResultOrRPCError<OutputType>?
    let sem = DispatchSemaphore(value: 0)
    try closeAndReceive {
      result = $0
      sem.signal()
    }
    _ = sem.wait()
    switch result! {
    case .result(let response): return response
    case .error(let error): throw error
    }
  }
}

// Server streaming
class RNClientCallServerStreaming<InputType: RNProtoMessage, OutputType: RNProtoMessage>: RNStreamReceiving {
  public let call: Call
  init(call: Call) {
    self.call = call
  }
  
  public typealias ReceivedType = OutputType
  
  /// Call this once with the message to send. Nonblocking.
  public func start(request: InputType, metadata: Metadata, completion: ((CallResult) -> Void)?) throws -> Self {
    let requestData = try request.serializedData()
    try call.start(.serverStreaming,
                   metadata: metadata,
                   message: requestData,
                   completion: completion)
    return self
  }
}

// Bidi streaming
class RNClientCallBidirectionalStreaming<InputType: RNProtoMessage, OutputType: RNProtoMessage>: RNStreamReceiving, RNStreamSending {
  public let call: Call
  init(call: Call) {
    self.call = call
  }
  
  public typealias ReceivedType = OutputType
  public typealias SentType = InputType
  
  /// Call this to start a call. Nonblocking.
  public func start(metadata: Metadata, completion: ((CallResult) -> Void)?)
    throws -> Self {
      try call.start(.bidiStreaming, metadata: metadata, completion: completion)
      return self
  }
  
  public func closeSend(completion: (() -> Void)?) throws {
    try call.close(completion: completion)
  }
  
  public func closeSend() throws {
    let sem = DispatchSemaphore(value: 0)
    try closeSend {
      sem.signal()
    }
    _ = sem.wait()
  }
}

// Streaming extensions
protocol RNStreamReceiving {
  associatedtype ReceivedType: RNProtoMessage
  
  var call: Call { get }
}

extension RNStreamReceiving {
  public func receive(completion: @escaping (ResultOrRPCError<ReceivedType?>) -> Void) throws {
    try call.receiveMessage { callResult in
      guard let responseData = callResult.resultData else {
        if callResult.success {
          completion(.result(nil))
        } else {
          completion(.error(.callError(callResult)))
        }
        return
      }
      if let response = try? ReceivedType(serializedData: responseData) {
        completion(.result(response))
      } else {
        completion(.error(.invalidMessageReceived))
      }
    }
  }
  
  public func _receive(timeout: DispatchTime) throws -> ReceivedType? {
    var result: ResultOrRPCError<ReceivedType?>?
    let sem = DispatchSemaphore(value: 0)
    try receive {
      result = $0
      sem.signal()
    }
    if sem.wait(timeout: timeout) == .timedOut {
      throw RPCError.timedOut
    }
    switch result! {
    case .result(let response): return response
    case .error(let error): throw error
    }
  }
}

protocol RNStreamSending {
  associatedtype SentType: RNProtoMessage
  
  var call: Call { get }
}

extension RNStreamSending {
  public func send(_ message: SentType, completion: @escaping (Error?) -> Void) throws {
    try call.sendMessage(data: message.serializedData(), completion: completion)
  }
  
  public func _send(_ message: SentType, timeout: DispatchTime) throws {
    var resultError: Error?
    let sem = DispatchSemaphore(value: 0)
    try send(message) {
      resultError = $0
      sem.signal()
    }
    if sem.wait(timeout: timeout) == .timedOut {
      throw RPCError.timedOut
    }
    if let resultError = resultError {
      throw resultError
    }
  }
  
  public func waitForSendOperationsToFinish() {
    call.messageQueueEmpty.wait()
  }
}

extension RNStreamSending where Self: ServerSessionBase {
  func close(withStatus status: ServerStatus = .ok, completion: (() -> Void)? = nil) throws {
    try handler.sendStatus(status, completion: completion)
  }
}



