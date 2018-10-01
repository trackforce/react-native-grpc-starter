import { compose, MiddlewareFn, MiddlewareContext } from './middleware/middleware';
import {
    RPCHandler,
    RPCUnaryCall,
    rpc,
    util,
    RPCServerStream,
    RPCClientStream,
    RPCBidiStream,
    RPCServerStreamCall,
    RPCClientStreamCall,
    RPCBidiStreamCall
} from 'protobufjs';
import { Buffer } from 'buffer';
import { EventEmitter, EventSubscription } from 'react-native';

interface GrpcMetadata {
    [K: string]: string;
}

export interface GrpcNative {
    initialize(apiUrl: string, secure: boolean, certFile: string): Promise<void>;
    setMetadata(metadata: GrpcMetadata);
    makeUnaryCall(method: string, data: string): Promise<string>;
    makeServerStream(method: string, data: string): Promise<string>;
    closeServerStream(method: string): Promise<string>;
    makeClientStream(method: string): Promise<string>;
    sendClientStream(method: string, data: string): Promise<string>;
    closeClientStream(method: string): Promise<string>;
    makeBidiStream(method: string): Promise<string>;
    sendBidiStream(method: string, data: string): Promise<string>;
    closeBidiStream(method: string): Promise<string>;
}

interface StreamHandler {
    emitter: util.EventEmitter;
    decodeFn: (rsp: Uint8Array) => any;
    method: string;
}

interface GrpcNativeStreamEvent {
    method: string;
    data: any;
}

export enum GrpcEvents {
    grpcStreamReceive = 'grpcStreamReceive',
    grpcStreamError = 'grpcStreamError',
    grpcStreamEnd = 'grpcStreamEnd'
}

type NativeEventEmitterFactory = () => EventEmitter;

/**
 * GrpcHandler is resposible for communicating with GrpcNative module.
 * Also it adds common abstractions like middlewares.
 */
export class GrpcCore {
    private readonly _middlewares: MiddlewareFn[] = [];
    private _middlewareChain: MiddlewareFn = null;
    private _isInitialized = false;
    private _streamHandlers = new Map<string, StreamHandler>();
    private readonly _notInitializedError = new Error('GrpcHandler is not initialized');
    private readonly _nativeEventEmitter: EventEmitter;
    private _nativeEventSubscriptions: EventSubscription[] = [];

    constructor(
        public readonly grpcNative: GrpcNative,
        nativeEventEmitterFactory: NativeEventEmitterFactory
    ) {
        this._nativeEventEmitter = nativeEventEmitterFactory();
    }

    async initialize(apiUrl: string, secure: boolean, certFile: string): Promise<void> {
        await this.grpcNative.initialize(apiUrl, secure, certFile);
        this._initializeListeners();
        this._isInitialized = true;
    }

    async addLicenceMetadata(licenceId: string) {
        if (!this._isInitialized) {
            throw this._notInitializedError;
        }
        await this.grpcNative.setMetadata({ 'x-licence-id': licenceId });
    }

    addUnaryMiddlewares(...fn: MiddlewareFn[]) {
        this._middlewares.push(...fn);
        this._middlewareChain = compose(this._middlewares);
    }

    createService<T extends rpc.Service>(name: string, service: typeof rpc.Service): T {
        const rpcHandler: RPCHandler = {
            unaryCall: this._createRcpUnaryImpl(name),
            serverStreamCall: this._createServerStreamImpl(name),
            clientStreamCall: this._createClientStreamImpl(name),
            bidiStreamCall: this._createBidiStreamImpl(name)
        };
        return new service(rpcHandler) as T;
    }

    unaryCall<T, U>(handler: (req: T) => Promise<U>, req: T): Promise<U> {
        if (!this._isInitialized) {
            throw this._notInitializedError;
        }
        if (!this._middlewareChain) {
            return handler(req);
        }
        const initialMiddleware: MiddlewareFn = async (ctx, next) => {
            ctx.res = await handler(req);
            await next();
        };
        const initialCtx: MiddlewareContext = { req };
        return this._middlewareChain(initialCtx, initialMiddleware as any).then(() => initialCtx.res);
    }

    serverStreamingCall<T, U>(handler: (req: T) => RPCServerStream<U>, req: T): RPCServerStream<U> {
        return handler(req);
    }

    clientStreamingCall<T>(handler: () => RPCClientStream<T>): RPCClientStream<T> {
        return handler();
    }

    bidiStreamingCall<T, U>(handler: () => RPCBidiStream<T, U>): RPCBidiStream<T, U> {
        return handler();
    }

