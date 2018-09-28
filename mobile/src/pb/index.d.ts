import * as $protobuf from "protobufjs";
/** Namespace debug. */
export namespace debug {

    /** Represents a Debug */
    class Debug extends $protobuf.rpc.Service {

        /**
         * Constructs a new Debug service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Debug service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Debug;

        /**
         * Calls GetVersion.
         * @param request GetVersionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVersionReply
         */
        public getVersion(request: debug.IGetVersionRequest, callback: debug.Debug.GetVersionCallback): void;

        /**
         * Calls GetVersion.
         * @param request GetVersionRequest message or plain object
         * @returns Promise
         */
        public getVersion(request: debug.IGetVersionRequest): Promise<debug.GetVersionReply>;

        /**
         * Calls Ping.
         * @param request PingRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PingReply
         */
        public ping(request: debug.IPingRequest, callback: debug.Debug.PingCallback): void;

        /**
         * Calls Ping.
         * @param request PingRequest message or plain object
         * @returns Promise
         */
        public ping(request: debug.IPingRequest): Promise<debug.PingReply>;

        /**
         * Calls ServerStream.
         * @param request StreamRequest message or plain object
         */
        public serverStream(request: debug.IStreamRequest): RPCServerStream<debug.StreamReply>;

        /**
         * Calls ClientStream.
         */
        public clientStream(): RPCClientStream<debug.StreamRequest>;

        /**
         * Calls BidiStream.
         * @returns {RPCBidiStream<debug.StreamRequest, debug.StreamReply>}
         */
        public bidiStream(): RPCBidiStream<debug.StreamRequest, debug.StreamReply>;
    }

    namespace Debug {

        /**
         * Callback as used by {@link debug.Debug#getVersion}.
         * @param error Error, if any
         * @param [response] GetVersionReply
         */
        type GetVersionCallback = (error: (Error|null), response?: debug.GetVersionReply) => void;

        /**
         * Callback as used by {@link debug.Debug#ping}.
         * @param error Error, if any
         * @param [response] PingReply
         */
        type PingCallback = (error: (Error|null), response?: debug.PingReply) => void;
    }

    /** Properties of a GetVersionRequest. */
    interface IGetVersionRequest {
    }

    /** Represents a GetVersionRequest. */
    class GetVersionRequest implements IGetVersionRequest {

        /**
         * Constructs a new GetVersionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IGetVersionRequest);

        /**
         * Creates a new GetVersionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVersionRequest instance
         */
        public static create(properties?: debug.IGetVersionRequest): debug.GetVersionRequest;

        /**
         * Encodes the specified GetVersionRequest message. Does not implicitly {@link debug.GetVersionRequest.verify|verify} messages.
         * @param message GetVersionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link debug.GetVersionRequest.verify|verify} messages.
         * @param message GetVersionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IGetVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVersionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.GetVersionRequest;

        /**
         * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.GetVersionRequest;

        /**
         * Verifies a GetVersionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVersionRequest
         */
        public static fromObject(object: { [k: string]: any }): debug.GetVersionRequest;

        /**
         * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
         * @param message GetVersionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.GetVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVersionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVersionReply. */
    interface IGetVersionReply {

        /** GetVersionReply version */
        version?: (string|null);
    }

    /** Represents a GetVersionReply. */
    class GetVersionReply implements IGetVersionReply {

        /**
         * Constructs a new GetVersionReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IGetVersionReply);

        /** GetVersionReply version. */
        public version: string;

        /**
         * Creates a new GetVersionReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVersionReply instance
         */
        public static create(properties?: debug.IGetVersionReply): debug.GetVersionReply;

        /**
         * Encodes the specified GetVersionReply message. Does not implicitly {@link debug.GetVersionReply.verify|verify} messages.
         * @param message GetVersionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IGetVersionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVersionReply message, length delimited. Does not implicitly {@link debug.GetVersionReply.verify|verify} messages.
         * @param message GetVersionReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IGetVersionReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVersionReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVersionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.GetVersionReply;

        /**
         * Decodes a GetVersionReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVersionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.GetVersionReply;

        /**
         * Verifies a GetVersionReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVersionReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVersionReply
         */
        public static fromObject(object: { [k: string]: any }): debug.GetVersionReply;

