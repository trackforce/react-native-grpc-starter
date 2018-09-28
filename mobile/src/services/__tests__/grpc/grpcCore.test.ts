import { GrpcCore, GrpcNative } from '../../grpc';
import { MiddlewareFn } from '../../grpc/middleware/middleware';
import { debug as debugpb } from '../../../pb';
import { Buffer } from 'buffer';

describe('GrpcCore', () => {

    let grpcCore: GrpcCore;
    let grpcNative: PartialMock<GrpcNative>;
    beforeEach(async () => {
        grpcNative = {
            initialize: jest.fn(),
            makeUnaryCall: jest.fn(),
            setMetadata: jest.fn()
        };
        grpcCore = new GrpcCore(grpcNative as any);
    });

    it('should initialize', async () => {
        await grpcCore.initialize('url', true, 'cert.pem');

        expect(grpcNative.initialize).toHaveBeenCalledWith('url', true, 'cert.pem');
    });

    describe('when initialized', () => {
        beforeEach(async () => {
            await grpcCore.initialize('', false, '');
        });

        it('should add licence metadata', async () => {
            await grpcCore.addLicenceMetadata('L1');

            expect(grpcNative.setMetadata).toHaveBeenCalledWith({ 'x-licence-id': 'L1' });
        });

        it('should create RCP service', async () => {
            grpcNative.makeUnaryCall.mockImplementation(() => {
                const replyBytes = debugpb.PingReply.encode({ message: 'pong' }).finish();
                const replyBase64String = Buffer.from(replyBytes).toString('base64');
                return Promise.resolve(replyBase64String);
            });
            const debug = grpcCore.createService('debug.Debug', debugpb.Debug) as debugpb.Debug;

            const reply = await debug.ping({ message: 'ping' });

            expect(reply.message).toBe('pong');
            expect(grpcNative.makeUnaryCall).toHaveBeenCalledWith('/debug.Debug/Ping', 'CgRwaW5n');
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
