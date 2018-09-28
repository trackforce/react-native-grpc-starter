import { MiddlewareFn } from './middleware';

export const loggingMiddleware: MiddlewareFn = async (ctx, next) => {
    try {
        trace('grpc request:', ctx.req);
        await next();
        trace('grpc reply:', ctx.res);
    } catch (err) {
        trace('grpc err:', err);
        throw err;
    }
};

function trace(message?: any, ...optionalParams: any[]) {
    if (__DEV__) {
        // tslint:disable-next-line:no-console
        console.log(message, ...optionalParams);
    }
}