    /**
     * Listen to GrpcNative stream events
     */
    private _initializeListeners() {
        this._nativeEventSubscriptions.forEach((sub) => sub.remove());
        this._nativeEventSubscriptions = [];

        const grpcStreamReceive = this._nativeEventEmitter.addListener(GrpcEvents.grpcStreamReceive, (e: GrpcNativeStreamEvent) => {
            const h = this._streamHandlers.get(e.method);
            if (h) {
                const rspBytes = Buffer.from(e.data, 'base64');
                this._emitStreamRecv(h, h.decodeFn(rspBytes));
            }
        });
        this._nativeEventSubscriptions.push(grpcStreamReceive);

        const grpcStreamError = this._nativeEventEmitter.addListener(GrpcEvents.grpcStreamError, (e: GrpcNativeStreamEvent) => {
            const h = this._streamHandlers.get(e.method);
            if (h) {
                this._emitStreamError(h, e.data);
            }
        });
        this._nativeEventSubscriptions.push(grpcStreamError);

        const grpcStreamEnd = this._nativeEventEmitter.addListener(GrpcEvents.grpcStreamEnd, (e: GrpcNativeStreamEvent) => {
            const h = this._streamHandlers.get(e.method);
            if (h) {
                this._emitStreamEnd(h);
                this._removeStreamHandler(h);
            }
        });
        this._nativeEventSubscriptions.push(grpcStreamEnd);
    }

    private _createRcpUnaryImpl(serviceName: string): RPCUnaryCall {
        return (method, requestData, callback) => {
            if (!requestData) {
                return;
            }
            const methodName = `/${serviceName}/${method.name}`;
            const reqBase64String = Buffer.from(requestData).toString('base64');
            this.grpcNative.makeUnaryCall(methodName, reqBase64String).then((rspBase64Sring) => {
                const rspBytes = Buffer.from(rspBase64Sring, 'base64');
                callback(null, rspBytes);
            }, (err) => {
                callback(err, null);
            });
        };
    }

    private _createServerStreamImpl(serviceName: string): RPCServerStreamCall {
        return (method, requestData, decodeFn) => {
            const methodName = `/${serviceName}/${method.name}`;
            let h = this._streamHandlers.get(methodName);
            if (h) {
                return h.emitter;
            }
            h = { emitter: new util.EventEmitter(), decodeFn, method: methodName };
            this._streamHandlers.set(methodName, h);

            const reqBase64String = Buffer.from(requestData).toString('base64');
            this.grpcNative.makeServerStream(methodName, reqBase64String).catch((err) => {
                this._emitStreamError(h, err);
                this._removeStreamHandler(h);
            });
            h.emitter.on('close', () => {
                this.grpcNative.closeServerStream(methodName).catch((err) => {
                    this._emitStreamError(h, `closeServerStream: ${err}`);
                });
                this._removeStreamHandler(h);
            });
            return h.emitter;
        };
    }

    private _createClientStreamImpl(serviceName: string): RPCClientStreamCall {
        return (method, encodeFn, decodeFn) => {
            const methodName = `/${serviceName}/${method.name}`;
            let h = this._streamHandlers.get(methodName);
            if (h) {
                return h.emitter;
            }
            h = { emitter: new util.EventEmitter(), decodeFn, method: methodName };
            this._streamHandlers.set(methodName, h);

            this.grpcNative.makeClientStream(methodName).catch((err) => {
                this._emitStreamError(h, `makeClientStream: ${err}`);
            });

            h.emitter.on('send', (data) => {
                const reqBase64String = Buffer.from(encodeFn(data)).toString('base64');
                this.grpcNative.sendClientStream(methodName, reqBase64String).catch((err) => {
                    this._emitStreamError(h, `sendClientStream: ${err}`);
                });
            });

            h.emitter.on('close', () => {
                this.grpcNative.closeClientStream(methodName).catch((err) => {
                    this._emitStreamError(h, `closeClientStream: ${err}`);
                });
                this._removeStreamHandler(h);
            });
            return h.emitter;
        };
    }

    private _createBidiStreamImpl(serviceName: string): RPCBidiStreamCall {
        return (method, encodeFn, decodeFn) => {
            const methodName = `/${serviceName}/${method.name}`;
            let h = this._streamHandlers.get(methodName);
            if (h) {
                return h.emitter;
            }
            h = { emitter: new util.EventEmitter(), decodeFn, method: methodName };
            this._streamHandlers.set(methodName, h);

            this.grpcNative.makeBidiStream(methodName).catch((err) => {
                this._emitStreamError(h, err);
            });

            h.emitter.on('send', (data) => {
                const reqBase64String = Buffer.from(encodeFn(data)).toString('base64');
                this.grpcNative.sendBidiStream(methodName, reqBase64String).catch((err) => {
                    this._emitStreamError(h, err);
                });
            });

            h.emitter.on('close', () => {
                this.grpcNative.closeBidiStream(methodName).catch((err) => {
                    this._emitStreamError(h, err);
                });
                this._removeStreamHandler(h);
            });
            return h.emitter;
        };
    }

    private _emitStreamRecv(h: StreamHandler, data: any) {
        h.emitter.emit('recv', data);
    }

    private _emitStreamError(h: StreamHandler, err: any) {
        h.emitter.emit('error', err);
    }

    private _emitStreamEnd(h: StreamHandler) {
        h.emitter.emit('end', true);
    }

    private _removeStreamHandler(h: StreamHandler) {
        this._streamHandlers.delete(h.method);
    }
}
