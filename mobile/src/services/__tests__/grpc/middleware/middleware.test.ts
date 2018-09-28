import { compose, MiddlewareFn } from '../../../grpc/middleware/middleware';

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || 1));
}

function isPromise(x) {
    return x && typeof x.then === 'function';
}

describe('Middleware Compose', () => {
    it('should compose', async () => {
        const arr = [];
        const stack = [];

        stack.push(async (_context, next) => {
            arr.push(1);
            await wait(1);
            await next();
            await wait(1);
            arr.push(6);
        });

        stack.push(async (_context, next) => {
            arr.push(2);
            await wait(1);
            await next();
            await wait(1);
            arr.push(5);
        });

        stack.push(async (_context, next) => {
            arr.push(3);
            await wait(1);
            await next();
            await wait(1);
            arr.push(4);
        });

        await compose(stack)({});
        expect(arr).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
    });

    it('should be able to be called twice', () => {
        const stack: MiddlewareFn[] = [];

        stack.push(async (context, next) => {
            context.arr.push(1);
            await wait(1);
            await next();
            await wait(1);
            context.arr.push(6);
        });

        stack.push(async (context, next) => {
            context.arr.push(2);
            await wait(1);
            await next();
            await wait(1);
            context.arr.push(5);
        });

        stack.push(async (context, next) => {
            context.arr.push(3);
            await wait(1);
            await next();
            await wait(1);
            context.arr.push(4);
        });

        const fn = compose(stack);
        const ctx1 = { arr: [] };
        const ctx2 = { arr: [] };
        const out = [1, 2, 3, 4, 5, 6];

        return fn(ctx1).then(() => {
            expect(out).toEqual(ctx1.arr);
            return fn(ctx2);
        }).then(() => {
            expect(out).toEqual(ctx2.arr);
        });
    });

    it('should only accept an array', () => {
        let err;
        try {
            expect(compose(null)).toThrow();
        } catch (e) {
            err = e;
        }
        return expect(err).toBeInstanceOf(TypeError);
    });

    it('should create next functions that return a Promise', () => {
        const stack = [];
        const arr = [];
        for (let i = 0; i < 5; i++) {
            stack.push((_context, next) => {
                arr.push(next());
            });
        }

        compose(stack)({});

        for (const next of arr) {
            expect(isPromise(next)).toBeTruthy();
        }
    });

    it('should work with 0 middleware', () => {
        return compose([])({});
    });

    it('should only accept middleware as functions', () => {
        let err;
        try {
            expect(compose([{} as any])).toThrow();
        } catch (e) {
            err = e;
        }
        return expect(err).toBeInstanceOf(TypeError);
    });

    it('should work when yielding at the end of the stack', async () => {
        const stack = [];
        let called = false;

        stack.push(async (_ctx, next) => {
            await next();
            called = true;
        });

        await compose(stack)({});
        expect(called).toBeTruthy();
    });

    it('should reject on errors in middleware', () => {
        const stack = [];

        stack.push(() => { throw new Error(); });

        return compose(stack)({})
            .then(() => {
                throw new Error('promise was not rejected');
            })
            .catch((e) => {
                expect(e).toBeInstanceOf(Error);
            });
    });

    it('should work when yielding at the end of the stack with yield*', () => {
        const stack = [];

        stack.push(async (_ctx, next) => {
            await next;
        });

        return compose(stack)({});
    });

    it('should keep the context', () => {
        const ctx = {};

        const stack = [];

        stack.push(async (ctx2, next) => {
            await next();
            expect(ctx2).toEqual(ctx);
        });

        stack.push(async (ctx2, next) => {
            await next();
            expect(ctx2).toEqual(ctx);
        });

        stack.push(async (ctx2, next) => {
            await next();
            expect(ctx2).toEqual(ctx);
        });

        return compose(stack)(ctx);
    });

    it('should catch downstream errors', async () => {
        const arr = [];
        const stack = [];

        stack.push(async (_ctx, next) => {
            arr.push(1);
            try {
                arr.push(6);
                await next();
                arr.push(7);
            } catch (err) {
                arr.push(2);
            }
            arr.push(3);
        });

        stack.push(async (_ctx, _next) => {
            arr.push(4);
            throw new Error();
        });

        await compose(stack)({});
        expect(arr).toEqual([1, 6, 4, 2, 3]);
    });

    it('should compose w/ next', () => {
        let called = false;

        return compose([])({}, async () => {
            called = true;
        }).then(() => {
            expect(called).toBeTruthy();
        });
    });

    it('should handle errors in wrapped non-async functions', () => {
        const stack = [];

        stack.push(() => {
            throw new Error();
        });

        return compose(stack)({}).then(() => {
            throw new Error('promise was not rejected');
        }).catch((e) => {
            expect(e).toBeInstanceOf(Error);
        });
    });
});
