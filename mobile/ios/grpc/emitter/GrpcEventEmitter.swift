import Foundation

struct GrpcEvents {
  static let grpcStreamReceive = "grpcStreamReceive"
  static let grpcStreamError = "grpcStreamError"
  static let grpcStreamEnd = "grpcStreamEnd"
}

class GrpcEventEmitter {

  /// Shared Instance.
  public static var instance = GrpcEventEmitter()

  // RNGrpcEventEmitter is instantiated by React Native with the bridge.
  private static var eventEmitter: RNGrpcEventEmitter!

  private init() {}

  // When React Native instantiates the emitter it is registered here.
  func registerEventEmitter(eventEmitter: RNGrpcEventEmitter) {
    GrpcEventEmitter.eventEmitter = eventEmitter
  }
  
  func grpcStreamReceive(method: String, data: String) -> Void {
    let body: [String: String] = [
      "method": method,
      "data": data
    ]
    GrpcEventEmitter.eventEmitter.sendEvent(withName: GrpcEvents.grpcStreamReceive, body: body)
  }
  
  func grpcStreamError(method: String, data: String) -> Void {
    let body: [String: String] = [
      "method": method,
      "data": data
    ]
    GrpcEventEmitter.eventEmitter.sendEvent(withName: GrpcEvents.grpcStreamError, body: body)
  }
  
  func grpcStreamEnd(method: String, data: String) -> Void {
    let body: [String: String] = [
      "method": method,
      "data": data
    ]
    GrpcEventEmitter.eventEmitter.sendEvent(withName: GrpcEvents.grpcStreamEnd, body: body)
  }
  
  /// All Events which must be support by React Native.
  lazy var allEvents: [String] = {
    var allEventNames: [String] = [GrpcEvents.grpcStreamReceive, GrpcEvents.grpcStreamError, GrpcEvents.grpcStreamEnd]
    // Append all events here
    return allEventNames
  }()

}
