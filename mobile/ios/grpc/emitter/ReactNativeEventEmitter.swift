import Foundation

@objc(RNGrpcEventEmitter)
open class RNGrpcEventEmitter: RCTEventEmitter {
  
  override init() {
    super.init()
    GrpcEventEmitter.instance.registerEventEmitter(eventEmitter: self)
  }
  
  /// Base overide for RCTEventEmitter.
  ///
  /// - Returns: all supported events
  @objc open override func supportedEvents() -> [String] {
    return GrpcEventEmitter.instance.allEvents
  }
}
