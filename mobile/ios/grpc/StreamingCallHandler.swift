import SwiftGRPC

class StreamingCallHandler {
  let call: Call
  init(call: Call) {
    self.call = call
  }
  
  // TODO: start type
  public func start(message: Data, metadata: Metadata, completion: ((CallResult) -> Void)?) throws -> Self {
    try self.call.start(.serverStreaming,
                        metadata: metadata,
                        message: message,
                        completion: completion)
    return self
  }

  public func receive() throws -> Data? {
    var result: ResultOrRPCError<Data?>?
    let sem = DispatchSemaphore(value: 0)
    try self.startReceive {
      result = $0
      sem.signal()
    }
    if sem.wait(timeout: .distantFuture) == .timedOut {
      throw RPCError.timedOut
    }
    switch result! {
    case .result(let response): return response
    case .error(let error): throw error
    }
  }
  
  private func startReceive(completion: @escaping (ResultOrRPCError<Data?>) -> Void) throws {
    try self.call.receiveMessage { callResult in
      guard let responseData = callResult.resultData else {
        if callResult.success {
          completion(.result(nil))
        } else {
          completion(.error(.callError(callResult)))
        }
        return
      }
      if let response = Optional(responseData) {
        completion(.result(response))
      } else {
        completion(.error(.invalidMessageReceived))
      }
    }
  }
  
  public func send(_ message: Data, timeout: DispatchTime) throws {
    var resultError: Error?
    let sem = DispatchSemaphore(value: 0)
    try self.startSend(message) {
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
  
  private func startSend(_ message: Data, completion: @escaping (Error?) -> Void) throws {
    try self.call.sendMessage(data: message, completion: completion)
  }
  
  public func waitForSendOperationsToFinish() {
    self.call.messageQueueEmpty.wait()
  }
  
}
