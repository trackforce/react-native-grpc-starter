import { GrpcStatusCode } from './grpcStatusCode';

export enum GrpcErrorReason {
    InvalidLicence = 'InvalidLicence'
}

export class GrpcError extends Error {
    code?: GrpcStatusCode;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = this.constructor.name;
    }
}
