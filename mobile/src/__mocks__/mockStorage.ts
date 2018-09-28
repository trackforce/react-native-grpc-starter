export class MockStorage {
    constructor(public storageCache = new Map()) { }

    setItem = jest.fn((key, value) => {
        return new Promise((resolve, reject) => {
            return typeof key !== 'string' || typeof value !== 'string'
                ? reject(new Error('key and value must be string'))
                : resolve((this.storageCache.set(key, value)));
        });
    });

    getItem = jest.fn((key) => {
        if (key === 'fail') {
            return Promise.reject();
        }

        return new Promise((resolve) => {
            this.storageCache.has(key)
                ? resolve(this.storageCache.get(key))
                : resolve(null);
        });
    });

    removeItem = jest.fn((key) => {
        return new Promise((resolve, reject) => {
            this.storageCache.has(key)
                ? resolve(this.storageCache.delete(key))
                : reject('No such key!');
        });
    });

    clear = jest.fn((_) => {
        return new Promise((resolve) => {
            this.storageCache.clear();
            resolve();
        });
    });

    getAllKeys = jest.fn((_) => {
        return new Promise((resolve) => resolve(this.storageCache.keys()));
    });
}
