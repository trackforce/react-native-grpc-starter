import { GrpcCore, GrpcNative, GrpcEvents } from '../../grpc';
import { MiddlewareFn } from '../../grpc/middleware/middleware';
import { debug as debugpb } from '../../../pb';
import { Buffer } from 'buffer';
import { MockNativeEventEmitter } from '../../../__mocks__/mockNativeEventEmitter';

describe('GrpcCore', () => {
    let grpcCore: GrpcCore;
    let grpcNative: PartialMock<GrpcNative>;
    let nativeEmitter: MockNativeEventEmitter;
    beforeEach(async () => {
        nativeEmitter = new MockNativeEventEmitter();
        grpcNative = {
            initialize: jest.fn(),
            makeUnaryCall: jest.fn(),
            setMetadata: jest.fn(),
            makeClientStream: jest.fn(),
            sendClientStream: jest.fn(),
            closeClientStream: jest.fn(),
            makeServerStream: jest.fn(),
            closeServerStream: jest.fn(),
            makeBidiStream: jest.fn(),
            sendBidiStream: jest.fn(),
            closeBidiStream: jest.fn()
        };
        grpcCore = new GrpcCore(grpcNative as any, () => nativeEmitter as any);
    });

    it('should initialize', async () => {
        await grpcCore.initialize('url', true, 'cert.pem');

        expect(grpcNative.initialize).toHaveBeenCalledWith('url', true, 'cert.pem');
    });

    describe('initialized', () => {
        let debugService: debugpb.Debug;
        beforeEach(async () => {
            await grpcCore.initialize('', false, '');
            debugService = grpcCore.createService<debugpb.Debug>('debug.Debug', debugpb.Debug);
        });

        it('should add licence metadata', async () => {
            await grpcCore.addLicenceMetadata('L1');

            expect(grpcNative.setMetadata).toHaveBeenCalledWith({ 'x-licence-id': 'L1' });
        });

        it('should make unary call', async () => {
            grpcNative.makeUnaryCall.mockImplementation(() => {
                const replyBytes = debugpb.PingReply.encode({ message: 'pong' }).finish();
                const replyBase64String = Buffer.from(replyBytes).toString('base64');
                return Promise.resolve(replyBase64String);
            });

            const reply = await debugService.ping({ message: 'ping' });

            expect(reply.message).toBe('pong');
            expect(grpcNative.makeUnaryCall).toHaveBeenCalledWith('/debug.Debug/Ping', 'CgRwaW5n');
        });

        it('should make client stream call', () => {
            grpcNative.makeClientStream.mockResolvedValue(true);
            grpcNative.sendClientStream.mockResolvedValue(true);
            grpcNative.closeClientStream.mockResolvedValue(true);
            const stream = debugService.clientStream();

            stream.emit('send', new debugpb.StreamRequest({ message: 'ping'}));
            stream.emit('send', new debugpb.StreamRequest({ message: 'ping'}));
            stream.emit('close');

            expect(grpcNative.makeClientStream).toHaveBeenCalledWith('/debug.Debug/ClientStream');
            expect(grpcNative.sendClientStream).toHaveBeenCalledTimes(2);
            expect(grpcNative.sendClientStream).toHaveBeenCalledWith('/debug.Debug/ClientStream', 'CgRwaW5n');
            expect(grpcNative.closeClientStream).toHaveBeenCalled();
        });

        it('should emit client stream error when native error occurs', (done) => {
            grpcNative.makeClientStream.mockResolvedValue(true);
            grpcNative.sendClientStream.mockRejectedValue('ups');
            const stream = debugService.clientStream();
            
            stream.on('error', (err) => {
                expect(err).toBe('sendClientStream: ups');
                done();
            });
            stream.emit('send', new debugpb.StreamRequest({ message: 'ping'}));
        });

        it('should make server stream call', () => {
            const recvSpy = jest.fn();
            grpcNative.makeServerStream.mockResolvedValue(true);
            grpcNative.closeServerStream.mockResolvedValue(true);
            const stream = debugService.serverStream({message: 'ping'});
            const replyBytes = debugpb.PingReply.encode({ message: 'pong' }).finish();
            const replyBase64String = Buffer.from(replyBytes).toString('base64');
            stream.on('recv', recvSpy);

            nativeEmitter.emit(GrpcEvents.grpcStreamReceive, {
                method: '/debug.Debug/ServerStream',
                data: replyBase64String
            });
            stream.emit('close');

            expect(grpcNative.makeServerStream).toHaveBeenCalledWith('/debug.Debug/ServerStream', 'CgRwaW5n');
            expect(grpcNative.closeServerStream).toHaveBeenCalled();
            expect(recvSpy).toHaveBeenCalledWith({ message: 'pong'});
        });

        it('should emit server stream error when native error occurs', (done) => {
            grpcNative.makeServerStream.mockResolvedValue(true);
            grpcNative.closeServerStream.mockResolvedValue(true);
            const stream = debugService.serverStream({message: 'ping'});

            stream.on('error', (err) => {
                expect(err).toBe('ups');
                done();
            });

            nativeEmitter.emit(GrpcEvents.grpcStreamError, {
                method: '/debug.Debug/ServerStream',
                data: 'ups'
            });
        });

        it('should make bidi stream call', () => {
            const recvSpy = jest.fn();
            grpcNative.makeBidiStream.mockResolvedValue(true);
            grpcNative.sendBidiStream.mockResolvedValue(true);
            grpcNative.closeBidiStream.mockResolvedValue(true);
            const stream = debugService.bidiStream();
            const replyBytes = debugpb.PingReply.encode({ message: 'pong' }).finish();
            const replyBase64String = Buffer.from(replyBytes).toString('base64');
            stream.on('recv', recvSpy);

            stream.emit('send', new debugpb.StreamRequest({ message: 'ping'}));
            nativeEmitter.emit(GrpcEvents.grpcStreamReceive, {
                method: '/debug.Debug/BidiStream',
                data: replyBase64String
            });
            stream.emit('close');

            expect(grpcNative.makeBidiStream).toHaveBeenCalledWith('/debug.Debug/BidiStream');
            expect(grpcNative.sendBidiStream).toHaveBeenCalledWith('/debug.Debug/BidiStream', 'CgRwaW5n');
            expect(grpcNative.closeBidiStream).toHaveBeenCalled();
            expect(recvSpy).toHaveBeenCalledWith({ message: 'pong'});
        });

        it('should emit error when failed to send bidi stream call', (done) => {
            grpcNative.makeBidiStream.mockResolvedValue(true);
            grpcNative.sendBidiStream.mockRejectedValue('ah');
            const stream = debugService.bidiStream();

            stream.on('error', (err) => {
                expect(err).toBe('ah');
                done();
            });
            stream.emit('send', new debugpb.StreamRequest({ message: 'ping'}));
            nativeEmitter.emit(GrpcEvents.grpcStreamError, {
                method: '/debug.Debug/BidiStream',
                data: 'ah'
            });
        });

        it('should add and use middlewares', async () => {
            const loggingCall = jest.fn();
            const errorsMiddlewre: MiddlewareFn = async (_ctx, next) => {
                try {
                    await next();
                } catch (err) {
                    loggingCall();
                    throw err;
                }
            };

            let startTraceCall = jest.fn();
            let endTraceCall = jest.fn();
            const tracingMiddleware: MiddlewareFn = async (_ctx, next) => {
                startTraceCall();
                await next();
                endTraceCall();
            };

            grpcCore.addUnaryMiddlewares(errorsMiddlewre);
            grpcCore.addUnaryMiddlewares(tracingMiddleware);

            // success case
            const res = await grpcCore.unaryCall((req) => Promise.resolve(req), 'ok');
            expect(res).toBe('ok');
            expect(loggingCall).not.toHaveBeenCalled();
            expect(startTraceCall).toHaveBeenCalled();
            expect(endTraceCall).toHaveBeenCalled();

            // fail case
            startTraceCall = jest.fn();
            endTraceCall = jest.fn();

            const failFn = () => {
                throw new Error('ups');
            };
            await expect(grpcCore.unaryCall(failFn, 'ups')).rejects.toThrow();
            expect(loggingCall).toHaveBeenCalled();
            expect(startTraceCall).toHaveBeenCalled();
            expect(endTraceCall).not.toBeCalled();
        });
    });
});
