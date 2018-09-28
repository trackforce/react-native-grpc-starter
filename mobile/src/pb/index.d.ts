import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Represents an Auth */
    class Auth extends $protobuf.rpc.Service {

        /**
         * Constructs a new Auth service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Auth service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Auth;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SignInReply
         */
        public signIn(request: auth.ISignInRequest, callback: auth.Auth.SignInCallback): void;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @returns Promise
         */
        public signIn(request: auth.ISignInRequest): Promise<auth.SignInReply>;

        /**
         * Calls GetUsers.
         * @param request GetUsersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUsersReply
         */
        public getUsers(request: auth.IGetUsersRequest, callback: auth.Auth.GetUsersCallback): void;

        /**
         * Calls GetUsers.
         * @param request GetUsersRequest message or plain object
         * @returns Promise
         */
        public getUsers(request: auth.IGetUsersRequest): Promise<auth.GetUsersReply>;
    }

    namespace Auth {

        /**
         * Callback as used by {@link auth.Auth#signIn}.
         * @param error Error, if any
         * @param [response] SignInReply
         */
        type SignInCallback = (error: (Error|null), response?: auth.SignInReply) => void;

        /**
         * Callback as used by {@link auth.Auth#getUsers}.
         * @param error Error, if any
         * @param [response] GetUsersReply
         */
        type GetUsersCallback = (error: (Error|null), response?: auth.GetUsersReply) => void;
    }

    /** Properties of a SignInRequest. */
    interface ISignInRequest {

        /** SignInRequest username */
        username?: (string|null);

        /** SignInRequest password */
        password?: (string|null);
    }

    /** Represents a SignInRequest. */
    class SignInRequest implements ISignInRequest {

        /**
         * Constructs a new SignInRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ISignInRequest);

        /** SignInRequest username. */
        public username: string;

        /** SignInRequest password. */
        public password: string;

        /**
         * Creates a new SignInRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInRequest instance
         */
        public static create(properties?: auth.ISignInRequest): auth.SignInRequest;

        /**
         * Encodes the specified SignInRequest message. Does not implicitly {@link auth.SignInRequest.verify|verify} messages.
         * @param message SignInRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link auth.SignInRequest.verify|verify} messages.
         * @param message SignInRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.SignInRequest;

        /**
         * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.SignInRequest;

        /**
         * Verifies a SignInRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.SignInRequest;

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @param message SignInRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.SignInRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInReply. */
    interface ISignInReply {

        /** SignInReply token */
        token?: (string|null);
    }

    /** Represents a SignInReply. */
    class SignInReply implements ISignInReply {

        /**
         * Constructs a new SignInReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ISignInReply);

        /** SignInReply token. */
        public token: string;

        /**
         * Creates a new SignInReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInReply instance
         */
        public static create(properties?: auth.ISignInReply): auth.SignInReply;

        /**
         * Encodes the specified SignInReply message. Does not implicitly {@link auth.SignInReply.verify|verify} messages.
         * @param message SignInReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ISignInReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInReply message, length delimited. Does not implicitly {@link auth.SignInReply.verify|verify} messages.
         * @param message SignInReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ISignInReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.SignInReply;

        /**
         * Decodes a SignInReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.SignInReply;

        /**
         * Verifies a SignInReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInReply
         */
        public static fromObject(object: { [k: string]: any }): auth.SignInReply;

        /**
         * Creates a plain object from a SignInReply message. Also converts values to other types if specified.
         * @param message SignInReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.SignInReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUsersRequest. */
    interface IGetUsersRequest {

        /** GetUsersRequest guardroomId */
        guardroomId?: (string|null);
    }

    /** Represents a GetUsersRequest. */
    class GetUsersRequest implements IGetUsersRequest {

        /**
         * Constructs a new GetUsersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IGetUsersRequest);

        /** GetUsersRequest guardroomId. */
        public guardroomId: string;

        /**
         * Creates a new GetUsersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersRequest instance
         */
        public static create(properties?: auth.IGetUsersRequest): auth.GetUsersRequest;

        /**
         * Encodes the specified GetUsersRequest message. Does not implicitly {@link auth.GetUsersRequest.verify|verify} messages.
         * @param message GetUsersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link auth.GetUsersRequest.verify|verify} messages.
         * @param message GetUsersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.GetUsersRequest;

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.GetUsersRequest;

        /**
         * Verifies a GetUsersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.GetUsersRequest;

        /**
         * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
         * @param message GetUsersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.GetUsersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUsersReply. */
    interface IGetUsersReply {

        /** GetUsersReply items */
        items?: (auth.IUser[]|null);
    }

    /** Represents a GetUsersReply. */
    class GetUsersReply implements IGetUsersReply {

        /**
         * Constructs a new GetUsersReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IGetUsersReply);

        /** GetUsersReply items. */
        public items: auth.IUser[];

        /**
         * Creates a new GetUsersReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersReply instance
         */
        public static create(properties?: auth.IGetUsersReply): auth.GetUsersReply;

        /**
         * Encodes the specified GetUsersReply message. Does not implicitly {@link auth.GetUsersReply.verify|verify} messages.
         * @param message GetUsersReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IGetUsersReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersReply message, length delimited. Does not implicitly {@link auth.GetUsersReply.verify|verify} messages.
         * @param message GetUsersReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IGetUsersReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.GetUsersReply;

        /**
         * Decodes a GetUsersReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.GetUsersReply;

        /**
         * Verifies a GetUsersReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersReply
         */
        public static fromObject(object: { [k: string]: any }): auth.GetUsersReply;

        /**
         * Creates a plain object from a GetUsersReply message. Also converts values to other types if specified.
         * @param message GetUsersReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.GetUsersReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User roleId */
        roleId?: (string|null);

        /** User username */
        username?: (string|null);

        /** User firstname */
        firstname?: (string|null);

        /** User lastname */
        lastname?: (string|null);

        /** User languageId */
        languageId?: (string|null);

        /** User passwordBag */
        passwordBag?: (auth.IUserPasswordBag|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUser);

        /** User id. */
        public id: string;

        /** User roleId. */
        public roleId: string;

        /** User username. */
        public username: string;

        /** User firstname. */
        public firstname: string;

        /** User lastname. */
        public lastname: string;

        /** User languageId. */
        public languageId: string;

        /** User passwordBag. */
        public passwordBag?: (auth.IUserPasswordBag|null);

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: auth.IUser): auth.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): auth.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserPasswordBag. */
    interface IUserPasswordBag {

        /** UserPasswordBag hash */
        hash?: (string|null);

        /** UserPasswordBag salt */
        salt?: (string|null);

        /** UserPasswordBag mustBeChanged */
        mustBeChanged?: (boolean|null);
    }

    /** Represents a UserPasswordBag. */
    class UserPasswordBag implements IUserPasswordBag {

        /**
         * Constructs a new UserPasswordBag.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUserPasswordBag);

        /** UserPasswordBag hash. */
        public hash: string;

        /** UserPasswordBag salt. */
        public salt: string;

        /** UserPasswordBag mustBeChanged. */
        public mustBeChanged: boolean;

        /**
         * Creates a new UserPasswordBag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserPasswordBag instance
         */
        public static create(properties?: auth.IUserPasswordBag): auth.UserPasswordBag;

        /**
         * Encodes the specified UserPasswordBag message. Does not implicitly {@link auth.UserPasswordBag.verify|verify} messages.
         * @param message UserPasswordBag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUserPasswordBag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserPasswordBag message, length delimited. Does not implicitly {@link auth.UserPasswordBag.verify|verify} messages.
         * @param message UserPasswordBag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUserPasswordBag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPasswordBag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPasswordBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.UserPasswordBag;

        /**
         * Decodes a UserPasswordBag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserPasswordBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.UserPasswordBag;

        /**
         * Verifies a UserPasswordBag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserPasswordBag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserPasswordBag
         */
        public static fromObject(object: { [k: string]: any }): auth.UserPasswordBag;

        /**
         * Creates a plain object from a UserPasswordBag message. Also converts values to other types if specified.
         * @param message UserPasswordBag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.UserPasswordBag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserPasswordBag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

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

/** Namespace device. */
export namespace device {

    /** Represents a Device */
    class Device extends $protobuf.rpc.Service {

        /**
         * Constructs a new Device service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Device service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Device;

        /**
         * Calls StartActivation.
         * @param request StartActivationRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StartActivationReply
         */
        public startActivation(request: device.IStartActivationRequest, callback: device.Device.StartActivationCallback): void;

        /**
         * Calls StartActivation.
         * @param request StartActivationRequest message or plain object
         * @returns Promise
         */
        public startActivation(request: device.IStartActivationRequest): Promise<device.StartActivationReply>;

        /**
         * Calls CheckActivation.
         * @param request CheckActivationRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CheckActivationReply
         */
        public checkActivation(request: device.ICheckActivationRequest, callback: device.Device.CheckActivationCallback): void;

        /**
         * Calls CheckActivation.
         * @param request CheckActivationRequest message or plain object
         * @returns Promise
         */
        public checkActivation(request: device.ICheckActivationRequest): Promise<device.CheckActivationReply>;
    }

    namespace Device {

        /**
         * Callback as used by {@link device.Device#startActivation}.
         * @param error Error, if any
         * @param [response] StartActivationReply
         */
        type StartActivationCallback = (error: (Error|null), response?: device.StartActivationReply) => void;

        /**
         * Callback as used by {@link device.Device#checkActivation}.
         * @param error Error, if any
         * @param [response] CheckActivationReply
         */
        type CheckActivationCallback = (error: (Error|null), response?: device.CheckActivationReply) => void;
    }

    /** Properties of a StartActivationRequest. */
    interface IStartActivationRequest {

        /** StartActivationRequest deviceUniqueId */
        deviceUniqueId?: (string|null);

        /** StartActivationRequest brand */
        brand?: (string|null);

        /** StartActivationRequest model */
        model?: (string|null);

        /** StartActivationRequest version */
        version?: (string|null);
    }

    /** Represents a StartActivationRequest. */
    class StartActivationRequest implements IStartActivationRequest {

        /**
         * Constructs a new StartActivationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: device.IStartActivationRequest);

        /** StartActivationRequest deviceUniqueId. */
        public deviceUniqueId: string;

        /** StartActivationRequest brand. */
        public brand: string;

        /** StartActivationRequest model. */
        public model: string;

        /** StartActivationRequest version. */
        public version: string;

        /**
         * Creates a new StartActivationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartActivationRequest instance
         */
        public static create(properties?: device.IStartActivationRequest): device.StartActivationRequest;

        /**
         * Encodes the specified StartActivationRequest message. Does not implicitly {@link device.StartActivationRequest.verify|verify} messages.
         * @param message StartActivationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device.IStartActivationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartActivationRequest message, length delimited. Does not implicitly {@link device.StartActivationRequest.verify|verify} messages.
         * @param message StartActivationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device.IStartActivationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartActivationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device.StartActivationRequest;

        /**
         * Decodes a StartActivationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device.StartActivationRequest;

        /**
         * Verifies a StartActivationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartActivationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartActivationRequest
         */
        public static fromObject(object: { [k: string]: any }): device.StartActivationRequest;

        /**
         * Creates a plain object from a StartActivationRequest message. Also converts values to other types if specified.
         * @param message StartActivationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device.StartActivationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartActivationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartActivationReply. */
    interface IStartActivationReply {

        /** StartActivationReply deviceUniqueId */
        deviceUniqueId?: (string|null);
    }

    /** Represents a StartActivationReply. */
    class StartActivationReply implements IStartActivationReply {

        /**
         * Constructs a new StartActivationReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: device.IStartActivationReply);

        /** StartActivationReply deviceUniqueId. */
        public deviceUniqueId: string;

        /**
         * Creates a new StartActivationReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartActivationReply instance
         */
        public static create(properties?: device.IStartActivationReply): device.StartActivationReply;

        /**
         * Encodes the specified StartActivationReply message. Does not implicitly {@link device.StartActivationReply.verify|verify} messages.
         * @param message StartActivationReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device.IStartActivationReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartActivationReply message, length delimited. Does not implicitly {@link device.StartActivationReply.verify|verify} messages.
         * @param message StartActivationReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device.IStartActivationReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartActivationReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device.StartActivationReply;

        /**
         * Decodes a StartActivationReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device.StartActivationReply;

        /**
         * Verifies a StartActivationReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartActivationReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartActivationReply
         */
        public static fromObject(object: { [k: string]: any }): device.StartActivationReply;

        /**
         * Creates a plain object from a StartActivationReply message. Also converts values to other types if specified.
         * @param message StartActivationReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device.StartActivationReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartActivationReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckActivationRequest. */
    interface ICheckActivationRequest {

        /** CheckActivationRequest deviceUniqueId */
        deviceUniqueId?: (string|null);
    }

    /** Represents a CheckActivationRequest. */
    class CheckActivationRequest implements ICheckActivationRequest {

        /**
         * Constructs a new CheckActivationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: device.ICheckActivationRequest);

        /** CheckActivationRequest deviceUniqueId. */
        public deviceUniqueId: string;

        /**
         * Creates a new CheckActivationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckActivationRequest instance
         */
        public static create(properties?: device.ICheckActivationRequest): device.CheckActivationRequest;

        /**
         * Encodes the specified CheckActivationRequest message. Does not implicitly {@link device.CheckActivationRequest.verify|verify} messages.
         * @param message CheckActivationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device.ICheckActivationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckActivationRequest message, length delimited. Does not implicitly {@link device.CheckActivationRequest.verify|verify} messages.
         * @param message CheckActivationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device.ICheckActivationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckActivationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device.CheckActivationRequest;

        /**
         * Decodes a CheckActivationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device.CheckActivationRequest;

        /**
         * Verifies a CheckActivationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckActivationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckActivationRequest
         */
        public static fromObject(object: { [k: string]: any }): device.CheckActivationRequest;

        /**
         * Creates a plain object from a CheckActivationRequest message. Also converts values to other types if specified.
         * @param message CheckActivationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device.CheckActivationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckActivationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckActivationReply. */
    interface ICheckActivationReply {

        /** CheckActivationReply licenceId */
        licenceId?: (string|null);

        /** CheckActivationReply siteId */
        siteId?: (string|null);
    }

    /** Represents a CheckActivationReply. */
    class CheckActivationReply implements ICheckActivationReply {

        /**
         * Constructs a new CheckActivationReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: device.ICheckActivationReply);

        /** CheckActivationReply licenceId. */
        public licenceId: string;

        /** CheckActivationReply siteId. */
        public siteId: string;

        /**
         * Creates a new CheckActivationReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckActivationReply instance
         */
        public static create(properties?: device.ICheckActivationReply): device.CheckActivationReply;

        /**
         * Encodes the specified CheckActivationReply message. Does not implicitly {@link device.CheckActivationReply.verify|verify} messages.
         * @param message CheckActivationReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device.ICheckActivationReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckActivationReply message, length delimited. Does not implicitly {@link device.CheckActivationReply.verify|verify} messages.
         * @param message CheckActivationReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device.ICheckActivationReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckActivationReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device.CheckActivationReply;

        /**
         * Decodes a CheckActivationReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device.CheckActivationReply;

        /**
         * Verifies a CheckActivationReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckActivationReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckActivationReply
         */
        public static fromObject(object: { [k: string]: any }): device.CheckActivationReply;

        /**
         * Creates a plain object from a CheckActivationReply message. Also converts values to other types if specified.
         * @param message CheckActivationReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device.CheckActivationReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckActivationReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace shift. */
export namespace shift {

    /** Represents a Shifts */
    class Shifts extends $protobuf.rpc.Service {

        /**
         * Constructs a new Shifts service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Shifts service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Shifts;

        /**
         * Calls EndShift.
         * @param request EndShiftRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EndShiftReply
         */
        public endShift(request: shift.IEndShiftRequest, callback: shift.Shifts.EndShiftCallback): void;

        /**
         * Calls EndShift.
         * @param request EndShiftRequest message or plain object
         * @returns Promise
         */
        public endShift(request: shift.IEndShiftRequest): Promise<shift.EndShiftReply>;

        /**
         * Calls GetShifts.
         * @param request GetShiftsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetShiftsReply
         */
        public getShifts(request: shift.IGetShiftsRequest, callback: shift.Shifts.GetShiftsCallback): void;

        /**
         * Calls GetShifts.
         * @param request GetShiftsRequest message or plain object
         * @returns Promise
         */
        public getShifts(request: shift.IGetShiftsRequest): Promise<shift.GetShiftsReply>;

        /**
         * Calls GetGuardroomMaterials.
         * @param request GetGuardroomMaterialsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuardroomMaterialsReply
         */
        public getGuardroomMaterials(request: shift.IGetGuardroomMaterialsRequest, callback: shift.Shifts.GetGuardroomMaterialsCallback): void;

        /**
         * Calls GetGuardroomMaterials.
         * @param request GetGuardroomMaterialsRequest message or plain object
         * @returns Promise
         */
        public getGuardroomMaterials(request: shift.IGetGuardroomMaterialsRequest): Promise<shift.GetGuardroomMaterialsReply>;
    }

    namespace Shifts {

        /**
         * Callback as used by {@link shift.Shifts#endShift}.
         * @param error Error, if any
         * @param [response] EndShiftReply
         */
        type EndShiftCallback = (error: (Error|null), response?: shift.EndShiftReply) => void;

        /**
         * Callback as used by {@link shift.Shifts#getShifts}.
         * @param error Error, if any
         * @param [response] GetShiftsReply
         */
        type GetShiftsCallback = (error: (Error|null), response?: shift.GetShiftsReply) => void;

        /**
         * Callback as used by {@link shift.Shifts#getGuardroomMaterials}.
         * @param error Error, if any
         * @param [response] GetGuardroomMaterialsReply
         */
        type GetGuardroomMaterialsCallback = (error: (Error|null), response?: shift.GetGuardroomMaterialsReply) => void;
    }

    /** Properties of an EndShiftRequest. */
    interface IEndShiftRequest {

        /** EndShiftRequest userId */
        userId?: (string|null);

        /** EndShiftRequest shiftId */
        shiftId?: (string|null);

        /** EndShiftRequest endDate */
        endDate?: (number|Long|null);

        /** EndShiftRequest isLocallyCreated */
        isLocallyCreated?: (boolean|null);
    }

    /** Represents an EndShiftRequest. */
    class EndShiftRequest implements IEndShiftRequest {

        /**
         * Constructs a new EndShiftRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IEndShiftRequest);

        /** EndShiftRequest userId. */
        public userId: string;

        /** EndShiftRequest shiftId. */
        public shiftId: string;

        /** EndShiftRequest endDate. */
        public endDate: (number|Long);

        /** EndShiftRequest isLocallyCreated. */
        public isLocallyCreated: boolean;

        /**
         * Creates a new EndShiftRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndShiftRequest instance
         */
        public static create(properties?: shift.IEndShiftRequest): shift.EndShiftRequest;

        /**
         * Encodes the specified EndShiftRequest message. Does not implicitly {@link shift.EndShiftRequest.verify|verify} messages.
         * @param message EndShiftRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IEndShiftRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EndShiftRequest message, length delimited. Does not implicitly {@link shift.EndShiftRequest.verify|verify} messages.
         * @param message EndShiftRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IEndShiftRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EndShiftRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndShiftRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.EndShiftRequest;

        /**
         * Decodes an EndShiftRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndShiftRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.EndShiftRequest;

        /**
         * Verifies an EndShiftRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndShiftRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndShiftRequest
         */
        public static fromObject(object: { [k: string]: any }): shift.EndShiftRequest;

        /**
         * Creates a plain object from an EndShiftRequest message. Also converts values to other types if specified.
         * @param message EndShiftRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.EndShiftRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndShiftRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndShiftReply. */
    interface IEndShiftReply {
    }

    /** Represents an EndShiftReply. */
    class EndShiftReply implements IEndShiftReply {

        /**
         * Constructs a new EndShiftReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IEndShiftReply);

        /**
         * Creates a new EndShiftReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndShiftReply instance
         */
        public static create(properties?: shift.IEndShiftReply): shift.EndShiftReply;

        /**
         * Encodes the specified EndShiftReply message. Does not implicitly {@link shift.EndShiftReply.verify|verify} messages.
         * @param message EndShiftReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IEndShiftReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EndShiftReply message, length delimited. Does not implicitly {@link shift.EndShiftReply.verify|verify} messages.
         * @param message EndShiftReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IEndShiftReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EndShiftReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndShiftReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.EndShiftReply;

        /**
         * Decodes an EndShiftReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndShiftReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.EndShiftReply;

        /**
         * Verifies an EndShiftReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndShiftReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndShiftReply
         */
        public static fromObject(object: { [k: string]: any }): shift.EndShiftReply;

        /**
         * Creates a plain object from an EndShiftReply message. Also converts values to other types if specified.
         * @param message EndShiftReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.EndShiftReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndShiftReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetShiftsRequest. */
    interface IGetShiftsRequest {

        /** GetShiftsRequest guardroomId */
        guardroomId?: (string|null);
    }

    /** Represents a GetShiftsRequest. */
    class GetShiftsRequest implements IGetShiftsRequest {

        /**
         * Constructs a new GetShiftsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IGetShiftsRequest);

        /** GetShiftsRequest guardroomId. */
        public guardroomId: string;

        /**
         * Creates a new GetShiftsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetShiftsRequest instance
         */
        public static create(properties?: shift.IGetShiftsRequest): shift.GetShiftsRequest;

        /**
         * Encodes the specified GetShiftsRequest message. Does not implicitly {@link shift.GetShiftsRequest.verify|verify} messages.
         * @param message GetShiftsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IGetShiftsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetShiftsRequest message, length delimited. Does not implicitly {@link shift.GetShiftsRequest.verify|verify} messages.
         * @param message GetShiftsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IGetShiftsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetShiftsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetShiftsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.GetShiftsRequest;

        /**
         * Decodes a GetShiftsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetShiftsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.GetShiftsRequest;

        /**
         * Verifies a GetShiftsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetShiftsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetShiftsRequest
         */
        public static fromObject(object: { [k: string]: any }): shift.GetShiftsRequest;

        /**
         * Creates a plain object from a GetShiftsRequest message. Also converts values to other types if specified.
         * @param message GetShiftsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.GetShiftsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetShiftsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetShiftsReply. */
    interface IGetShiftsReply {

        /** GetShiftsReply items */
        items?: (shift.IShift[]|null);
    }

    /** Represents a GetShiftsReply. */
    class GetShiftsReply implements IGetShiftsReply {

        /**
         * Constructs a new GetShiftsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IGetShiftsReply);

        /** GetShiftsReply items. */
        public items: shift.IShift[];

        /**
         * Creates a new GetShiftsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetShiftsReply instance
         */
        public static create(properties?: shift.IGetShiftsReply): shift.GetShiftsReply;

        /**
         * Encodes the specified GetShiftsReply message. Does not implicitly {@link shift.GetShiftsReply.verify|verify} messages.
         * @param message GetShiftsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IGetShiftsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetShiftsReply message, length delimited. Does not implicitly {@link shift.GetShiftsReply.verify|verify} messages.
         * @param message GetShiftsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IGetShiftsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetShiftsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetShiftsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.GetShiftsReply;

        /**
         * Decodes a GetShiftsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetShiftsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.GetShiftsReply;

        /**
         * Verifies a GetShiftsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetShiftsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetShiftsReply
         */
        public static fromObject(object: { [k: string]: any }): shift.GetShiftsReply;

        /**
         * Creates a plain object from a GetShiftsReply message. Also converts values to other types if specified.
         * @param message GetShiftsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.GetShiftsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetShiftsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGuardroomMaterialsRequest. */
    interface IGetGuardroomMaterialsRequest {

        /** GetGuardroomMaterialsRequest guardroomId */
        guardroomId?: (string|null);
    }

    /** Represents a GetGuardroomMaterialsRequest. */
    class GetGuardroomMaterialsRequest implements IGetGuardroomMaterialsRequest {

        /**
         * Constructs a new GetGuardroomMaterialsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IGetGuardroomMaterialsRequest);

        /** GetGuardroomMaterialsRequest guardroomId. */
        public guardroomId: string;

        /**
         * Creates a new GetGuardroomMaterialsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuardroomMaterialsRequest instance
         */
        public static create(properties?: shift.IGetGuardroomMaterialsRequest): shift.GetGuardroomMaterialsRequest;

        /**
         * Encodes the specified GetGuardroomMaterialsRequest message. Does not implicitly {@link shift.GetGuardroomMaterialsRequest.verify|verify} messages.
         * @param message GetGuardroomMaterialsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IGetGuardroomMaterialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGuardroomMaterialsRequest message, length delimited. Does not implicitly {@link shift.GetGuardroomMaterialsRequest.verify|verify} messages.
         * @param message GetGuardroomMaterialsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IGetGuardroomMaterialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGuardroomMaterialsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuardroomMaterialsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.GetGuardroomMaterialsRequest;

        /**
         * Decodes a GetGuardroomMaterialsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuardroomMaterialsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.GetGuardroomMaterialsRequest;

        /**
         * Verifies a GetGuardroomMaterialsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGuardroomMaterialsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuardroomMaterialsRequest
         */
        public static fromObject(object: { [k: string]: any }): shift.GetGuardroomMaterialsRequest;

        /**
         * Creates a plain object from a GetGuardroomMaterialsRequest message. Also converts values to other types if specified.
         * @param message GetGuardroomMaterialsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.GetGuardroomMaterialsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGuardroomMaterialsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGuardroomMaterialsReply. */
    interface IGetGuardroomMaterialsReply {

        /** GetGuardroomMaterialsReply items */
        items?: (shift.IGuardroomMaterial[]|null);
    }

    /** Represents a GetGuardroomMaterialsReply. */
    class GetGuardroomMaterialsReply implements IGetGuardroomMaterialsReply {

        /**
         * Constructs a new GetGuardroomMaterialsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IGetGuardroomMaterialsReply);

        /** GetGuardroomMaterialsReply items. */
        public items: shift.IGuardroomMaterial[];

        /**
         * Creates a new GetGuardroomMaterialsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuardroomMaterialsReply instance
         */
        public static create(properties?: shift.IGetGuardroomMaterialsReply): shift.GetGuardroomMaterialsReply;

        /**
         * Encodes the specified GetGuardroomMaterialsReply message. Does not implicitly {@link shift.GetGuardroomMaterialsReply.verify|verify} messages.
         * @param message GetGuardroomMaterialsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IGetGuardroomMaterialsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGuardroomMaterialsReply message, length delimited. Does not implicitly {@link shift.GetGuardroomMaterialsReply.verify|verify} messages.
         * @param message GetGuardroomMaterialsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IGetGuardroomMaterialsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGuardroomMaterialsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuardroomMaterialsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.GetGuardroomMaterialsReply;

        /**
         * Decodes a GetGuardroomMaterialsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuardroomMaterialsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.GetGuardroomMaterialsReply;

        /**
         * Verifies a GetGuardroomMaterialsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGuardroomMaterialsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuardroomMaterialsReply
         */
        public static fromObject(object: { [k: string]: any }): shift.GetGuardroomMaterialsReply;

        /**
         * Creates a plain object from a GetGuardroomMaterialsReply message. Also converts values to other types if specified.
         * @param message GetGuardroomMaterialsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.GetGuardroomMaterialsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGuardroomMaterialsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuardroomMaterial. */
    interface IGuardroomMaterial {

        /** GuardroomMaterial id */
        id?: (string|null);

        /** GuardroomMaterial name */
        name?: (string|null);

        /** GuardroomMaterial reference */
        reference?: (string|null);

        /** GuardroomMaterial materialState */
        materialState?: (string|null);

        /** GuardroomMaterial comment */
        comment?: (string|null);

        /** GuardroomMaterial stateDate */
        stateDate?: (number|Long|null);
    }

    /** Represents a GuardroomMaterial. */
    class GuardroomMaterial implements IGuardroomMaterial {

        /**
         * Constructs a new GuardroomMaterial.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IGuardroomMaterial);

        /** GuardroomMaterial id. */
        public id: string;

        /** GuardroomMaterial name. */
        public name: string;

        /** GuardroomMaterial reference. */
        public reference: string;

        /** GuardroomMaterial materialState. */
        public materialState: string;

        /** GuardroomMaterial comment. */
        public comment: string;

        /** GuardroomMaterial stateDate. */
        public stateDate: (number|Long);

        /**
         * Creates a new GuardroomMaterial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuardroomMaterial instance
         */
        public static create(properties?: shift.IGuardroomMaterial): shift.GuardroomMaterial;

        /**
         * Encodes the specified GuardroomMaterial message. Does not implicitly {@link shift.GuardroomMaterial.verify|verify} messages.
         * @param message GuardroomMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IGuardroomMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuardroomMaterial message, length delimited. Does not implicitly {@link shift.GuardroomMaterial.verify|verify} messages.
         * @param message GuardroomMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IGuardroomMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuardroomMaterial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuardroomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.GuardroomMaterial;

        /**
         * Decodes a GuardroomMaterial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuardroomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.GuardroomMaterial;

        /**
         * Verifies a GuardroomMaterial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuardroomMaterial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuardroomMaterial
         */
        public static fromObject(object: { [k: string]: any }): shift.GuardroomMaterial;

        /**
         * Creates a plain object from a GuardroomMaterial message. Also converts values to other types if specified.
         * @param message GuardroomMaterial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.GuardroomMaterial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuardroomMaterial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Shift. */
    interface IShift {

        /** Shift shiftId */
        shiftId?: (string|null);

        /** Shift userId */
        userId?: (string|null);

        /** Shift startDate */
        startDate?: (number|Long|null);

        /** Shift endDate */
        endDate?: (number|Long|null);

        /** Shift isStarted */
        isStarted?: (boolean|null);

        /** Shift isEnded */
        isEnded?: (boolean|null);

        /** Shift actualStartDate */
        actualStartDate?: (number|Long|null);

        /** Shift actualEndDate */
        actualEndDate?: (number|Long|null);

        /** Shift isLocallyCreated */
        isLocallyCreated?: (boolean|null);
    }

    /** Represents a Shift. */
    class Shift implements IShift {

        /**
         * Constructs a new Shift.
         * @param [properties] Properties to set
         */
        constructor(properties?: shift.IShift);

        /** Shift shiftId. */
        public shiftId: string;

        /** Shift userId. */
        public userId: string;

        /** Shift startDate. */
        public startDate: (number|Long);

        /** Shift endDate. */
        public endDate: (number|Long);

        /** Shift isStarted. */
        public isStarted: boolean;

        /** Shift isEnded. */
        public isEnded: boolean;

        /** Shift actualStartDate. */
        public actualStartDate: (number|Long);

        /** Shift actualEndDate. */
        public actualEndDate: (number|Long);

        /** Shift isLocallyCreated. */
        public isLocallyCreated: boolean;

        /**
         * Creates a new Shift instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Shift instance
         */
        public static create(properties?: shift.IShift): shift.Shift;

        /**
         * Encodes the specified Shift message. Does not implicitly {@link shift.Shift.verify|verify} messages.
         * @param message Shift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shift.IShift, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Shift message, length delimited. Does not implicitly {@link shift.Shift.verify|verify} messages.
         * @param message Shift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shift.IShift, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Shift message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Shift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shift.Shift;

        /**
         * Decodes a Shift message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Shift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shift.Shift;

        /**
         * Verifies a Shift message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Shift message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Shift
         */
        public static fromObject(object: { [k: string]: any }): shift.Shift;

        /**
         * Creates a plain object from a Shift message. Also converts values to other types if specified.
         * @param message Shift
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shift.Shift, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Shift to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace site. */
export namespace site {

    /** Represents a Sites */
    class Sites extends $protobuf.rpc.Service {

        /**
         * Constructs a new Sites service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Sites service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Sites;

        /**
         * Calls GetGuardrooms.
         * @param request GetGuardroomsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuardroomsReply
         */
        public getGuardrooms(request: site.IGetGuardroomsRequest, callback: site.Sites.GetGuardroomsCallback): void;

        /**
         * Calls GetGuardrooms.
         * @param request GetGuardroomsRequest message or plain object
         * @returns Promise
         */
        public getGuardrooms(request: site.IGetGuardroomsRequest): Promise<site.GetGuardroomsReply>;
    }

    namespace Sites {

        /**
         * Callback as used by {@link site.Sites#getGuardrooms}.
         * @param error Error, if any
         * @param [response] GetGuardroomsReply
         */
        type GetGuardroomsCallback = (error: (Error|null), response?: site.GetGuardroomsReply) => void;
    }

    /** Properties of a GetGuardroomsRequest. */
    interface IGetGuardroomsRequest {

        /** GetGuardroomsRequest userId */
        userId?: (string|null);
    }

    /** Represents a GetGuardroomsRequest. */
    class GetGuardroomsRequest implements IGetGuardroomsRequest {

        /**
         * Constructs a new GetGuardroomsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: site.IGetGuardroomsRequest);

        /** GetGuardroomsRequest userId. */
        public userId: string;

        /**
         * Creates a new GetGuardroomsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuardroomsRequest instance
         */
        public static create(properties?: site.IGetGuardroomsRequest): site.GetGuardroomsRequest;

        /**
         * Encodes the specified GetGuardroomsRequest message. Does not implicitly {@link site.GetGuardroomsRequest.verify|verify} messages.
         * @param message GetGuardroomsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: site.IGetGuardroomsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGuardroomsRequest message, length delimited. Does not implicitly {@link site.GetGuardroomsRequest.verify|verify} messages.
         * @param message GetGuardroomsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: site.IGetGuardroomsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGuardroomsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuardroomsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): site.GetGuardroomsRequest;

        /**
         * Decodes a GetGuardroomsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuardroomsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): site.GetGuardroomsRequest;

        /**
         * Verifies a GetGuardroomsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGuardroomsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuardroomsRequest
         */
        public static fromObject(object: { [k: string]: any }): site.GetGuardroomsRequest;

        /**
         * Creates a plain object from a GetGuardroomsRequest message. Also converts values to other types if specified.
         * @param message GetGuardroomsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: site.GetGuardroomsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGuardroomsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGuardroomsReply. */
    interface IGetGuardroomsReply {

        /** GetGuardroomsReply items */
        items?: (site.IGuardroom[]|null);
    }

    /** Represents a GetGuardroomsReply. */
    class GetGuardroomsReply implements IGetGuardroomsReply {

        /**
         * Constructs a new GetGuardroomsReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: site.IGetGuardroomsReply);

        /** GetGuardroomsReply items. */
        public items: site.IGuardroom[];

        /**
         * Creates a new GetGuardroomsReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuardroomsReply instance
         */
        public static create(properties?: site.IGetGuardroomsReply): site.GetGuardroomsReply;

        /**
         * Encodes the specified GetGuardroomsReply message. Does not implicitly {@link site.GetGuardroomsReply.verify|verify} messages.
         * @param message GetGuardroomsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: site.IGetGuardroomsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGuardroomsReply message, length delimited. Does not implicitly {@link site.GetGuardroomsReply.verify|verify} messages.
         * @param message GetGuardroomsReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: site.IGetGuardroomsReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGuardroomsReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuardroomsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): site.GetGuardroomsReply;

        /**
         * Decodes a GetGuardroomsReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuardroomsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): site.GetGuardroomsReply;

        /**
         * Verifies a GetGuardroomsReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGuardroomsReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuardroomsReply
         */
        public static fromObject(object: { [k: string]: any }): site.GetGuardroomsReply;

        /**
         * Creates a plain object from a GetGuardroomsReply message. Also converts values to other types if specified.
         * @param message GetGuardroomsReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: site.GetGuardroomsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGuardroomsReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Guardroom. */
    interface IGuardroom {

        /** Guardroom id */
        id?: (string|null);

        /** Guardroom name */
        name?: (string|null);
    }

    /** Represents a Guardroom. */
    class Guardroom implements IGuardroom {

        /**
         * Constructs a new Guardroom.
         * @param [properties] Properties to set
         */
        constructor(properties?: site.IGuardroom);

        /** Guardroom id. */
        public id: string;

        /** Guardroom name. */
        public name: string;

        /**
         * Creates a new Guardroom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Guardroom instance
         */
        public static create(properties?: site.IGuardroom): site.Guardroom;

        /**
         * Encodes the specified Guardroom message. Does not implicitly {@link site.Guardroom.verify|verify} messages.
         * @param message Guardroom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: site.IGuardroom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Guardroom message, length delimited. Does not implicitly {@link site.Guardroom.verify|verify} messages.
         * @param message Guardroom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: site.IGuardroom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Guardroom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Guardroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): site.Guardroom;

        /**
         * Decodes a Guardroom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Guardroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): site.Guardroom;

        /**
         * Verifies a Guardroom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Guardroom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Guardroom
         */
        public static fromObject(object: { [k: string]: any }): site.Guardroom;

        /**
         * Creates a plain object from a Guardroom message. Also converts values to other types if specified.
         * @param message Guardroom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: site.Guardroom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Guardroom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace tour. */
export namespace tour {

    /** Represents a Tours */
    class Tours extends $protobuf.rpc.Service {

        /**
         * Constructs a new Tours service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Tours service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tours;

        /**
         * Calls GetTours.
         * @param request GetToursRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetToursReply
         */
        public getTours(request: tour.IGetToursRequest, callback: tour.Tours.GetToursCallback): void;

        /**
         * Calls GetTours.
         * @param request GetToursRequest message or plain object
         * @returns Promise
         */
        public getTours(request: tour.IGetToursRequest): Promise<tour.GetToursReply>;

        /**
         * Calls EndTour.
         * @param request EndTourRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EndTourReply
         */
        public endTour(request: tour.IEndTourRequest, callback: tour.Tours.EndTourCallback): void;

        /**
         * Calls EndTour.
         * @param request EndTourRequest message or plain object
         * @returns Promise
         */
        public endTour(request: tour.IEndTourRequest): Promise<tour.EndTourReply>;
    }

    namespace Tours {

        /**
         * Callback as used by {@link tour.Tours#getTours}.
         * @param error Error, if any
         * @param [response] GetToursReply
         */
        type GetToursCallback = (error: (Error|null), response?: tour.GetToursReply) => void;

        /**
         * Callback as used by {@link tour.Tours#endTour}.
         * @param error Error, if any
         * @param [response] EndTourReply
         */
        type EndTourCallback = (error: (Error|null), response?: tour.EndTourReply) => void;
    }

    /** Properties of a GetToursRequest. */
    interface IGetToursRequest {

        /** GetToursRequest guardroomId */
        guardroomId?: (string|null);
    }

    /** Represents a GetToursRequest. */
    class GetToursRequest implements IGetToursRequest {

        /**
         * Constructs a new GetToursRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.IGetToursRequest);

        /** GetToursRequest guardroomId. */
        public guardroomId: string;

        /**
         * Creates a new GetToursRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetToursRequest instance
         */
        public static create(properties?: tour.IGetToursRequest): tour.GetToursRequest;

        /**
         * Encodes the specified GetToursRequest message. Does not implicitly {@link tour.GetToursRequest.verify|verify} messages.
         * @param message GetToursRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.IGetToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetToursRequest message, length delimited. Does not implicitly {@link tour.GetToursRequest.verify|verify} messages.
         * @param message GetToursRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.IGetToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetToursRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetToursRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.GetToursRequest;

        /**
         * Decodes a GetToursRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetToursRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.GetToursRequest;

        /**
         * Verifies a GetToursRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetToursRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetToursRequest
         */
        public static fromObject(object: { [k: string]: any }): tour.GetToursRequest;

        /**
         * Creates a plain object from a GetToursRequest message. Also converts values to other types if specified.
         * @param message GetToursRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.GetToursRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetToursRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetToursReply. */
    interface IGetToursReply {

        /** GetToursReply items */
        items?: (tour.ITour[]|null);
    }

    /** Represents a GetToursReply. */
    class GetToursReply implements IGetToursReply {

        /**
         * Constructs a new GetToursReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.IGetToursReply);

        /** GetToursReply items. */
        public items: tour.ITour[];

        /**
         * Creates a new GetToursReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetToursReply instance
         */
        public static create(properties?: tour.IGetToursReply): tour.GetToursReply;

        /**
         * Encodes the specified GetToursReply message. Does not implicitly {@link tour.GetToursReply.verify|verify} messages.
         * @param message GetToursReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.IGetToursReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetToursReply message, length delimited. Does not implicitly {@link tour.GetToursReply.verify|verify} messages.
         * @param message GetToursReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.IGetToursReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetToursReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetToursReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.GetToursReply;

        /**
         * Decodes a GetToursReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetToursReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.GetToursReply;

        /**
         * Verifies a GetToursReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetToursReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetToursReply
         */
        public static fromObject(object: { [k: string]: any }): tour.GetToursReply;

        /**
         * Creates a plain object from a GetToursReply message. Also converts values to other types if specified.
         * @param message GetToursReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.GetToursReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetToursReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndTourRequest. */
    interface IEndTourRequest {

        /** EndTourRequest userId */
        userId?: (string|null);

        /** EndTourRequest tourId */
        tourId?: (string|null);

        /** EndTourRequest checkpoints */
        checkpoints?: (tour.ITourCheckpoint[]|null);

        /** EndTourRequest endDate */
        endDate?: (number|Long|null);
    }

    /** Represents an EndTourRequest. */
    class EndTourRequest implements IEndTourRequest {

        /**
         * Constructs a new EndTourRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.IEndTourRequest);

        /** EndTourRequest userId. */
        public userId: string;

        /** EndTourRequest tourId. */
        public tourId: string;

        /** EndTourRequest checkpoints. */
        public checkpoints: tour.ITourCheckpoint[];

        /** EndTourRequest endDate. */
        public endDate: (number|Long);

        /**
         * Creates a new EndTourRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndTourRequest instance
         */
        public static create(properties?: tour.IEndTourRequest): tour.EndTourRequest;

        /**
         * Encodes the specified EndTourRequest message. Does not implicitly {@link tour.EndTourRequest.verify|verify} messages.
         * @param message EndTourRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.IEndTourRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EndTourRequest message, length delimited. Does not implicitly {@link tour.EndTourRequest.verify|verify} messages.
         * @param message EndTourRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.IEndTourRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EndTourRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndTourRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.EndTourRequest;

        /**
         * Decodes an EndTourRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndTourRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.EndTourRequest;

        /**
         * Verifies an EndTourRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndTourRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndTourRequest
         */
        public static fromObject(object: { [k: string]: any }): tour.EndTourRequest;

        /**
         * Creates a plain object from an EndTourRequest message. Also converts values to other types if specified.
         * @param message EndTourRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.EndTourRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndTourRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndTourReply. */
    interface IEndTourReply {
    }

    /** Represents an EndTourReply. */
    class EndTourReply implements IEndTourReply {

        /**
         * Constructs a new EndTourReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.IEndTourReply);

        /**
         * Creates a new EndTourReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndTourReply instance
         */
        public static create(properties?: tour.IEndTourReply): tour.EndTourReply;

        /**
         * Encodes the specified EndTourReply message. Does not implicitly {@link tour.EndTourReply.verify|verify} messages.
         * @param message EndTourReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.IEndTourReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EndTourReply message, length delimited. Does not implicitly {@link tour.EndTourReply.verify|verify} messages.
         * @param message EndTourReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.IEndTourReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EndTourReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndTourReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.EndTourReply;

        /**
         * Decodes an EndTourReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndTourReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.EndTourReply;

        /**
         * Verifies an EndTourReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndTourReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndTourReply
         */
        public static fromObject(object: { [k: string]: any }): tour.EndTourReply;

        /**
         * Creates a plain object from an EndTourReply message. Also converts values to other types if specified.
         * @param message EndTourReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.EndTourReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndTourReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Tour. */
    interface ITour {

        /** Tour id */
        id?: (string|null);

        /** Tour name */
        name?: (string|null);

        /** Tour type */
        type?: (string|null);

        /** Tour duration */
        duration?: (string|null);

        /** Tour description */
        description?: (string|null);

        /** Tour checkpoints */
        checkpoints?: (tour.ITourCheckpoint[]|null);

        /** Tour requiredCheckpointsCount */
        requiredCheckpointsCount?: (number|null);

        /** Tour missingTagsExplanation */
        missingTagsExplanation?: (string|null);
    }

    /** Represents a Tour. */
    class Tour implements ITour {

        /**
         * Constructs a new Tour.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.ITour);

        /** Tour id. */
        public id: string;

        /** Tour name. */
        public name: string;

        /** Tour type. */
        public type: string;

        /** Tour duration. */
        public duration: string;

        /** Tour description. */
        public description: string;

        /** Tour checkpoints. */
        public checkpoints: tour.ITourCheckpoint[];

        /** Tour requiredCheckpointsCount. */
        public requiredCheckpointsCount: number;

        /** Tour missingTagsExplanation. */
        public missingTagsExplanation: string;

        /**
         * Creates a new Tour instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tour instance
         */
        public static create(properties?: tour.ITour): tour.Tour;

        /**
         * Encodes the specified Tour message. Does not implicitly {@link tour.Tour.verify|verify} messages.
         * @param message Tour message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.ITour, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tour message, length delimited. Does not implicitly {@link tour.Tour.verify|verify} messages.
         * @param message Tour message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.ITour, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tour message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.Tour;

        /**
         * Decodes a Tour message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.Tour;

        /**
         * Verifies a Tour message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tour message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tour
         */
        public static fromObject(object: { [k: string]: any }): tour.Tour;

        /**
         * Creates a plain object from a Tour message. Also converts values to other types if specified.
         * @param message Tour
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.Tour, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tour to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TourCheckpoint. */
    interface ITourCheckpoint {

        /** TourCheckpoint id */
        id?: (string|null);

        /** TourCheckpoint name */
        name?: (string|null);

        /** TourCheckpoint description */
        description?: (string|null);

        /** TourCheckpoint technology */
        technology?: (string|null);

        /** TourCheckpoint tagValue */
        tagValue?: (string|null);

        /** TourCheckpoint pictureUri */
        pictureUri?: (string|null);

        /** TourCheckpoint videoUrl */
        videoUrl?: (string|null);

        /** TourCheckpoint comments */
        comments?: (string|null);

        /** TourCheckpoint isMarked */
        isMarked?: (boolean|null);

        /** TourCheckpoint markedDate */
        markedDate?: (number|Long|null);
    }

    /** Represents a TourCheckpoint. */
    class TourCheckpoint implements ITourCheckpoint {

        /**
         * Constructs a new TourCheckpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: tour.ITourCheckpoint);

        /** TourCheckpoint id. */
        public id: string;

        /** TourCheckpoint name. */
        public name: string;

        /** TourCheckpoint description. */
        public description: string;

        /** TourCheckpoint technology. */
        public technology: string;

        /** TourCheckpoint tagValue. */
        public tagValue: string;

        /** TourCheckpoint pictureUri. */
        public pictureUri: string;

        /** TourCheckpoint videoUrl. */
        public videoUrl: string;

        /** TourCheckpoint comments. */
        public comments: string;

        /** TourCheckpoint isMarked. */
        public isMarked: boolean;

        /** TourCheckpoint markedDate. */
        public markedDate: (number|Long);

        /**
         * Creates a new TourCheckpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TourCheckpoint instance
         */
        public static create(properties?: tour.ITourCheckpoint): tour.TourCheckpoint;

        /**
         * Encodes the specified TourCheckpoint message. Does not implicitly {@link tour.TourCheckpoint.verify|verify} messages.
         * @param message TourCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tour.ITourCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TourCheckpoint message, length delimited. Does not implicitly {@link tour.TourCheckpoint.verify|verify} messages.
         * @param message TourCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tour.ITourCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TourCheckpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TourCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tour.TourCheckpoint;

        /**
         * Decodes a TourCheckpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TourCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tour.TourCheckpoint;

        /**
         * Verifies a TourCheckpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TourCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TourCheckpoint
         */
        public static fromObject(object: { [k: string]: any }): tour.TourCheckpoint;

        /**
         * Creates a plain object from a TourCheckpoint message. Also converts values to other types if specified.
         * @param message TourCheckpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tour.TourCheckpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TourCheckpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
