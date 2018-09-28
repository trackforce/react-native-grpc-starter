package debug

import (
	"context"
	pb "do/pb/debug"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetVersion(t *testing.T) {
	s := NewDebugServer()
	rsp, err := s.GetVersion(context.Background(), &pb.GetVersionRequest{})

	assert.Nil(t, err)
	assert.NotEmpty(t, rsp.Version)
}

func TestPing(t *testing.T) {
	s := NewDebugServer()
	rsp, err := s.Ping(context.Background(), &pb.PingRequest{Message: "hi"})
	assert.Nil(t, err)
	assert.Equal(t, "Pong hi", rsp.Message)
}
