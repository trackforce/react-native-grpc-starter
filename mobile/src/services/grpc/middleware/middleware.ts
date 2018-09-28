
export interface MiddlewareContext {
    req?: any;
    res?: any;
    [x: string]: any;
}
export type NextMiddlewareFn = () => Promise<any>;
export type MiddlewareFn = (ctx: MiddlewareContext, next?: NextMiddlewareFn) => Promise<any>;

export function compose(middlewares: MiddlewareFn[]): MiddlewareFn {
    if (!Array.isArray(middlewares)) {
        throw new TypeError('Middleware stack must be an array!');
    }

    for (const fn of middlewares) {
        if (typeof fn !== 'function') {
            throw new TypeError('Middleware must be composed of functions!');
        }
    }

    return (ctx: MiddlewareContext, next?: NextMiddlewareFn) => {
        // last called middleware
        let index = -1;
        const dispatch = (i) => {
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times'));
            }

            index = i;

            let fn = middlewares[i];
            if (i === middlewares.length) {
                fn = next;
            }
            if (!fn) {
                return Promise.resolve();
            }

            try {
                return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
            } catch (err) {
                return Promise.reject(err);
            }
        };

        return dispatch(0);
    };
}
