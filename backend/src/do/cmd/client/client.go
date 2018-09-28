package main

import (
	"context"
	"do/pb/debug"
	"fmt"
	"io"
	"log"
	"time"

	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:10000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("couldn't dial grpc: %v", err)
	}
	defer conn.Close()

	tryPing(conn)
	// tryBidiStream(conn)
	// tryClientStream(conn)
	// tryServerStream(conn)
}

func tryPing(conn *grpc.ClientConn) {
	client := debug.NewDebugClient(conn)
	for {
		ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
		defer cancel()
		r, err := client.Ping(ctx, &debug.PingRequest{Message: "ping" + time.Now().String()})
		if err != nil {
			log.Fatalf("Ping could not reply: %v", err)
		}
		fmt.Printf("Ping reply: %v", r)
		time.Sleep(time.Second)
	}
}

func tryVersion(conn *grpc.ClientConn) {
	client := debug.NewDebugClient(conn)
	r, err := client.GetVersion(context.Background(), &debug.GetVersionRequest{})
	if err != nil {
		log.Fatalf("GetVersion could not reply: %v", err)
	}
	fmt.Printf("GetVersion reply: %v", r)
}

func tryBidiStream(conn *grpc.ClientConn) {
	client := debug.NewDebugClient(conn)
	ctx := context.Background()
	stream, err := client.BidiStream(ctx)
	if err != nil {
		log.Fatalf("could not get server stream: %v", err)
	}
	for {
		data, err := stream.Recv()
		if err == io.EOF {
			fmt.Println("end of stream")
			break
		}
		if err != nil {
			log.Fatalf("could not handle stream data: %v", err)
		}
		log.Println(data)
		if err := stream.Send(&debug.StreamRequest{Message: fmt.Sprintf("client ping %d", time.Now().Unix())}); err != nil {
			log.Fatalf("could not send client stream: %v", err)
		}
	}
}

func tryClientStream(conn *grpc.ClientConn) {
	client := debug.NewDebugClient(conn)
	ctx := context.Background()
	stream, err := client.ClientStream(ctx)
	if err != nil {
		log.Fatalf("could not get server stream: %v", err)
	}
	for {
		if err := stream.Send(&debug.StreamRequest{Message: fmt.Sprintf("client ping %d", time.Now().Unix())}); err != nil {
			log.Printf("could not send client stream: %v", err)
		}
		time.Sleep(time.Second)
	}
}

func tryServerStream(conn *grpc.ClientConn) {
	client := debug.NewDebugClient(conn)
	ctx := context.Background()
	stream, err := client.ServerStream(ctx, &debug.StreamRequest{Message: "initial client request"})
	if err != nil {
		log.Fatalf("could not get server stream: %v", err)
	}
	for {
		data, err := stream.Recv()
		if err == io.EOF {
			fmt.Println("end of stream")
			break
		}
		log.Println(data)
		if err != nil {
			fmt.Printf("could not handle stream data: %v", err)
		}
	}
}
