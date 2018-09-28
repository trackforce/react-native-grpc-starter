package tours;

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
    comments = "Source: tours.proto")
public final class ToursGrpc {

  private ToursGrpc() {}

  public static final String SERVICE_NAME = "tours.Tours";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<tours.ToursOuterClass.GetToursRequest,
      tours.ToursOuterClass.GetToursReply> getGetToursMethod;

  public static io.grpc.MethodDescriptor<tours.ToursOuterClass.GetToursRequest,
      tours.ToursOuterClass.GetToursReply> getGetToursMethod() {
    io.grpc.MethodDescriptor<tours.ToursOuterClass.GetToursRequest, tours.ToursOuterClass.GetToursReply> getGetToursMethod;
    if ((getGetToursMethod = ToursGrpc.getGetToursMethod) == null) {
      synchronized (ToursGrpc.class) {
        if ((getGetToursMethod = ToursGrpc.getGetToursMethod) == null) {
          ToursGrpc.getGetToursMethod = getGetToursMethod = 
              io.grpc.MethodDescriptor.<tours.ToursOuterClass.GetToursRequest, tours.ToursOuterClass.GetToursReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tours.Tours", "GetTours"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  tours.ToursOuterClass.GetToursRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  tours.ToursOuterClass.GetToursReply.getDefaultInstance()))
                  .build();
          }
        }
     }
     return getGetToursMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ToursStub newStub(io.grpc.Channel channel) {
    return new ToursStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ToursBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ToursBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ToursFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ToursFutureStub(channel);
  }

  /**
   */
  public static abstract class ToursImplBase implements io.grpc.BindableService {

    /**
     */
    public void getTours(tours.ToursOuterClass.GetToursRequest request,
        io.grpc.stub.StreamObserver<tours.ToursOuterClass.GetToursReply> responseObserver) {
      asyncUnimplementedUnaryCall(getGetToursMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetToursMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                tours.ToursOuterClass.GetToursRequest,
                tours.ToursOuterClass.GetToursReply>(
                  this, METHODID_GET_TOURS)))
          .build();
    }
  }

  /**
   */
  public static final class ToursStub extends io.grpc.stub.AbstractStub<ToursStub> {
    private ToursStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ToursStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ToursStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ToursStub(channel, callOptions);
    }

    /**
     */
    public void getTours(tours.ToursOuterClass.GetToursRequest request,
        io.grpc.stub.StreamObserver<tours.ToursOuterClass.GetToursReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetToursMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ToursBlockingStub extends io.grpc.stub.AbstractStub<ToursBlockingStub> {
    private ToursBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ToursBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ToursBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ToursBlockingStub(channel, callOptions);
    }

    /**
     */
    public tours.ToursOuterClass.GetToursReply getTours(tours.ToursOuterClass.GetToursRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetToursMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ToursFutureStub extends io.grpc.stub.AbstractStub<ToursFutureStub> {
    private ToursFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ToursFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ToursFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ToursFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<tours.ToursOuterClass.GetToursReply> getTours(
        tours.ToursOuterClass.GetToursRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetToursMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_TOURS = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ToursImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ToursImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_TOURS:
          serviceImpl.getTours((tours.ToursOuterClass.GetToursRequest) request,
              (io.grpc.stub.StreamObserver<tours.ToursOuterClass.GetToursReply>) responseObserver);
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
      synchronized (ToursGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .addMethod(getGetToursMethod())
              .build();
        }
      }
    }
    return result;
  }
}