        /**
         * Creates a plain object from a GetVersionReply message. Also converts values to other types if specified.
         * @param message GetVersionReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.GetVersionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVersionReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingRequest. */
    interface IPingRequest {

        /** PingRequest message */
        message?: (string|null);
    }

    /** Represents a PingRequest. */
    class PingRequest implements IPingRequest {

        /**
         * Constructs a new PingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IPingRequest);

        /** PingRequest message. */
        public message: string;

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingRequest instance
         */
        public static create(properties?: debug.IPingRequest): debug.PingRequest;

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link debug.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link debug.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.PingRequest;

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.PingRequest;

        /**
         * Verifies a PingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingRequest
         */
        public static fromObject(object: { [k: string]: any }): debug.PingRequest;

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @param message PingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingReply. */
    interface IPingReply {

        /** PingReply message */
        message?: (string|null);
    }

    /** Represents a PingReply. */
    class PingReply implements IPingReply {

        /**
         * Constructs a new PingReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IPingReply);

        /** PingReply message. */
        public message: string;

        /**
         * Creates a new PingReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingReply instance
         */
        public static create(properties?: debug.IPingReply): debug.PingReply;

        /**
         * Encodes the specified PingReply message. Does not implicitly {@link debug.PingReply.verify|verify} messages.
         * @param message PingReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IPingReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingReply message, length delimited. Does not implicitly {@link debug.PingReply.verify|verify} messages.
         * @param message PingReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IPingReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.PingReply;

        /**
         * Decodes a PingReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.PingReply;

        /**
         * Verifies a PingReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingReply
         */
        public static fromObject(object: { [k: string]: any }): debug.PingReply;

        /**
         * Creates a plain object from a PingReply message. Also converts values to other types if specified.
         * @param message PingReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.PingReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamRequest. */
    interface IStreamRequest {

        /** StreamRequest message */
        message?: (string|null);
    }

    /** Represents a StreamRequest. */
    class StreamRequest implements IStreamRequest {

        /**
         * Constructs a new StreamRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IStreamRequest);

        /** StreamRequest message. */
        public message: string;

        /**
         * Creates a new StreamRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamRequest instance
         */
        public static create(properties?: debug.IStreamRequest): debug.StreamRequest;

        /**
         * Encodes the specified StreamRequest message. Does not implicitly {@link debug.StreamRequest.verify|verify} messages.
         * @param message StreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamRequest message, length delimited. Does not implicitly {@link debug.StreamRequest.verify|verify} messages.
         * @param message StreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.StreamRequest;

        /**
         * Decodes a StreamRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.StreamRequest;

        /**
         * Verifies a StreamRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamRequest
         */
        public static fromObject(object: { [k: string]: any }): debug.StreamRequest;

        /**
         * Creates a plain object from a StreamRequest message. Also converts values to other types if specified.
         * @param message StreamRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.StreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StreamReply. */
    interface IStreamReply {

        /** StreamReply message */
        message?: (string|null);
    }

    /** Represents a StreamReply. */
    class StreamReply implements IStreamReply {

        /**
         * Constructs a new StreamReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: debug.IStreamReply);

        /** StreamReply message. */
        public message: string;

        /**
         * Creates a new StreamReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamReply instance
         */
        public static create(properties?: debug.IStreamReply): debug.StreamReply;

        /**
         * Encodes the specified StreamReply message. Does not implicitly {@link debug.StreamReply.verify|verify} messages.
         * @param message StreamReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: debug.IStreamReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StreamReply message, length delimited. Does not implicitly {@link debug.StreamReply.verify|verify} messages.
         * @param message StreamReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: debug.IStreamReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): debug.StreamReply;

        /**
         * Decodes a StreamReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): debug.StreamReply;

        /**
         * Verifies a StreamReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StreamReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamReply
         */
        public static fromObject(object: { [k: string]: any }): debug.StreamReply;

        /**
         * Creates a plain object from a StreamReply message. Also converts values to other types if specified.
         * @param message StreamReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: debug.StreamReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StreamReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
