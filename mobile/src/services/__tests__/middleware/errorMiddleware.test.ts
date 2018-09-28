import { errorMiddleware } from '../../grpc/middleware/errorMiddleware';
import { GrpcError } from '../../grpc/grpcError';

describe('errorMiddleware', () => {
    it('should return GrpcError instance on error', async () => {
        try {
            const next = () => Promise.reject(new Error('ups'));
            await errorMiddleware({}, next);
            fail();
        } catch (err) {
            expect(err.message).toBe('ups');
            expect(err instanceof GrpcError).toBeTruthy();
        }
    });
});
