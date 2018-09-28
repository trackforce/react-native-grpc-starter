package main

import (
	debugpb "do/pb/debug"
	"do/pkg/debug"
	"do/pkg/slog"
	"net"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	grpcrecovery "github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	grpcPort        = ":10000"
	healthCheckPort = ":10001"
)

func main() {
	slog.Init()

	lis, err := net.Listen("tcp", grpcPort)
	if err != nil {
		slog.Fatalf("failed to listen: %v", err)
	}

	// register servers
	unaryLogger, streamingLogger := createLoggingMiddlewares()
	s := grpc.NewServer(
		grpc_middleware.WithUnaryServerChain(
			unaryLogger,
			grpcrecovery.UnaryServerInterceptor(),
		),
		grpc_middleware.WithStreamServerChain(
			streamingLogger,
			grpcrecovery.StreamServerInterceptor(),
		),
	)

	debugpb.RegisterDebugServer(s, debug.NewDebugServer())
	reflection.Register(s)

	// handle graceful shutdown
	var gracefulStop = make(chan os.Signal)
	signal.Notify(gracefulStop, syscall.SIGTERM)
	signal.Notify(gracefulStop, syscall.SIGINT)
	go func() {
		<-gracefulStop
		s.GracefulStop()
		os.Exit(0)
	}()

	// start serving requests
	if err := s.Serve(lis); err != nil {
		slog.Fatalf("failed to serve: %v", err)
	}
}

func createLoggingMiddlewares() (grpc.UnaryServerInterceptor, grpc.StreamServerInterceptor) {
	logrusEntry := logrus.NewEntry(logrus.StandardLogger())
	opts := []grpc_logrus.Option{
		grpc_logrus.WithDurationField(func(duration time.Duration) (key string, value interface{}) {
			return "grpc.time_ns", duration.Nanoseconds()
		}),
	}
	grpc_logrus.ReplaceGrpcLogger(logrusEntry)

	unaryLogger := grpc_logrus.UnaryServerInterceptor(logrusEntry, opts...)
	streamingLogger := grpc_logrus.StreamServerInterceptor(logrusEntry, opts...)
	return unaryLogger, streamingLogger
}
