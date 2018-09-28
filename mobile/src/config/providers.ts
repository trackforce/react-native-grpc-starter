import {
    GrpcService
} from '../services';
import { loggingMiddleware } from '../services/grpc/middleware/loggingMiddleware';

import { NativeModules } from 'react-native';
import { GrpcCore } from '../services/grpc';
import { errorMiddleware } from '../services/grpc/middleware/errorMiddleware';

interface Providers {
    grpcService: GrpcService;
    grpcCore: GrpcCore;
}

const grpcCore = new GrpcCore(NativeModules.GrpcNative);
grpcCore.addUnaryMiddlewares(
    loggingMiddleware,
    errorMiddleware
);
const grpcService = new GrpcService(grpcCore);

export const providers: Providers = {
    grpcCore,
    grpcService
};
