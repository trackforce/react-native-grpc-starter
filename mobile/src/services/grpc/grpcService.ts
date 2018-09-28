import { debug } from '../../pb';
import { GrpcCore } from './grpcCore';
import { RPCServerStream, RPCClientStream, RPCBidiStream } from 'protobufjs';
/**
 * GrpcService is used to call backend service
 */
export class GrpcService {
    static readonly injectKey = 'grpcService';
    private readonly _debug: debug.Debug;

    constructor(private readonly _core: GrpcCore) {
        this._debug = _core.createService('debug.Debug', debug.Debug);
    }

    // debug module
    getVersion(req: debug.IGetVersionRequest): Promise<debug.IGetVersionRequest> {
        const fn = (r) => this._debug.getVersion(r);
        return this._core.unaryCall(fn, req);
    }

    ping(req: debug.IPingRequest): Promise<debug.IPingReply> {
        const fn = (r) => this._debug.ping(r);
        return this._core.unaryCall(fn, req);
    }

    serverStream(req: debug.IStreamRequest): RPCServerStream<debug.IStreamReply> {
        const fn = (r) => this._debug.serverStream(r);
        return this._core.serverStreamingCall(fn, req);
    }

    clientStream(): RPCClientStream<debug.IStreamRequest> {
        const fn = () => this._debug.clientStream();
        return this._core.clientStreamingCall(fn);
    }

    bidiStream(): RPCBidiStream<debug.IStreamRequest, debug.IStreamReply> {
        const fn = () => this._debug.bidiStream();
        return this._core.bidiStreamingCall(fn);
    }
}
