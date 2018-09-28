import { MiddlewareFn } from './middleware';
import { GrpcError } from '../grpcError';

export const errorMiddleware: MiddlewareFn = async (_, next) => {
    try {
        await next();
    } catch (err) {
        err = err || new Error();
        const grpcErr = new GrpcError(err.message);
        grpcErr.name = err.name;
        grpcErr.stack = err.stack;
        grpcErr.code = err.code;
        throw grpcErr;
    }
};
