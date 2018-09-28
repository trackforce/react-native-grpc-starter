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
// import { NativeEventEmitter, NativeModules } from 'react-native';

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

enum GrpcEvents {
    grpcStreamReceive = 'grpcStreamReceive',
    grpcStreamError = 'grpcStreamError',
    grpcStreamEnd = 'grpcStreamEnd'
}

/**
 * GrpcHandler is resposible for communicating with GrpcNative module.
 * Also it adds common abstractions like middlewares.
 */
export class GrpcCore {
    static readonly injectKey = 'grpcCore';

    private readonly _middlewares: MiddlewareFn[] = [];
    private _middlewareChain: MiddlewareFn = null;
    private _isInitialized = false;
    private _streamHandlers = new Map<string, StreamHandler>();
    private readonly _notInitializedError = new Error('GrpcHandler is not initialized');

    constructor(public readonly grpcNative: GrpcNative) { }

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
        const nativeStream = new NativeEventEmitter(NativeModules.RNGrpcEventEmitter);
        // TODO: unsubscrbibe !!!
        nativeStream.addListener(GrpcEvents.grpcStreamReceive, (e: GrpcNativeStreamEvent) => {
            if (!e) {
                return;
            }
            const h = this._streamHandlers.get(e.method);
            if (h) {
                const rspBytes = Buffer.from(e.data, 'base64');
                h.emitter.emit('recv', h.decodeFn(rspBytes));
            }
        });

        nativeStream.addListener(GrpcEvents.grpcStreamError, (e: GrpcNativeStreamEvent) => {
            const h = this._streamHandlers.get(e.method);
            if (h) {
                h.emitter.emit('error', e.data);
            }
        });

        nativeStream.addListener(GrpcEvents.grpcStreamEnd, (e: GrpcNativeStreamEvent) => {
            const h = this._streamHandlers.get(e.method);
            if (h) {
                h.emitter.emit('end', true);
                this._streamHandlers.delete(e.method);
            }
        });
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
                this._endStream(h, err);
            });
            h.emitter.on('close', () => {
                this.grpcNative.closeServerStream(methodName).catch((err) => {
                    this._endStream(h, `closeServerStream: ${err}`);
                });
                this._streamHandlers.delete(methodName);
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
                this._endStream(h, `makeClientStream: ${err}`);
            });

            h.emitter.on('send', (data) => {
                const reqBase64String = Buffer.from(encodeFn(data)).toString('base64');
                this.grpcNative.sendClientStream(methodName, reqBase64String).catch((err) => {
                    this._endStream(h, `sendClientStream: ${err}`);
                });
            });

            h.emitter.on('close', () => {
                this.grpcNative.closeClientStream(methodName).catch((err) => {
                    this._endStream(h, `closeClientStream: ${err}`);
                });
                this._streamHandlers.delete(methodName);
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
                this._endStream(h, err);
            });

            h.emitter.on('send', (data) => {
                const reqBase64String = Buffer.from(encodeFn(data)).toString('base64');
                this.grpcNative.sendBidiStream(methodName, reqBase64String).catch((err) => {
                    this._endStream(h, err);
                });
            });

            h.emitter.on('close', () => {
                this.grpcNative.closeBidiStream(methodName).catch((err) => {
                    this._endStream(h, err);
                });
                this._streamHandlers.delete(methodName);
            });
            return h.emitter;
        };
    }

    private _endStream(h: StreamHandler, err: any) {
        h.emitter.emit('error', err);
        h.emitter.emit('end', true);
        this._streamHandlers.delete(h.method);
    }
}
