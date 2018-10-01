import { util } from 'protobufjs';

export class MockNativeEventEmitter {
    private readonly _emitter = new util.EventEmitter();
    emit(eventType: string, ...params: any[]): void {
        this._emitter.emit(eventType, ...params);
    }
    addListener(eventType: string, listener: (...args: any[]) => any) {
        this._emitter.on(eventType, listener);
    }
}
