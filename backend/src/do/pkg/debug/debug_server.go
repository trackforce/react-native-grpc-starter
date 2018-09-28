package debug

import (
	"context"
	pb "do/pb/debug"
	"do/pkg/slog"
	"fmt"
	"io"
	"time"
)

func NewDebugServer() pb.DebugServer {
	return &debugServer{}
}

type debugServer struct{}

func (h *debugServer) GetVersion(_ context.Context, _ *pb.GetVersionRequest) (*pb.GetVersionReply, error) {
	return &pb.GetVersionReply{
		Version: "1.0.0",
	}, nil
}

func (h *debugServer) Ping(_ context.Context, in *pb.PingRequest) (*pb.PingReply, error) {
	return &pb.PingReply{
		Message: fmt.Sprintf("Pong %s", in.Message),
	}, nil
}

func (h *debugServer) BidiStream(stream pb.Debug_BidiStreamServer) error {
	for {
		msg := fmt.Sprintf("server ping %d", time.Now().Unix())
		if err := stream.Send(&pb.StreamReply{Message: msg}); err != nil {
			return fmt.Errorf("couldn't sent stream: %v", err)
		}
		rsp, err := stream.Recv()
		if err == io.EOF {
			slog.Infof("client closed stream: %v", err)
			return nil
		}
		if err != nil {
			return fmt.Errorf("couldn't receive client stream: %v", err)
		}
		fmt.Printf("client stream: %v\n", rsp)
		time.Sleep(time.Second)
	}
}

func (h *debugServer) ClientStream(stream pb.Debug_ClientStreamServer) error {
	for {
		rsp, err := stream.Recv()
		if err == io.EOF {
			fmt.Printf("client closed stream: %v", err)
			if err := stream.SendAndClose(&pb.StreamReply{Message: "OK"}); err != nil {
				return fmt.Errorf("couldn't SendAndClose: %v", err)
			}
			return nil
		}
		if err != nil {
			return fmt.Errorf("couldn't receive client stream: %v", err)
		}
		slog.Infof("client stream: %v\n", rsp)
	}
}

func (h *debugServer) ServerStream(in *pb.StreamRequest, stream pb.Debug_ServerStreamServer) error {
	fmt.Printf("got initial client request: %v\n", in)
	for {
		msg := fmt.Sprintf("server msg %d", time.Now().Unix())
		if err := stream.Send(&pb.StreamReply{Message: msg}); err != nil {
			return fmt.Errorf("couldn't sent stream: %v", err)
		}
		time.Sleep(time.Second)
	}
}
