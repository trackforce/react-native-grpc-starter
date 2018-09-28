package debug;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.14.0-SNAPSHOT)",
    comments = "Source: debug.proto")
public final class DebugGrpc {

  private DebugGrpc() {}

  public static final String SERVICE_NAME = "debug.Debug";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<debug.DebugOuterClass.GetDebugDataRequest,
      debug.DebugOuterClass.GetDebugDataReply> getGetDebugDataMethod;

  public static io.grpc.MethodDescriptor<debug.DebugOuterClass.GetDebugDataRequest,
      debug.DebugOuterClass.GetDebugDataReply> getGetDebugDataMethod() {
    io.grpc.MethodDescriptor<debug.DebugOuterClass.GetDebugDataRequest, debug.DebugOuterClass.GetDebugDataReply> getGetDebugDataMethod;
    if ((getGetDebugDataMethod = DebugGrpc.getGetDebugDataMethod) == null) {
      synchronized (DebugGrpc.class) {
        if ((getGetDebugDataMethod = DebugGrpc.getGetDebugDataMethod) == null) {
          DebugGrpc.getGetDebugDataMethod = getGetDebugDataMethod = 
              io.grpc.MethodDescriptor.<debug.DebugOuterClass.GetDebugDataRequest, debug.DebugOuterClass.GetDebugDataReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "debug.Debug", "GetDebugData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  debug.DebugOuterClass.GetDebugDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  debug.DebugOuterClass.GetDebugDataReply.getDefaultInstance()))
                  .build();
          }
        }
     }
     return getGetDebugDataMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DebugStub newStub(io.grpc.Channel channel) {
    return new DebugStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DebugBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new DebugBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DebugFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new DebugFutureStub(channel);
  }

  /**
   */
  public static abstract class DebugImplBase implements io.grpc.BindableService {

    /**
     */
    public void getDebugData(debug.DebugOuterClass.GetDebugDataRequest request,
        io.grpc.stub.StreamObserver<debug.DebugOuterClass.GetDebugDataReply> responseObserver) {
      asyncUnimplementedUnaryCall(getGetDebugDataMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetDebugDataMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                debug.DebugOuterClass.GetDebugDataRequest,
                debug.DebugOuterClass.GetDebugDataReply>(
                  this, METHODID_GET_DEBUG_DATA)))
          .build();
    }
  }

  /**
   */
  public static final class DebugStub extends io.grpc.stub.AbstractStub<DebugStub> {
    private DebugStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DebugStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DebugStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DebugStub(channel, callOptions);
    }

    /**
     */
    public void getDebugData(debug.DebugOuterClass.GetDebugDataRequest request,
        io.grpc.stub.StreamObserver<debug.DebugOuterClass.GetDebugDataReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetDebugDataMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class DebugBlockingStub extends io.grpc.stub.AbstractStub<DebugBlockingStub> {
    private DebugBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DebugBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DebugBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DebugBlockingStub(channel, callOptions);
    }

    /**
     */
    public debug.DebugOuterClass.GetDebugDataReply getDebugData(debug.DebugOuterClass.GetDebugDataRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetDebugDataMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class DebugFutureStub extends io.grpc.stub.AbstractStub<DebugFutureStub> {
    private DebugFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DebugFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DebugFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DebugFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<debug.DebugOuterClass.GetDebugDataReply> getDebugData(
        debug.DebugOuterClass.GetDebugDataRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetDebugDataMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_DEBUG_DATA = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final DebugImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(DebugImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_DEBUG_DATA:
          serviceImpl.getDebugData((debug.DebugOuterClass.GetDebugDataRequest) request,
              (io.grpc.stub.StreamObserver<debug.DebugOuterClass.GetDebugDataReply>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (DebugGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .addMethod(getGetDebugDataMethod())
              .build();
        }
      }
    }
    return result;
  }
}
