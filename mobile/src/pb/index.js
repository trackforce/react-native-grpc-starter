/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.Auth = (function() {

        /**
         * Constructs a new Auth service.
         * @memberof auth
         * @classdesc Represents an Auth
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Auth(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Auth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Auth;

        /**
         * Creates new Auth service using the specified rpc implementation.
         * @function create
         * @memberof auth.Auth
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Auth} RPC service. Useful where requests and/or responses are streamed.
         */
        Auth.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link auth.Auth#signIn}.
         * @memberof auth.Auth
         * @typedef SignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.SignInReply} [response] SignInReply
         */

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof auth.Auth
         * @instance
         * @param {auth.ISignInRequest} request SignInRequest message or plain object
         * @param {auth.Auth.SignInCallback} callback Node-style callback called with the error, if any, and SignInReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.signIn = function signIn(request, callback) {
            return this.rpcCall(signIn, $root.auth.SignInRequest, $root.auth.SignInReply, request, callback);
        }, "name", { value: "SignIn" });

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof auth.Auth
         * @instance
         * @param {auth.ISignInRequest} request SignInRequest message or plain object
         * @returns {Promise<auth.SignInReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link auth.Auth#getUsers}.
         * @memberof auth.Auth
         * @typedef GetUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.GetUsersReply} [response] GetUsersReply
         */

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof auth.Auth
         * @instance
         * @param {auth.IGetUsersRequest} request GetUsersRequest message or plain object
         * @param {auth.Auth.GetUsersCallback} callback Node-style callback called with the error, if any, and GetUsersReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.getUsers = function getUsers(request, callback) {
            return this.rpcCall(getUsers, $root.auth.GetUsersRequest, $root.auth.GetUsersReply, request, callback);
        }, "name", { value: "GetUsers" });

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof auth.Auth
         * @instance
         * @param {auth.IGetUsersRequest} request GetUsersRequest message or plain object
         * @returns {Promise<auth.GetUsersReply>} Promise
         * @variation 2
         */

        return Auth;
    })();

    auth.SignInRequest = (function() {

        /**
         * Properties of a SignInRequest.
         * @memberof auth
         * @interface ISignInRequest
         * @property {string|null} [username] SignInRequest username
         * @property {string|null} [password] SignInRequest password
         */

        /**
         * Constructs a new SignInRequest.
         * @memberof auth
         * @classdesc Represents a SignInRequest.
         * @implements ISignInRequest
         * @constructor
         * @param {auth.ISignInRequest=} [properties] Properties to set
         */
        function SignInRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInRequest username.
         * @member {string} username
         * @memberof auth.SignInRequest
         * @instance
         */
        SignInRequest.prototype.username = "";

        /**
         * SignInRequest password.
         * @member {string} password
         * @memberof auth.SignInRequest
         * @instance
         */
        SignInRequest.prototype.password = "";

        /**
         * Creates a new SignInRequest instance using the specified properties.
         * @function create
         * @memberof auth.SignInRequest
         * @static
         * @param {auth.ISignInRequest=} [properties] Properties to set
         * @returns {auth.SignInRequest} SignInRequest instance
         */
        SignInRequest.create = function create(properties) {
            return new SignInRequest(properties);
        };

        /**
         * Encodes the specified SignInRequest message. Does not implicitly {@link auth.SignInRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.SignInRequest
         * @static
         * @param {auth.ISignInRequest} message SignInRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link auth.SignInRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.SignInRequest
         * @static
         * @param {auth.ISignInRequest} message SignInRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.SignInRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.SignInRequest} SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.SignInRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.SignInRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.SignInRequest} SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInRequest message.
         * @function verify
         * @memberof auth.SignInRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.SignInRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.SignInRequest} SignInRequest
         */
        SignInRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.SignInRequest)
                return object;
            let message = new $root.auth.SignInRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.SignInRequest
         * @static
         * @param {auth.SignInRequest} message SignInRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this SignInRequest to JSON.
         * @function toJSON
         * @memberof auth.SignInRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInRequest;
    })();

    auth.SignInReply = (function() {

        /**
         * Properties of a SignInReply.
         * @memberof auth
         * @interface ISignInReply
         * @property {string|null} [token] SignInReply token
         */

        /**
         * Constructs a new SignInReply.
         * @memberof auth
         * @classdesc Represents a SignInReply.
         * @implements ISignInReply
         * @constructor
         * @param {auth.ISignInReply=} [properties] Properties to set
         */
        function SignInReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInReply token.
         * @member {string} token
         * @memberof auth.SignInReply
         * @instance
         */
        SignInReply.prototype.token = "";

        /**
         * Creates a new SignInReply instance using the specified properties.
         * @function create
         * @memberof auth.SignInReply
         * @static
         * @param {auth.ISignInReply=} [properties] Properties to set
         * @returns {auth.SignInReply} SignInReply instance
         */
        SignInReply.create = function create(properties) {
            return new SignInReply(properties);
        };

        /**
         * Encodes the specified SignInReply message. Does not implicitly {@link auth.SignInReply.verify|verify} messages.
         * @function encode
         * @memberof auth.SignInReply
         * @static
         * @param {auth.ISignInReply} message SignInReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified SignInReply message, length delimited. Does not implicitly {@link auth.SignInReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.SignInReply
         * @static
         * @param {auth.ISignInReply} message SignInReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInReply message from the specified reader or buffer.
         * @function decode
         * @memberof auth.SignInReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.SignInReply} SignInReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.SignInReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.SignInReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.SignInReply} SignInReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInReply message.
         * @function verify
         * @memberof auth.SignInReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a SignInReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.SignInReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.SignInReply} SignInReply
         */
        SignInReply.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.SignInReply)
                return object;
            let message = new $root.auth.SignInReply();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a SignInReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.SignInReply
         * @static
         * @param {auth.SignInReply} message SignInReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this SignInReply to JSON.
         * @function toJSON
         * @memberof auth.SignInReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInReply;
    })();

    auth.GetUsersRequest = (function() {

        /**
         * Properties of a GetUsersRequest.
         * @memberof auth
         * @interface IGetUsersRequest
         * @property {string|null} [guardroomId] GetUsersRequest guardroomId
         */

        /**
         * Constructs a new GetUsersRequest.
         * @memberof auth
         * @classdesc Represents a GetUsersRequest.
         * @implements IGetUsersRequest
         * @constructor
         * @param {auth.IGetUsersRequest=} [properties] Properties to set
         */
        function GetUsersRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersRequest guardroomId.
         * @member {string} guardroomId
         * @memberof auth.GetUsersRequest
         * @instance
         */
        GetUsersRequest.prototype.guardroomId = "";

        /**
         * Creates a new GetUsersRequest instance using the specified properties.
         * @function create
         * @memberof auth.GetUsersRequest
         * @static
         * @param {auth.IGetUsersRequest=} [properties] Properties to set
         * @returns {auth.GetUsersRequest} GetUsersRequest instance
         */
        GetUsersRequest.create = function create(properties) {
            return new GetUsersRequest(properties);
        };

        /**
         * Encodes the specified GetUsersRequest message. Does not implicitly {@link auth.GetUsersRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.GetUsersRequest
         * @static
         * @param {auth.IGetUsersRequest} message GetUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guardroomId);
            return writer;
        };

        /**
         * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link auth.GetUsersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.GetUsersRequest
         * @static
         * @param {auth.IGetUsersRequest} message GetUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.GetUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.GetUsersRequest} GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.GetUsersRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guardroomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.GetUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.GetUsersRequest} GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersRequest message.
         * @function verify
         * @memberof auth.GetUsersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                if (!$util.isString(message.guardroomId))
                    return "guardroomId: string expected";
            return null;
        };

        /**
         * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.GetUsersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.GetUsersRequest} GetUsersRequest
         */
        GetUsersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.GetUsersRequest)
                return object;
            let message = new $root.auth.GetUsersRequest();
            if (object.guardroomId != null)
                message.guardroomId = String(object.guardroomId);
            return message;
        };

        /**
         * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.GetUsersRequest
         * @static
         * @param {auth.GetUsersRequest} message GetUsersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.guardroomId = "";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                object.guardroomId = message.guardroomId;
            return object;
        };

        /**
         * Converts this GetUsersRequest to JSON.
         * @function toJSON
         * @memberof auth.GetUsersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersRequest;
    })();

    auth.GetUsersReply = (function() {

        /**
         * Properties of a GetUsersReply.
         * @memberof auth
         * @interface IGetUsersReply
         * @property {Array.<auth.IUser>|null} [items] GetUsersReply items
         */

        /**
         * Constructs a new GetUsersReply.
         * @memberof auth
         * @classdesc Represents a GetUsersReply.
         * @implements IGetUsersReply
         * @constructor
         * @param {auth.IGetUsersReply=} [properties] Properties to set
         */
        function GetUsersReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersReply items.
         * @member {Array.<auth.IUser>} items
         * @memberof auth.GetUsersReply
         * @instance
         */
        GetUsersReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new GetUsersReply instance using the specified properties.
         * @function create
         * @memberof auth.GetUsersReply
         * @static
         * @param {auth.IGetUsersReply=} [properties] Properties to set
         * @returns {auth.GetUsersReply} GetUsersReply instance
         */
        GetUsersReply.create = function create(properties) {
            return new GetUsersReply(properties);
        };

        /**
         * Encodes the specified GetUsersReply message. Does not implicitly {@link auth.GetUsersReply.verify|verify} messages.
         * @function encode
         * @memberof auth.GetUsersReply
         * @static
         * @param {auth.IGetUsersReply} message GetUsersReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.auth.User.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersReply message, length delimited. Does not implicitly {@link auth.GetUsersReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.GetUsersReply
         * @static
         * @param {auth.IGetUsersReply} message GetUsersReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersReply message from the specified reader or buffer.
         * @function decode
         * @memberof auth.GetUsersReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.GetUsersReply} GetUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.GetUsersReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.auth.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.GetUsersReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.GetUsersReply} GetUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersReply message.
         * @function verify
         * @memberof auth.GetUsersReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.auth.User.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetUsersReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.GetUsersReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.GetUsersReply} GetUsersReply
         */
        GetUsersReply.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.GetUsersReply)
                return object;
            let message = new $root.auth.GetUsersReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".auth.GetUsersReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".auth.GetUsersReply.items: object expected");
                    message.items[i] = $root.auth.User.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.GetUsersReply
         * @static
         * @param {auth.GetUsersReply} message GetUsersReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.auth.User.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GetUsersReply to JSON.
         * @function toJSON
         * @memberof auth.GetUsersReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersReply;
    })();

    auth.User = (function() {

        /**
         * Properties of a User.
         * @memberof auth
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [roleId] User roleId
         * @property {string|null} [username] User username
         * @property {string|null} [firstname] User firstname
         * @property {string|null} [lastname] User lastname
         * @property {string|null} [languageId] User languageId
         * @property {auth.IUserPasswordBag|null} [passwordBag] User passwordBag
         */

        /**
         * Constructs a new User.
         * @memberof auth
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {auth.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof auth.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User roleId.
         * @member {string} roleId
         * @memberof auth.User
         * @instance
         */
        User.prototype.roleId = "";

        /**
         * User username.
         * @member {string} username
         * @memberof auth.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User firstname.
         * @member {string} firstname
         * @memberof auth.User
         * @instance
         */
        User.prototype.firstname = "";

        /**
         * User lastname.
         * @member {string} lastname
         * @memberof auth.User
         * @instance
         */
        User.prototype.lastname = "";

        /**
         * User languageId.
         * @member {string} languageId
         * @memberof auth.User
         * @instance
         */
        User.prototype.languageId = "";

        /**
         * User passwordBag.
         * @member {auth.IUserPasswordBag|null|undefined} passwordBag
         * @memberof auth.User
         * @instance
         */
        User.prototype.passwordBag = null;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof auth.User
         * @static
         * @param {auth.IUser=} [properties] Properties to set
         * @returns {auth.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encode
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleId);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.firstname != null && message.hasOwnProperty("firstname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.firstname);
            if (message.lastname != null && message.hasOwnProperty("lastname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lastname);
            if (message.languageId != null && message.hasOwnProperty("languageId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.languageId);
            if (message.passwordBag != null && message.hasOwnProperty("passwordBag"))
                $root.auth.UserPasswordBag.encode(message.passwordBag, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.roleId = reader.string();
                    break;
                case 3:
                    message.username = reader.string();
                    break;
                case 4:
                    message.firstname = reader.string();
                    break;
                case 5:
                    message.lastname = reader.string();
                    break;
                case 6:
                    message.languageId = reader.string();
                    break;
                case 7:
                    message.passwordBag = $root.auth.UserPasswordBag.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isString(message.roleId))
                    return "roleId: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.firstname != null && message.hasOwnProperty("firstname"))
                if (!$util.isString(message.firstname))
                    return "firstname: string expected";
            if (message.lastname != null && message.hasOwnProperty("lastname"))
                if (!$util.isString(message.lastname))
                    return "lastname: string expected";
            if (message.languageId != null && message.hasOwnProperty("languageId"))
                if (!$util.isString(message.languageId))
                    return "languageId: string expected";
            if (message.passwordBag != null && message.hasOwnProperty("passwordBag")) {
                let error = $root.auth.UserPasswordBag.verify(message.passwordBag);
                if (error)
                    return "passwordBag." + error;
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.User)
                return object;
            let message = new $root.auth.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.roleId != null)
                message.roleId = String(object.roleId);
            if (object.username != null)
                message.username = String(object.username);
            if (object.firstname != null)
                message.firstname = String(object.firstname);
            if (object.lastname != null)
                message.lastname = String(object.lastname);
            if (object.languageId != null)
                message.languageId = String(object.languageId);
            if (object.passwordBag != null) {
                if (typeof object.passwordBag !== "object")
                    throw TypeError(".auth.User.passwordBag: object expected");
                message.passwordBag = $root.auth.UserPasswordBag.fromObject(object.passwordBag);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.User
         * @static
         * @param {auth.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.roleId = "";
                object.username = "";
                object.firstname = "";
                object.lastname = "";
                object.languageId = "";
                object.passwordBag = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                object.roleId = message.roleId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.firstname != null && message.hasOwnProperty("firstname"))
                object.firstname = message.firstname;
            if (message.lastname != null && message.hasOwnProperty("lastname"))
                object.lastname = message.lastname;
            if (message.languageId != null && message.hasOwnProperty("languageId"))
                object.languageId = message.languageId;
            if (message.passwordBag != null && message.hasOwnProperty("passwordBag"))
                object.passwordBag = $root.auth.UserPasswordBag.toObject(message.passwordBag, options);
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof auth.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    auth.UserPasswordBag = (function() {

        /**
         * Properties of a UserPasswordBag.
         * @memberof auth
         * @interface IUserPasswordBag
         * @property {string|null} [hash] UserPasswordBag hash
         * @property {string|null} [salt] UserPasswordBag salt
         * @property {boolean|null} [mustBeChanged] UserPasswordBag mustBeChanged
         */

        /**
         * Constructs a new UserPasswordBag.
         * @memberof auth
         * @classdesc Represents a UserPasswordBag.
         * @implements IUserPasswordBag
         * @constructor
         * @param {auth.IUserPasswordBag=} [properties] Properties to set
         */
        function UserPasswordBag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPasswordBag hash.
         * @member {string} hash
         * @memberof auth.UserPasswordBag
         * @instance
         */
        UserPasswordBag.prototype.hash = "";

        /**
         * UserPasswordBag salt.
         * @member {string} salt
         * @memberof auth.UserPasswordBag
         * @instance
         */
        UserPasswordBag.prototype.salt = "";

        /**
         * UserPasswordBag mustBeChanged.
         * @member {boolean} mustBeChanged
         * @memberof auth.UserPasswordBag
         * @instance
         */
        UserPasswordBag.prototype.mustBeChanged = false;

        /**
         * Creates a new UserPasswordBag instance using the specified properties.
         * @function create
         * @memberof auth.UserPasswordBag
         * @static
         * @param {auth.IUserPasswordBag=} [properties] Properties to set
         * @returns {auth.UserPasswordBag} UserPasswordBag instance
         */
        UserPasswordBag.create = function create(properties) {
            return new UserPasswordBag(properties);
        };

        /**
         * Encodes the specified UserPasswordBag message. Does not implicitly {@link auth.UserPasswordBag.verify|verify} messages.
         * @function encode
         * @memberof auth.UserPasswordBag
         * @static
         * @param {auth.IUserPasswordBag} message UserPasswordBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPasswordBag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && message.hasOwnProperty("hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.salt != null && message.hasOwnProperty("salt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.salt);
            if (message.mustBeChanged != null && message.hasOwnProperty("mustBeChanged"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.mustBeChanged);
            return writer;
        };

        /**
         * Encodes the specified UserPasswordBag message, length delimited. Does not implicitly {@link auth.UserPasswordBag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.UserPasswordBag
         * @static
         * @param {auth.IUserPasswordBag} message UserPasswordBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPasswordBag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPasswordBag message from the specified reader or buffer.
         * @function decode
         * @memberof auth.UserPasswordBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.UserPasswordBag} UserPasswordBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPasswordBag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.UserPasswordBag();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.salt = reader.string();
                    break;
                case 4:
                    message.mustBeChanged = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserPasswordBag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.UserPasswordBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.UserPasswordBag} UserPasswordBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPasswordBag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPasswordBag message.
         * @function verify
         * @memberof auth.UserPasswordBag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPasswordBag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.salt != null && message.hasOwnProperty("salt"))
                if (!$util.isString(message.salt))
                    return "salt: string expected";
            if (message.mustBeChanged != null && message.hasOwnProperty("mustBeChanged"))
                if (typeof message.mustBeChanged !== "boolean")
                    return "mustBeChanged: boolean expected";
            return null;
        };

        /**
         * Creates a UserPasswordBag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.UserPasswordBag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.UserPasswordBag} UserPasswordBag
         */
        UserPasswordBag.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.UserPasswordBag)
                return object;
            let message = new $root.auth.UserPasswordBag();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.salt != null)
                message.salt = String(object.salt);
            if (object.mustBeChanged != null)
                message.mustBeChanged = Boolean(object.mustBeChanged);
            return message;
        };

        /**
         * Creates a plain object from a UserPasswordBag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.UserPasswordBag
         * @static
         * @param {auth.UserPasswordBag} message UserPasswordBag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPasswordBag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hash = "";
                object.salt = "";
                object.mustBeChanged = false;
            }
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.salt != null && message.hasOwnProperty("salt"))
                object.salt = message.salt;
            if (message.mustBeChanged != null && message.hasOwnProperty("mustBeChanged"))
                object.mustBeChanged = message.mustBeChanged;
            return object;
        };

        /**
         * Converts this UserPasswordBag to JSON.
         * @function toJSON
         * @memberof auth.UserPasswordBag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPasswordBag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPasswordBag;
    })();

    return auth;
})();

export const debug = $root.debug = (() => {

    /**
     * Namespace debug.
     * @exports debug
     * @namespace
     */
    const debug = {};

    debug.Debug = (function() {

        /**
         * Constructs a new Debug service.
         * @memberof debug
         * @classdesc Represents a Debug
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Debug(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Debug.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Debug;

        /**
         * Creates new Debug service using the specified rpc implementation.
         * @function create
         * @memberof debug.Debug
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Debug} RPC service. Useful where requests and/or responses are streamed.
         */
        Debug.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link debug.Debug#getVersion}.
         * @memberof debug.Debug
         * @typedef GetVersionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {debug.GetVersionReply} [response] GetVersionReply
         */

        /**
         * Calls GetVersion.
         * @function getVersion
         * @memberof debug.Debug
         * @instance
         * @param {debug.IGetVersionRequest} request GetVersionRequest message or plain object
         * @param {debug.Debug.GetVersionCallback} callback Node-style callback called with the error, if any, and GetVersionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Debug.prototype.getVersion = function getVersion(request, callback) {
            return this.rpcCall(getVersion, $root.debug.GetVersionRequest, $root.debug.GetVersionReply, request, callback);
        }, "name", { value: "GetVersion" });

        /**
         * Calls GetVersion.
         * @function getVersion
         * @memberof debug.Debug
         * @instance
         * @param {debug.IGetVersionRequest} request GetVersionRequest message or plain object
         * @returns {Promise<debug.GetVersionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link debug.Debug#ping}.
         * @memberof debug.Debug
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {debug.PingReply} [response] PingReply
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof debug.Debug
         * @instance
         * @param {debug.IPingRequest} request PingRequest message or plain object
         * @param {debug.Debug.PingCallback} callback Node-style callback called with the error, if any, and PingReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Debug.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.debug.PingRequest, $root.debug.PingReply, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof debug.Debug
         * @instance
         * @param {debug.IPingRequest} request PingRequest message or plain object
         * @returns {Promise<debug.PingReply>} Promise
         * @variation 2
         */
        /**
         * Calls ServerStream.
         * @function serverStream
         * @memberof debug.Debug
         * @instance
         * @param {debug.IStreamRequest} request StreamRequest message or plain object
         * @returns {RPCServerStream<debug.StreamReply>}
         * @variation 1
         */
        Object.defineProperty(Debug.prototype.serverStream = function serverStream(request, callback) {
            return this.serverStreamCall(serverStream, $root.debug.StreamRequest, $root.debug.StreamReply, request);
        }, "name", { value: "ServerStream" });
        /**
         * Calls ClientStream.
         * @function clientStream
         * @memberof debug.Debug
         * @instance
         * @returns {RPCClientStream<debug.StreamRequest>}
         * @variation 1
         */
        Object.defineProperty(Debug.prototype.clientStream = function clientStream() {
            return this.clientStreamCall(clientStream, $root.debug.StreamRequest, $root.debug.StreamReply);
        }, "name", { value: "ClientStream" });
        /**
         * Calls BidiStream.
         * @function bidiStream
         * @memberof debug.Debug
         * @instance
         * @returns {RPCBidiStream<debug.StreamRequest, debug.StreamReply>}
         * @variation 1
         */
        Object.defineProperty(Debug.prototype.bidiStream = function bidiStream() {
            return this.bidiStreamCall(bidiStream, $root.debug.StreamRequest, $root.debug.StreamReply);
        }, "name", { value: "BidiStream" });

        return Debug;
    })();

    debug.GetVersionRequest = (function() {

        /**
         * Properties of a GetVersionRequest.
         * @memberof debug
         * @interface IGetVersionRequest
         */

        /**
         * Constructs a new GetVersionRequest.
         * @memberof debug
         * @classdesc Represents a GetVersionRequest.
         * @implements IGetVersionRequest
         * @constructor
         * @param {debug.IGetVersionRequest=} [properties] Properties to set
         */
        function GetVersionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetVersionRequest instance using the specified properties.
         * @function create
         * @memberof debug.GetVersionRequest
         * @static
         * @param {debug.IGetVersionRequest=} [properties] Properties to set
         * @returns {debug.GetVersionRequest} GetVersionRequest instance
         */
        GetVersionRequest.create = function create(properties) {
            return new GetVersionRequest(properties);
        };

        /**
         * Encodes the specified GetVersionRequest message. Does not implicitly {@link debug.GetVersionRequest.verify|verify} messages.
         * @function encode
         * @memberof debug.GetVersionRequest
         * @static
         * @param {debug.IGetVersionRequest} message GetVersionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetVersionRequest message, length delimited. Does not implicitly {@link debug.GetVersionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.GetVersionRequest
         * @static
         * @param {debug.IGetVersionRequest} message GetVersionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVersionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof debug.GetVersionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.GetVersionRequest} GetVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.GetVersionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVersionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.GetVersionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.GetVersionRequest} GetVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVersionRequest message.
         * @function verify
         * @memberof debug.GetVersionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVersionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetVersionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.GetVersionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.GetVersionRequest} GetVersionRequest
         */
        GetVersionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.GetVersionRequest)
                return object;
            return new $root.debug.GetVersionRequest();
        };

        /**
         * Creates a plain object from a GetVersionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.GetVersionRequest
         * @static
         * @param {debug.GetVersionRequest} message GetVersionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVersionRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetVersionRequest to JSON.
         * @function toJSON
         * @memberof debug.GetVersionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVersionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVersionRequest;
    })();

    debug.GetVersionReply = (function() {

        /**
         * Properties of a GetVersionReply.
         * @memberof debug
         * @interface IGetVersionReply
         * @property {string|null} [version] GetVersionReply version
         */

        /**
         * Constructs a new GetVersionReply.
         * @memberof debug
         * @classdesc Represents a GetVersionReply.
         * @implements IGetVersionReply
         * @constructor
         * @param {debug.IGetVersionReply=} [properties] Properties to set
         */
        function GetVersionReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVersionReply version.
         * @member {string} version
         * @memberof debug.GetVersionReply
         * @instance
         */
        GetVersionReply.prototype.version = "";

        /**
         * Creates a new GetVersionReply instance using the specified properties.
         * @function create
         * @memberof debug.GetVersionReply
         * @static
         * @param {debug.IGetVersionReply=} [properties] Properties to set
         * @returns {debug.GetVersionReply} GetVersionReply instance
         */
        GetVersionReply.create = function create(properties) {
            return new GetVersionReply(properties);
        };

        /**
         * Encodes the specified GetVersionReply message. Does not implicitly {@link debug.GetVersionReply.verify|verify} messages.
         * @function encode
         * @memberof debug.GetVersionReply
         * @static
         * @param {debug.IGetVersionReply} message GetVersionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified GetVersionReply message, length delimited. Does not implicitly {@link debug.GetVersionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.GetVersionReply
         * @static
         * @param {debug.IGetVersionReply} message GetVersionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVersionReply message from the specified reader or buffer.
         * @function decode
         * @memberof debug.GetVersionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.GetVersionReply} GetVersionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.GetVersionReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVersionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.GetVersionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.GetVersionReply} GetVersionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVersionReply message.
         * @function verify
         * @memberof debug.GetVersionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVersionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a GetVersionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.GetVersionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.GetVersionReply} GetVersionReply
         */
        GetVersionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.GetVersionReply)
                return object;
            let message = new $root.debug.GetVersionReply();
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a GetVersionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.GetVersionReply
         * @static
         * @param {debug.GetVersionReply} message GetVersionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVersionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.version = "";
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this GetVersionReply to JSON.
         * @function toJSON
         * @memberof debug.GetVersionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVersionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetVersionReply;
    })();

    debug.PingRequest = (function() {

        /**
         * Properties of a PingRequest.
         * @memberof debug
         * @interface IPingRequest
         * @property {string|null} [message] PingRequest message
         */

        /**
         * Constructs a new PingRequest.
         * @memberof debug
         * @classdesc Represents a PingRequest.
         * @implements IPingRequest
         * @constructor
         * @param {debug.IPingRequest=} [properties] Properties to set
         */
        function PingRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingRequest message.
         * @member {string} message
         * @memberof debug.PingRequest
         * @instance
         */
        PingRequest.prototype.message = "";

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @function create
         * @memberof debug.PingRequest
         * @static
         * @param {debug.IPingRequest=} [properties] Properties to set
         * @returns {debug.PingRequest} PingRequest instance
         */
        PingRequest.create = function create(properties) {
            return new PingRequest(properties);
        };

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link debug.PingRequest.verify|verify} messages.
         * @function encode
         * @memberof debug.PingRequest
         * @static
         * @param {debug.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link debug.PingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.PingRequest
         * @static
         * @param {debug.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof debug.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.PingRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingRequest message.
         * @function verify
         * @memberof debug.PingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.PingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.PingRequest} PingRequest
         */
        PingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.PingRequest)
                return object;
            let message = new $root.debug.PingRequest();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.PingRequest
         * @static
         * @param {debug.PingRequest} message PingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this PingRequest to JSON.
         * @function toJSON
         * @memberof debug.PingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingRequest;
    })();

    debug.PingReply = (function() {

        /**
         * Properties of a PingReply.
         * @memberof debug
         * @interface IPingReply
         * @property {string|null} [message] PingReply message
         */

        /**
         * Constructs a new PingReply.
         * @memberof debug
         * @classdesc Represents a PingReply.
         * @implements IPingReply
         * @constructor
         * @param {debug.IPingReply=} [properties] Properties to set
         */
        function PingReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingReply message.
         * @member {string} message
         * @memberof debug.PingReply
         * @instance
         */
        PingReply.prototype.message = "";

        /**
         * Creates a new PingReply instance using the specified properties.
         * @function create
         * @memberof debug.PingReply
         * @static
         * @param {debug.IPingReply=} [properties] Properties to set
         * @returns {debug.PingReply} PingReply instance
         */
        PingReply.create = function create(properties) {
            return new PingReply(properties);
        };

        /**
         * Encodes the specified PingReply message. Does not implicitly {@link debug.PingReply.verify|verify} messages.
         * @function encode
         * @memberof debug.PingReply
         * @static
         * @param {debug.IPingReply} message PingReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified PingReply message, length delimited. Does not implicitly {@link debug.PingReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.PingReply
         * @static
         * @param {debug.IPingReply} message PingReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingReply message from the specified reader or buffer.
         * @function decode
         * @memberof debug.PingReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.PingReply} PingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.PingReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.PingReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.PingReply} PingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingReply message.
         * @function verify
         * @memberof debug.PingReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a PingReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.PingReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.PingReply} PingReply
         */
        PingReply.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.PingReply)
                return object;
            let message = new $root.debug.PingReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a PingReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.PingReply
         * @static
         * @param {debug.PingReply} message PingReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this PingReply to JSON.
         * @function toJSON
         * @memberof debug.PingReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingReply;
    })();

    debug.StreamRequest = (function() {

        /**
         * Properties of a StreamRequest.
         * @memberof debug
         * @interface IStreamRequest
         * @property {string|null} [message] StreamRequest message
         */

        /**
         * Constructs a new StreamRequest.
         * @memberof debug
         * @classdesc Represents a StreamRequest.
         * @implements IStreamRequest
         * @constructor
         * @param {debug.IStreamRequest=} [properties] Properties to set
         */
        function StreamRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamRequest message.
         * @member {string} message
         * @memberof debug.StreamRequest
         * @instance
         */
        StreamRequest.prototype.message = "";

        /**
         * Creates a new StreamRequest instance using the specified properties.
         * @function create
         * @memberof debug.StreamRequest
         * @static
         * @param {debug.IStreamRequest=} [properties] Properties to set
         * @returns {debug.StreamRequest} StreamRequest instance
         */
        StreamRequest.create = function create(properties) {
            return new StreamRequest(properties);
        };

        /**
         * Encodes the specified StreamRequest message. Does not implicitly {@link debug.StreamRequest.verify|verify} messages.
         * @function encode
         * @memberof debug.StreamRequest
         * @static
         * @param {debug.IStreamRequest} message StreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified StreamRequest message, length delimited. Does not implicitly {@link debug.StreamRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.StreamRequest
         * @static
         * @param {debug.IStreamRequest} message StreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamRequest message from the specified reader or buffer.
         * @function decode
         * @memberof debug.StreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.StreamRequest} StreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.StreamRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.StreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.StreamRequest} StreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamRequest message.
         * @function verify
         * @memberof debug.StreamRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a StreamRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.StreamRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.StreamRequest} StreamRequest
         */
        StreamRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.StreamRequest)
                return object;
            let message = new $root.debug.StreamRequest();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a StreamRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.StreamRequest
         * @static
         * @param {debug.StreamRequest} message StreamRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this StreamRequest to JSON.
         * @function toJSON
         * @memberof debug.StreamRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamRequest;
    })();

    debug.StreamReply = (function() {

        /**
         * Properties of a StreamReply.
         * @memberof debug
         * @interface IStreamReply
         * @property {string|null} [message] StreamReply message
         */

        /**
         * Constructs a new StreamReply.
         * @memberof debug
         * @classdesc Represents a StreamReply.
         * @implements IStreamReply
         * @constructor
         * @param {debug.IStreamReply=} [properties] Properties to set
         */
        function StreamReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamReply message.
         * @member {string} message
         * @memberof debug.StreamReply
         * @instance
         */
        StreamReply.prototype.message = "";

        /**
         * Creates a new StreamReply instance using the specified properties.
         * @function create
         * @memberof debug.StreamReply
         * @static
         * @param {debug.IStreamReply=} [properties] Properties to set
         * @returns {debug.StreamReply} StreamReply instance
         */
        StreamReply.create = function create(properties) {
            return new StreamReply(properties);
        };

        /**
         * Encodes the specified StreamReply message. Does not implicitly {@link debug.StreamReply.verify|verify} messages.
         * @function encode
         * @memberof debug.StreamReply
         * @static
         * @param {debug.IStreamReply} message StreamReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified StreamReply message, length delimited. Does not implicitly {@link debug.StreamReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof debug.StreamReply
         * @static
         * @param {debug.IStreamReply} message StreamReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamReply message from the specified reader or buffer.
         * @function decode
         * @memberof debug.StreamReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {debug.StreamReply} StreamReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.debug.StreamReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof debug.StreamReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {debug.StreamReply} StreamReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamReply message.
         * @function verify
         * @memberof debug.StreamReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a StreamReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof debug.StreamReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {debug.StreamReply} StreamReply
         */
        StreamReply.fromObject = function fromObject(object) {
            if (object instanceof $root.debug.StreamReply)
                return object;
            let message = new $root.debug.StreamReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a StreamReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof debug.StreamReply
         * @static
         * @param {debug.StreamReply} message StreamReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this StreamReply to JSON.
         * @function toJSON
         * @memberof debug.StreamReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamReply;
    })();

    return debug;
})();

export const device = $root.device = (() => {

    /**
     * Namespace device.
     * @exports device
     * @namespace
     */
    const device = {};

    device.Device = (function() {

        /**
         * Constructs a new Device service.
         * @memberof device
         * @classdesc Represents a Device
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Device(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Device.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Device;

        /**
         * Creates new Device service using the specified rpc implementation.
         * @function create
         * @memberof device.Device
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Device} RPC service. Useful where requests and/or responses are streamed.
         */
        Device.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link device.Device#startActivation}.
         * @memberof device.Device
         * @typedef StartActivationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {device.StartActivationReply} [response] StartActivationReply
         */

        /**
         * Calls StartActivation.
         * @function startActivation
         * @memberof device.Device
         * @instance
         * @param {device.IStartActivationRequest} request StartActivationRequest message or plain object
         * @param {device.Device.StartActivationCallback} callback Node-style callback called with the error, if any, and StartActivationReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Device.prototype.startActivation = function startActivation(request, callback) {
            return this.rpcCall(startActivation, $root.device.StartActivationRequest, $root.device.StartActivationReply, request, callback);
        }, "name", { value: "StartActivation" });

        /**
         * Calls StartActivation.
         * @function startActivation
         * @memberof device.Device
         * @instance
         * @param {device.IStartActivationRequest} request StartActivationRequest message or plain object
         * @returns {Promise<device.StartActivationReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link device.Device#checkActivation}.
         * @memberof device.Device
         * @typedef CheckActivationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {device.CheckActivationReply} [response] CheckActivationReply
         */

        /**
         * Calls CheckActivation.
         * @function checkActivation
         * @memberof device.Device
         * @instance
         * @param {device.ICheckActivationRequest} request CheckActivationRequest message or plain object
         * @param {device.Device.CheckActivationCallback} callback Node-style callback called with the error, if any, and CheckActivationReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Device.prototype.checkActivation = function checkActivation(request, callback) {
            return this.rpcCall(checkActivation, $root.device.CheckActivationRequest, $root.device.CheckActivationReply, request, callback);
        }, "name", { value: "CheckActivation" });

        /**
         * Calls CheckActivation.
         * @function checkActivation
         * @memberof device.Device
         * @instance
         * @param {device.ICheckActivationRequest} request CheckActivationRequest message or plain object
         * @returns {Promise<device.CheckActivationReply>} Promise
         * @variation 2
         */

        return Device;
    })();

    device.StartActivationRequest = (function() {

        /**
         * Properties of a StartActivationRequest.
         * @memberof device
         * @interface IStartActivationRequest
         * @property {string|null} [deviceUniqueId] StartActivationRequest deviceUniqueId
         * @property {string|null} [brand] StartActivationRequest brand
         * @property {string|null} [model] StartActivationRequest model
         * @property {string|null} [version] StartActivationRequest version
         */

        /**
         * Constructs a new StartActivationRequest.
         * @memberof device
         * @classdesc Represents a StartActivationRequest.
         * @implements IStartActivationRequest
         * @constructor
         * @param {device.IStartActivationRequest=} [properties] Properties to set
         */
        function StartActivationRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartActivationRequest deviceUniqueId.
         * @member {string} deviceUniqueId
         * @memberof device.StartActivationRequest
         * @instance
         */
        StartActivationRequest.prototype.deviceUniqueId = "";

        /**
         * StartActivationRequest brand.
         * @member {string} brand
         * @memberof device.StartActivationRequest
         * @instance
         */
        StartActivationRequest.prototype.brand = "";

        /**
         * StartActivationRequest model.
         * @member {string} model
         * @memberof device.StartActivationRequest
         * @instance
         */
        StartActivationRequest.prototype.model = "";

        /**
         * StartActivationRequest version.
         * @member {string} version
         * @memberof device.StartActivationRequest
         * @instance
         */
        StartActivationRequest.prototype.version = "";

        /**
         * Creates a new StartActivationRequest instance using the specified properties.
         * @function create
         * @memberof device.StartActivationRequest
         * @static
         * @param {device.IStartActivationRequest=} [properties] Properties to set
         * @returns {device.StartActivationRequest} StartActivationRequest instance
         */
        StartActivationRequest.create = function create(properties) {
            return new StartActivationRequest(properties);
        };

        /**
         * Encodes the specified StartActivationRequest message. Does not implicitly {@link device.StartActivationRequest.verify|verify} messages.
         * @function encode
         * @memberof device.StartActivationRequest
         * @static
         * @param {device.IStartActivationRequest} message StartActivationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartActivationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceUniqueId);
            if (message.brand != null && message.hasOwnProperty("brand"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.brand);
            if (message.model != null && message.hasOwnProperty("model"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.model);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified StartActivationRequest message, length delimited. Does not implicitly {@link device.StartActivationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device.StartActivationRequest
         * @static
         * @param {device.IStartActivationRequest} message StartActivationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartActivationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartActivationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof device.StartActivationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device.StartActivationRequest} StartActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartActivationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device.StartActivationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceUniqueId = reader.string();
                    break;
                case 2:
                    message.brand = reader.string();
                    break;
                case 3:
                    message.model = reader.string();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartActivationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device.StartActivationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device.StartActivationRequest} StartActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartActivationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartActivationRequest message.
         * @function verify
         * @memberof device.StartActivationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartActivationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                if (!$util.isString(message.deviceUniqueId))
                    return "deviceUniqueId: string expected";
            if (message.brand != null && message.hasOwnProperty("brand"))
                if (!$util.isString(message.brand))
                    return "brand: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a StartActivationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device.StartActivationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device.StartActivationRequest} StartActivationRequest
         */
        StartActivationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.device.StartActivationRequest)
                return object;
            let message = new $root.device.StartActivationRequest();
            if (object.deviceUniqueId != null)
                message.deviceUniqueId = String(object.deviceUniqueId);
            if (object.brand != null)
                message.brand = String(object.brand);
            if (object.model != null)
                message.model = String(object.model);
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a StartActivationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device.StartActivationRequest
         * @static
         * @param {device.StartActivationRequest} message StartActivationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartActivationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deviceUniqueId = "";
                object.brand = "";
                object.model = "";
                object.version = "";
            }
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                object.deviceUniqueId = message.deviceUniqueId;
            if (message.brand != null && message.hasOwnProperty("brand"))
                object.brand = message.brand;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this StartActivationRequest to JSON.
         * @function toJSON
         * @memberof device.StartActivationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartActivationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartActivationRequest;
    })();

    device.StartActivationReply = (function() {

        /**
         * Properties of a StartActivationReply.
         * @memberof device
         * @interface IStartActivationReply
         * @property {string|null} [deviceUniqueId] StartActivationReply deviceUniqueId
         */

        /**
         * Constructs a new StartActivationReply.
         * @memberof device
         * @classdesc Represents a StartActivationReply.
         * @implements IStartActivationReply
         * @constructor
         * @param {device.IStartActivationReply=} [properties] Properties to set
         */
        function StartActivationReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartActivationReply deviceUniqueId.
         * @member {string} deviceUniqueId
         * @memberof device.StartActivationReply
         * @instance
         */
        StartActivationReply.prototype.deviceUniqueId = "";

        /**
         * Creates a new StartActivationReply instance using the specified properties.
         * @function create
         * @memberof device.StartActivationReply
         * @static
         * @param {device.IStartActivationReply=} [properties] Properties to set
         * @returns {device.StartActivationReply} StartActivationReply instance
         */
        StartActivationReply.create = function create(properties) {
            return new StartActivationReply(properties);
        };

        /**
         * Encodes the specified StartActivationReply message. Does not implicitly {@link device.StartActivationReply.verify|verify} messages.
         * @function encode
         * @memberof device.StartActivationReply
         * @static
         * @param {device.IStartActivationReply} message StartActivationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartActivationReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceUniqueId);
            return writer;
        };

        /**
         * Encodes the specified StartActivationReply message, length delimited. Does not implicitly {@link device.StartActivationReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device.StartActivationReply
         * @static
         * @param {device.IStartActivationReply} message StartActivationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartActivationReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartActivationReply message from the specified reader or buffer.
         * @function decode
         * @memberof device.StartActivationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device.StartActivationReply} StartActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartActivationReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device.StartActivationReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceUniqueId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartActivationReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device.StartActivationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device.StartActivationReply} StartActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartActivationReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartActivationReply message.
         * @function verify
         * @memberof device.StartActivationReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartActivationReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                if (!$util.isString(message.deviceUniqueId))
                    return "deviceUniqueId: string expected";
            return null;
        };

        /**
         * Creates a StartActivationReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device.StartActivationReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device.StartActivationReply} StartActivationReply
         */
        StartActivationReply.fromObject = function fromObject(object) {
            if (object instanceof $root.device.StartActivationReply)
                return object;
            let message = new $root.device.StartActivationReply();
            if (object.deviceUniqueId != null)
                message.deviceUniqueId = String(object.deviceUniqueId);
            return message;
        };

        /**
         * Creates a plain object from a StartActivationReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device.StartActivationReply
         * @static
         * @param {device.StartActivationReply} message StartActivationReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartActivationReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.deviceUniqueId = "";
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                object.deviceUniqueId = message.deviceUniqueId;
            return object;
        };

        /**
         * Converts this StartActivationReply to JSON.
         * @function toJSON
         * @memberof device.StartActivationReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartActivationReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartActivationReply;
    })();

    device.CheckActivationRequest = (function() {

        /**
         * Properties of a CheckActivationRequest.
         * @memberof device
         * @interface ICheckActivationRequest
         * @property {string|null} [deviceUniqueId] CheckActivationRequest deviceUniqueId
         */

        /**
         * Constructs a new CheckActivationRequest.
         * @memberof device
         * @classdesc Represents a CheckActivationRequest.
         * @implements ICheckActivationRequest
         * @constructor
         * @param {device.ICheckActivationRequest=} [properties] Properties to set
         */
        function CheckActivationRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckActivationRequest deviceUniqueId.
         * @member {string} deviceUniqueId
         * @memberof device.CheckActivationRequest
         * @instance
         */
        CheckActivationRequest.prototype.deviceUniqueId = "";

        /**
         * Creates a new CheckActivationRequest instance using the specified properties.
         * @function create
         * @memberof device.CheckActivationRequest
         * @static
         * @param {device.ICheckActivationRequest=} [properties] Properties to set
         * @returns {device.CheckActivationRequest} CheckActivationRequest instance
         */
        CheckActivationRequest.create = function create(properties) {
            return new CheckActivationRequest(properties);
        };

        /**
         * Encodes the specified CheckActivationRequest message. Does not implicitly {@link device.CheckActivationRequest.verify|verify} messages.
         * @function encode
         * @memberof device.CheckActivationRequest
         * @static
         * @param {device.ICheckActivationRequest} message CheckActivationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckActivationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceUniqueId);
            return writer;
        };

        /**
         * Encodes the specified CheckActivationRequest message, length delimited. Does not implicitly {@link device.CheckActivationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device.CheckActivationRequest
         * @static
         * @param {device.ICheckActivationRequest} message CheckActivationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckActivationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckActivationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof device.CheckActivationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device.CheckActivationRequest} CheckActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckActivationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device.CheckActivationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceUniqueId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckActivationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device.CheckActivationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device.CheckActivationRequest} CheckActivationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckActivationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckActivationRequest message.
         * @function verify
         * @memberof device.CheckActivationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckActivationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                if (!$util.isString(message.deviceUniqueId))
                    return "deviceUniqueId: string expected";
            return null;
        };

        /**
         * Creates a CheckActivationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device.CheckActivationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device.CheckActivationRequest} CheckActivationRequest
         */
        CheckActivationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.device.CheckActivationRequest)
                return object;
            let message = new $root.device.CheckActivationRequest();
            if (object.deviceUniqueId != null)
                message.deviceUniqueId = String(object.deviceUniqueId);
            return message;
        };

        /**
         * Creates a plain object from a CheckActivationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device.CheckActivationRequest
         * @static
         * @param {device.CheckActivationRequest} message CheckActivationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckActivationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.deviceUniqueId = "";
            if (message.deviceUniqueId != null && message.hasOwnProperty("deviceUniqueId"))
                object.deviceUniqueId = message.deviceUniqueId;
            return object;
        };

        /**
         * Converts this CheckActivationRequest to JSON.
         * @function toJSON
         * @memberof device.CheckActivationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckActivationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckActivationRequest;
    })();

    device.CheckActivationReply = (function() {

        /**
         * Properties of a CheckActivationReply.
         * @memberof device
         * @interface ICheckActivationReply
         * @property {string|null} [licenceId] CheckActivationReply licenceId
         * @property {string|null} [siteId] CheckActivationReply siteId
         */

        /**
         * Constructs a new CheckActivationReply.
         * @memberof device
         * @classdesc Represents a CheckActivationReply.
         * @implements ICheckActivationReply
         * @constructor
         * @param {device.ICheckActivationReply=} [properties] Properties to set
         */
        function CheckActivationReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckActivationReply licenceId.
         * @member {string} licenceId
         * @memberof device.CheckActivationReply
         * @instance
         */
        CheckActivationReply.prototype.licenceId = "";

        /**
         * CheckActivationReply siteId.
         * @member {string} siteId
         * @memberof device.CheckActivationReply
         * @instance
         */
        CheckActivationReply.prototype.siteId = "";

        /**
         * Creates a new CheckActivationReply instance using the specified properties.
         * @function create
         * @memberof device.CheckActivationReply
         * @static
         * @param {device.ICheckActivationReply=} [properties] Properties to set
         * @returns {device.CheckActivationReply} CheckActivationReply instance
         */
        CheckActivationReply.create = function create(properties) {
            return new CheckActivationReply(properties);
        };

        /**
         * Encodes the specified CheckActivationReply message. Does not implicitly {@link device.CheckActivationReply.verify|verify} messages.
         * @function encode
         * @memberof device.CheckActivationReply
         * @static
         * @param {device.ICheckActivationReply} message CheckActivationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckActivationReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.licenceId != null && message.hasOwnProperty("licenceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.licenceId);
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified CheckActivationReply message, length delimited. Does not implicitly {@link device.CheckActivationReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device.CheckActivationReply
         * @static
         * @param {device.ICheckActivationReply} message CheckActivationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckActivationReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckActivationReply message from the specified reader or buffer.
         * @function decode
         * @memberof device.CheckActivationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device.CheckActivationReply} CheckActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckActivationReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device.CheckActivationReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.licenceId = reader.string();
                    break;
                case 2:
                    message.siteId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckActivationReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device.CheckActivationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device.CheckActivationReply} CheckActivationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckActivationReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckActivationReply message.
         * @function verify
         * @memberof device.CheckActivationReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckActivationReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.licenceId != null && message.hasOwnProperty("licenceId"))
                if (!$util.isString(message.licenceId))
                    return "licenceId: string expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isString(message.siteId))
                    return "siteId: string expected";
            return null;
        };

        /**
         * Creates a CheckActivationReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device.CheckActivationReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device.CheckActivationReply} CheckActivationReply
         */
        CheckActivationReply.fromObject = function fromObject(object) {
            if (object instanceof $root.device.CheckActivationReply)
                return object;
            let message = new $root.device.CheckActivationReply();
            if (object.licenceId != null)
                message.licenceId = String(object.licenceId);
            if (object.siteId != null)
                message.siteId = String(object.siteId);
            return message;
        };

        /**
         * Creates a plain object from a CheckActivationReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device.CheckActivationReply
         * @static
         * @param {device.CheckActivationReply} message CheckActivationReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckActivationReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.licenceId = "";
                object.siteId = "";
            }
            if (message.licenceId != null && message.hasOwnProperty("licenceId"))
                object.licenceId = message.licenceId;
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                object.siteId = message.siteId;
            return object;
        };

        /**
         * Converts this CheckActivationReply to JSON.
         * @function toJSON
         * @memberof device.CheckActivationReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckActivationReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckActivationReply;
    })();

    return device;
})();

export const shift = $root.shift = (() => {

    /**
     * Namespace shift.
     * @exports shift
     * @namespace
     */
    const shift = {};

    shift.Shifts = (function() {

        /**
         * Constructs a new Shifts service.
         * @memberof shift
         * @classdesc Represents a Shifts
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Shifts(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Shifts.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Shifts;

        /**
         * Creates new Shifts service using the specified rpc implementation.
         * @function create
         * @memberof shift.Shifts
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Shifts} RPC service. Useful where requests and/or responses are streamed.
         */
        Shifts.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link shift.Shifts#endShift}.
         * @memberof shift.Shifts
         * @typedef EndShiftCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shift.EndShiftReply} [response] EndShiftReply
         */

        /**
         * Calls EndShift.
         * @function endShift
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IEndShiftRequest} request EndShiftRequest message or plain object
         * @param {shift.Shifts.EndShiftCallback} callback Node-style callback called with the error, if any, and EndShiftReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Shifts.prototype.endShift = function endShift(request, callback) {
            return this.rpcCall(endShift, $root.shift.EndShiftRequest, $root.shift.EndShiftReply, request, callback);
        }, "name", { value: "EndShift" });

        /**
         * Calls EndShift.
         * @function endShift
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IEndShiftRequest} request EndShiftRequest message or plain object
         * @returns {Promise<shift.EndShiftReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shift.Shifts#getShifts}.
         * @memberof shift.Shifts
         * @typedef GetShiftsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shift.GetShiftsReply} [response] GetShiftsReply
         */

        /**
         * Calls GetShifts.
         * @function getShifts
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IGetShiftsRequest} request GetShiftsRequest message or plain object
         * @param {shift.Shifts.GetShiftsCallback} callback Node-style callback called with the error, if any, and GetShiftsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Shifts.prototype.getShifts = function getShifts(request, callback) {
            return this.rpcCall(getShifts, $root.shift.GetShiftsRequest, $root.shift.GetShiftsReply, request, callback);
        }, "name", { value: "GetShifts" });

        /**
         * Calls GetShifts.
         * @function getShifts
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IGetShiftsRequest} request GetShiftsRequest message or plain object
         * @returns {Promise<shift.GetShiftsReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link shift.Shifts#getGuardroomMaterials}.
         * @memberof shift.Shifts
         * @typedef GetGuardroomMaterialsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {shift.GetGuardroomMaterialsReply} [response] GetGuardroomMaterialsReply
         */

        /**
         * Calls GetGuardroomMaterials.
         * @function getGuardroomMaterials
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IGetGuardroomMaterialsRequest} request GetGuardroomMaterialsRequest message or plain object
         * @param {shift.Shifts.GetGuardroomMaterialsCallback} callback Node-style callback called with the error, if any, and GetGuardroomMaterialsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Shifts.prototype.getGuardroomMaterials = function getGuardroomMaterials(request, callback) {
            return this.rpcCall(getGuardroomMaterials, $root.shift.GetGuardroomMaterialsRequest, $root.shift.GetGuardroomMaterialsReply, request, callback);
        }, "name", { value: "GetGuardroomMaterials" });

        /**
         * Calls GetGuardroomMaterials.
         * @function getGuardroomMaterials
         * @memberof shift.Shifts
         * @instance
         * @param {shift.IGetGuardroomMaterialsRequest} request GetGuardroomMaterialsRequest message or plain object
         * @returns {Promise<shift.GetGuardroomMaterialsReply>} Promise
         * @variation 2
         */

        return Shifts;
    })();

    shift.EndShiftRequest = (function() {

        /**
         * Properties of an EndShiftRequest.
         * @memberof shift
         * @interface IEndShiftRequest
         * @property {string|null} [userId] EndShiftRequest userId
         * @property {string|null} [shiftId] EndShiftRequest shiftId
         * @property {number|Long|null} [endDate] EndShiftRequest endDate
         * @property {boolean|null} [isLocallyCreated] EndShiftRequest isLocallyCreated
         */

        /**
         * Constructs a new EndShiftRequest.
         * @memberof shift
         * @classdesc Represents an EndShiftRequest.
         * @implements IEndShiftRequest
         * @constructor
         * @param {shift.IEndShiftRequest=} [properties] Properties to set
         */
        function EndShiftRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndShiftRequest userId.
         * @member {string} userId
         * @memberof shift.EndShiftRequest
         * @instance
         */
        EndShiftRequest.prototype.userId = "";

        /**
         * EndShiftRequest shiftId.
         * @member {string} shiftId
         * @memberof shift.EndShiftRequest
         * @instance
         */
        EndShiftRequest.prototype.shiftId = "";

        /**
         * EndShiftRequest endDate.
         * @member {number|Long} endDate
         * @memberof shift.EndShiftRequest
         * @instance
         */
        EndShiftRequest.prototype.endDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EndShiftRequest isLocallyCreated.
         * @member {boolean} isLocallyCreated
         * @memberof shift.EndShiftRequest
         * @instance
         */
        EndShiftRequest.prototype.isLocallyCreated = false;

        /**
         * Creates a new EndShiftRequest instance using the specified properties.
         * @function create
         * @memberof shift.EndShiftRequest
         * @static
         * @param {shift.IEndShiftRequest=} [properties] Properties to set
         * @returns {shift.EndShiftRequest} EndShiftRequest instance
         */
        EndShiftRequest.create = function create(properties) {
            return new EndShiftRequest(properties);
        };

        /**
         * Encodes the specified EndShiftRequest message. Does not implicitly {@link shift.EndShiftRequest.verify|verify} messages.
         * @function encode
         * @memberof shift.EndShiftRequest
         * @static
         * @param {shift.IEndShiftRequest} message EndShiftRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndShiftRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.shiftId);
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endDate);
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isLocallyCreated);
            return writer;
        };

        /**
         * Encodes the specified EndShiftRequest message, length delimited. Does not implicitly {@link shift.EndShiftRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.EndShiftRequest
         * @static
         * @param {shift.IEndShiftRequest} message EndShiftRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndShiftRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndShiftRequest message from the specified reader or buffer.
         * @function decode
         * @memberof shift.EndShiftRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.EndShiftRequest} EndShiftRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndShiftRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.EndShiftRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.shiftId = reader.string();
                    break;
                case 3:
                    message.endDate = reader.int64();
                    break;
                case 4:
                    message.isLocallyCreated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EndShiftRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.EndShiftRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.EndShiftRequest} EndShiftRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndShiftRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndShiftRequest message.
         * @function verify
         * @memberof shift.EndShiftRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndShiftRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                if (!$util.isString(message.shiftId))
                    return "shiftId: string expected";
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isInteger(message.endDate) && !(message.endDate && $util.isInteger(message.endDate.low) && $util.isInteger(message.endDate.high)))
                    return "endDate: integer|Long expected";
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                if (typeof message.isLocallyCreated !== "boolean")
                    return "isLocallyCreated: boolean expected";
            return null;
        };

        /**
         * Creates an EndShiftRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.EndShiftRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.EndShiftRequest} EndShiftRequest
         */
        EndShiftRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.EndShiftRequest)
                return object;
            let message = new $root.shift.EndShiftRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.shiftId != null)
                message.shiftId = String(object.shiftId);
            if (object.endDate != null)
                if ($util.Long)
                    (message.endDate = $util.Long.fromValue(object.endDate)).unsigned = false;
                else if (typeof object.endDate === "string")
                    message.endDate = parseInt(object.endDate, 10);
                else if (typeof object.endDate === "number")
                    message.endDate = object.endDate;
                else if (typeof object.endDate === "object")
                    message.endDate = new $util.LongBits(object.endDate.low >>> 0, object.endDate.high >>> 0).toNumber();
            if (object.isLocallyCreated != null)
                message.isLocallyCreated = Boolean(object.isLocallyCreated);
            return message;
        };

        /**
         * Creates a plain object from an EndShiftRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.EndShiftRequest
         * @static
         * @param {shift.EndShiftRequest} message EndShiftRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndShiftRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.shiftId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endDate = options.longs === String ? "0" : 0;
                object.isLocallyCreated = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                object.shiftId = message.shiftId;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (typeof message.endDate === "number")
                    object.endDate = options.longs === String ? String(message.endDate) : message.endDate;
                else
                    object.endDate = options.longs === String ? $util.Long.prototype.toString.call(message.endDate) : options.longs === Number ? new $util.LongBits(message.endDate.low >>> 0, message.endDate.high >>> 0).toNumber() : message.endDate;
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                object.isLocallyCreated = message.isLocallyCreated;
            return object;
        };

        /**
         * Converts this EndShiftRequest to JSON.
         * @function toJSON
         * @memberof shift.EndShiftRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndShiftRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EndShiftRequest;
    })();

    shift.EndShiftReply = (function() {

        /**
         * Properties of an EndShiftReply.
         * @memberof shift
         * @interface IEndShiftReply
         */

        /**
         * Constructs a new EndShiftReply.
         * @memberof shift
         * @classdesc Represents an EndShiftReply.
         * @implements IEndShiftReply
         * @constructor
         * @param {shift.IEndShiftReply=} [properties] Properties to set
         */
        function EndShiftReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EndShiftReply instance using the specified properties.
         * @function create
         * @memberof shift.EndShiftReply
         * @static
         * @param {shift.IEndShiftReply=} [properties] Properties to set
         * @returns {shift.EndShiftReply} EndShiftReply instance
         */
        EndShiftReply.create = function create(properties) {
            return new EndShiftReply(properties);
        };

        /**
         * Encodes the specified EndShiftReply message. Does not implicitly {@link shift.EndShiftReply.verify|verify} messages.
         * @function encode
         * @memberof shift.EndShiftReply
         * @static
         * @param {shift.IEndShiftReply} message EndShiftReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndShiftReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EndShiftReply message, length delimited. Does not implicitly {@link shift.EndShiftReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.EndShiftReply
         * @static
         * @param {shift.IEndShiftReply} message EndShiftReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndShiftReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndShiftReply message from the specified reader or buffer.
         * @function decode
         * @memberof shift.EndShiftReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.EndShiftReply} EndShiftReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndShiftReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.EndShiftReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EndShiftReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.EndShiftReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.EndShiftReply} EndShiftReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndShiftReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndShiftReply message.
         * @function verify
         * @memberof shift.EndShiftReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndShiftReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EndShiftReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.EndShiftReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.EndShiftReply} EndShiftReply
         */
        EndShiftReply.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.EndShiftReply)
                return object;
            return new $root.shift.EndShiftReply();
        };

        /**
         * Creates a plain object from an EndShiftReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.EndShiftReply
         * @static
         * @param {shift.EndShiftReply} message EndShiftReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndShiftReply.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EndShiftReply to JSON.
         * @function toJSON
         * @memberof shift.EndShiftReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndShiftReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EndShiftReply;
    })();

    shift.GetShiftsRequest = (function() {

        /**
         * Properties of a GetShiftsRequest.
         * @memberof shift
         * @interface IGetShiftsRequest
         * @property {string|null} [guardroomId] GetShiftsRequest guardroomId
         */

        /**
         * Constructs a new GetShiftsRequest.
         * @memberof shift
         * @classdesc Represents a GetShiftsRequest.
         * @implements IGetShiftsRequest
         * @constructor
         * @param {shift.IGetShiftsRequest=} [properties] Properties to set
         */
        function GetShiftsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetShiftsRequest guardroomId.
         * @member {string} guardroomId
         * @memberof shift.GetShiftsRequest
         * @instance
         */
        GetShiftsRequest.prototype.guardroomId = "";

        /**
         * Creates a new GetShiftsRequest instance using the specified properties.
         * @function create
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {shift.IGetShiftsRequest=} [properties] Properties to set
         * @returns {shift.GetShiftsRequest} GetShiftsRequest instance
         */
        GetShiftsRequest.create = function create(properties) {
            return new GetShiftsRequest(properties);
        };

        /**
         * Encodes the specified GetShiftsRequest message. Does not implicitly {@link shift.GetShiftsRequest.verify|verify} messages.
         * @function encode
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {shift.IGetShiftsRequest} message GetShiftsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetShiftsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guardroomId);
            return writer;
        };

        /**
         * Encodes the specified GetShiftsRequest message, length delimited. Does not implicitly {@link shift.GetShiftsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {shift.IGetShiftsRequest} message GetShiftsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetShiftsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetShiftsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.GetShiftsRequest} GetShiftsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetShiftsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.GetShiftsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guardroomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetShiftsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.GetShiftsRequest} GetShiftsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetShiftsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetShiftsRequest message.
         * @function verify
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetShiftsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                if (!$util.isString(message.guardroomId))
                    return "guardroomId: string expected";
            return null;
        };

        /**
         * Creates a GetShiftsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.GetShiftsRequest} GetShiftsRequest
         */
        GetShiftsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.GetShiftsRequest)
                return object;
            let message = new $root.shift.GetShiftsRequest();
            if (object.guardroomId != null)
                message.guardroomId = String(object.guardroomId);
            return message;
        };

        /**
         * Creates a plain object from a GetShiftsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.GetShiftsRequest
         * @static
         * @param {shift.GetShiftsRequest} message GetShiftsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetShiftsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.guardroomId = "";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                object.guardroomId = message.guardroomId;
            return object;
        };

        /**
         * Converts this GetShiftsRequest to JSON.
         * @function toJSON
         * @memberof shift.GetShiftsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetShiftsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetShiftsRequest;
    })();

    shift.GetShiftsReply = (function() {

        /**
         * Properties of a GetShiftsReply.
         * @memberof shift
         * @interface IGetShiftsReply
         * @property {Array.<shift.IShift>|null} [items] GetShiftsReply items
         */

        /**
         * Constructs a new GetShiftsReply.
         * @memberof shift
         * @classdesc Represents a GetShiftsReply.
         * @implements IGetShiftsReply
         * @constructor
         * @param {shift.IGetShiftsReply=} [properties] Properties to set
         */
        function GetShiftsReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetShiftsReply items.
         * @member {Array.<shift.IShift>} items
         * @memberof shift.GetShiftsReply
         * @instance
         */
        GetShiftsReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new GetShiftsReply instance using the specified properties.
         * @function create
         * @memberof shift.GetShiftsReply
         * @static
         * @param {shift.IGetShiftsReply=} [properties] Properties to set
         * @returns {shift.GetShiftsReply} GetShiftsReply instance
         */
        GetShiftsReply.create = function create(properties) {
            return new GetShiftsReply(properties);
        };

        /**
         * Encodes the specified GetShiftsReply message. Does not implicitly {@link shift.GetShiftsReply.verify|verify} messages.
         * @function encode
         * @memberof shift.GetShiftsReply
         * @static
         * @param {shift.IGetShiftsReply} message GetShiftsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetShiftsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.shift.Shift.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetShiftsReply message, length delimited. Does not implicitly {@link shift.GetShiftsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.GetShiftsReply
         * @static
         * @param {shift.IGetShiftsReply} message GetShiftsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetShiftsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetShiftsReply message from the specified reader or buffer.
         * @function decode
         * @memberof shift.GetShiftsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.GetShiftsReply} GetShiftsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetShiftsReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.GetShiftsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.shift.Shift.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetShiftsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.GetShiftsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.GetShiftsReply} GetShiftsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetShiftsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetShiftsReply message.
         * @function verify
         * @memberof shift.GetShiftsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetShiftsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.shift.Shift.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetShiftsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.GetShiftsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.GetShiftsReply} GetShiftsReply
         */
        GetShiftsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.GetShiftsReply)
                return object;
            let message = new $root.shift.GetShiftsReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".shift.GetShiftsReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".shift.GetShiftsReply.items: object expected");
                    message.items[i] = $root.shift.Shift.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetShiftsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.GetShiftsReply
         * @static
         * @param {shift.GetShiftsReply} message GetShiftsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetShiftsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.shift.Shift.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GetShiftsReply to JSON.
         * @function toJSON
         * @memberof shift.GetShiftsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetShiftsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetShiftsReply;
    })();

    shift.GetGuardroomMaterialsRequest = (function() {

        /**
         * Properties of a GetGuardroomMaterialsRequest.
         * @memberof shift
         * @interface IGetGuardroomMaterialsRequest
         * @property {string|null} [guardroomId] GetGuardroomMaterialsRequest guardroomId
         */

        /**
         * Constructs a new GetGuardroomMaterialsRequest.
         * @memberof shift
         * @classdesc Represents a GetGuardroomMaterialsRequest.
         * @implements IGetGuardroomMaterialsRequest
         * @constructor
         * @param {shift.IGetGuardroomMaterialsRequest=} [properties] Properties to set
         */
        function GetGuardroomMaterialsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGuardroomMaterialsRequest guardroomId.
         * @member {string} guardroomId
         * @memberof shift.GetGuardroomMaterialsRequest
         * @instance
         */
        GetGuardroomMaterialsRequest.prototype.guardroomId = "";

        /**
         * Creates a new GetGuardroomMaterialsRequest instance using the specified properties.
         * @function create
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {shift.IGetGuardroomMaterialsRequest=} [properties] Properties to set
         * @returns {shift.GetGuardroomMaterialsRequest} GetGuardroomMaterialsRequest instance
         */
        GetGuardroomMaterialsRequest.create = function create(properties) {
            return new GetGuardroomMaterialsRequest(properties);
        };

        /**
         * Encodes the specified GetGuardroomMaterialsRequest message. Does not implicitly {@link shift.GetGuardroomMaterialsRequest.verify|verify} messages.
         * @function encode
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {shift.IGetGuardroomMaterialsRequest} message GetGuardroomMaterialsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomMaterialsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guardroomId);
            return writer;
        };

        /**
         * Encodes the specified GetGuardroomMaterialsRequest message, length delimited. Does not implicitly {@link shift.GetGuardroomMaterialsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {shift.IGetGuardroomMaterialsRequest} message GetGuardroomMaterialsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomMaterialsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGuardroomMaterialsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.GetGuardroomMaterialsRequest} GetGuardroomMaterialsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomMaterialsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.GetGuardroomMaterialsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guardroomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGuardroomMaterialsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.GetGuardroomMaterialsRequest} GetGuardroomMaterialsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomMaterialsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGuardroomMaterialsRequest message.
         * @function verify
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGuardroomMaterialsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                if (!$util.isString(message.guardroomId))
                    return "guardroomId: string expected";
            return null;
        };

        /**
         * Creates a GetGuardroomMaterialsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.GetGuardroomMaterialsRequest} GetGuardroomMaterialsRequest
         */
        GetGuardroomMaterialsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.GetGuardroomMaterialsRequest)
                return object;
            let message = new $root.shift.GetGuardroomMaterialsRequest();
            if (object.guardroomId != null)
                message.guardroomId = String(object.guardroomId);
            return message;
        };

        /**
         * Creates a plain object from a GetGuardroomMaterialsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.GetGuardroomMaterialsRequest
         * @static
         * @param {shift.GetGuardroomMaterialsRequest} message GetGuardroomMaterialsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGuardroomMaterialsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.guardroomId = "";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                object.guardroomId = message.guardroomId;
            return object;
        };

        /**
         * Converts this GetGuardroomMaterialsRequest to JSON.
         * @function toJSON
         * @memberof shift.GetGuardroomMaterialsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGuardroomMaterialsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGuardroomMaterialsRequest;
    })();

    shift.GetGuardroomMaterialsReply = (function() {

        /**
         * Properties of a GetGuardroomMaterialsReply.
         * @memberof shift
         * @interface IGetGuardroomMaterialsReply
         * @property {Array.<shift.IGuardroomMaterial>|null} [items] GetGuardroomMaterialsReply items
         */

        /**
         * Constructs a new GetGuardroomMaterialsReply.
         * @memberof shift
         * @classdesc Represents a GetGuardroomMaterialsReply.
         * @implements IGetGuardroomMaterialsReply
         * @constructor
         * @param {shift.IGetGuardroomMaterialsReply=} [properties] Properties to set
         */
        function GetGuardroomMaterialsReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGuardroomMaterialsReply items.
         * @member {Array.<shift.IGuardroomMaterial>} items
         * @memberof shift.GetGuardroomMaterialsReply
         * @instance
         */
        GetGuardroomMaterialsReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new GetGuardroomMaterialsReply instance using the specified properties.
         * @function create
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {shift.IGetGuardroomMaterialsReply=} [properties] Properties to set
         * @returns {shift.GetGuardroomMaterialsReply} GetGuardroomMaterialsReply instance
         */
        GetGuardroomMaterialsReply.create = function create(properties) {
            return new GetGuardroomMaterialsReply(properties);
        };

        /**
         * Encodes the specified GetGuardroomMaterialsReply message. Does not implicitly {@link shift.GetGuardroomMaterialsReply.verify|verify} messages.
         * @function encode
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {shift.IGetGuardroomMaterialsReply} message GetGuardroomMaterialsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomMaterialsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.shift.GuardroomMaterial.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGuardroomMaterialsReply message, length delimited. Does not implicitly {@link shift.GetGuardroomMaterialsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {shift.IGetGuardroomMaterialsReply} message GetGuardroomMaterialsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomMaterialsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGuardroomMaterialsReply message from the specified reader or buffer.
         * @function decode
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.GetGuardroomMaterialsReply} GetGuardroomMaterialsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomMaterialsReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.GetGuardroomMaterialsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.shift.GuardroomMaterial.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGuardroomMaterialsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.GetGuardroomMaterialsReply} GetGuardroomMaterialsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomMaterialsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGuardroomMaterialsReply message.
         * @function verify
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGuardroomMaterialsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.shift.GuardroomMaterial.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGuardroomMaterialsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.GetGuardroomMaterialsReply} GetGuardroomMaterialsReply
         */
        GetGuardroomMaterialsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.GetGuardroomMaterialsReply)
                return object;
            let message = new $root.shift.GetGuardroomMaterialsReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".shift.GetGuardroomMaterialsReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".shift.GetGuardroomMaterialsReply.items: object expected");
                    message.items[i] = $root.shift.GuardroomMaterial.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGuardroomMaterialsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.GetGuardroomMaterialsReply
         * @static
         * @param {shift.GetGuardroomMaterialsReply} message GetGuardroomMaterialsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGuardroomMaterialsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.shift.GuardroomMaterial.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGuardroomMaterialsReply to JSON.
         * @function toJSON
         * @memberof shift.GetGuardroomMaterialsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGuardroomMaterialsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGuardroomMaterialsReply;
    })();

    shift.GuardroomMaterial = (function() {

        /**
         * Properties of a GuardroomMaterial.
         * @memberof shift
         * @interface IGuardroomMaterial
         * @property {string|null} [id] GuardroomMaterial id
         * @property {string|null} [name] GuardroomMaterial name
         * @property {string|null} [reference] GuardroomMaterial reference
         * @property {string|null} [materialState] GuardroomMaterial materialState
         * @property {string|null} [comment] GuardroomMaterial comment
         * @property {number|Long|null} [stateDate] GuardroomMaterial stateDate
         */

        /**
         * Constructs a new GuardroomMaterial.
         * @memberof shift
         * @classdesc Represents a GuardroomMaterial.
         * @implements IGuardroomMaterial
         * @constructor
         * @param {shift.IGuardroomMaterial=} [properties] Properties to set
         */
        function GuardroomMaterial(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuardroomMaterial id.
         * @member {string} id
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.id = "";

        /**
         * GuardroomMaterial name.
         * @member {string} name
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.name = "";

        /**
         * GuardroomMaterial reference.
         * @member {string} reference
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.reference = "";

        /**
         * GuardroomMaterial materialState.
         * @member {string} materialState
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.materialState = "";

        /**
         * GuardroomMaterial comment.
         * @member {string} comment
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.comment = "";

        /**
         * GuardroomMaterial stateDate.
         * @member {number|Long} stateDate
         * @memberof shift.GuardroomMaterial
         * @instance
         */
        GuardroomMaterial.prototype.stateDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GuardroomMaterial instance using the specified properties.
         * @function create
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {shift.IGuardroomMaterial=} [properties] Properties to set
         * @returns {shift.GuardroomMaterial} GuardroomMaterial instance
         */
        GuardroomMaterial.create = function create(properties) {
            return new GuardroomMaterial(properties);
        };

        /**
         * Encodes the specified GuardroomMaterial message. Does not implicitly {@link shift.GuardroomMaterial.verify|verify} messages.
         * @function encode
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {shift.IGuardroomMaterial} message GuardroomMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuardroomMaterial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.reference != null && message.hasOwnProperty("reference"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.reference);
            if (message.materialState != null && message.hasOwnProperty("materialState"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.materialState);
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.comment);
            if (message.stateDate != null && message.hasOwnProperty("stateDate"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.stateDate);
            return writer;
        };

        /**
         * Encodes the specified GuardroomMaterial message, length delimited. Does not implicitly {@link shift.GuardroomMaterial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {shift.IGuardroomMaterial} message GuardroomMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuardroomMaterial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuardroomMaterial message from the specified reader or buffer.
         * @function decode
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.GuardroomMaterial} GuardroomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuardroomMaterial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.GuardroomMaterial();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.reference = reader.string();
                    break;
                case 4:
                    message.materialState = reader.string();
                    break;
                case 5:
                    message.comment = reader.string();
                    break;
                case 6:
                    message.stateDate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuardroomMaterial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.GuardroomMaterial} GuardroomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuardroomMaterial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuardroomMaterial message.
         * @function verify
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuardroomMaterial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.reference != null && message.hasOwnProperty("reference"))
                if (!$util.isString(message.reference))
                    return "reference: string expected";
            if (message.materialState != null && message.hasOwnProperty("materialState"))
                if (!$util.isString(message.materialState))
                    return "materialState: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.stateDate != null && message.hasOwnProperty("stateDate"))
                if (!$util.isInteger(message.stateDate) && !(message.stateDate && $util.isInteger(message.stateDate.low) && $util.isInteger(message.stateDate.high)))
                    return "stateDate: integer|Long expected";
            return null;
        };

        /**
         * Creates a GuardroomMaterial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.GuardroomMaterial} GuardroomMaterial
         */
        GuardroomMaterial.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.GuardroomMaterial)
                return object;
            let message = new $root.shift.GuardroomMaterial();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.reference != null)
                message.reference = String(object.reference);
            if (object.materialState != null)
                message.materialState = String(object.materialState);
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.stateDate != null)
                if ($util.Long)
                    (message.stateDate = $util.Long.fromValue(object.stateDate)).unsigned = false;
                else if (typeof object.stateDate === "string")
                    message.stateDate = parseInt(object.stateDate, 10);
                else if (typeof object.stateDate === "number")
                    message.stateDate = object.stateDate;
                else if (typeof object.stateDate === "object")
                    message.stateDate = new $util.LongBits(object.stateDate.low >>> 0, object.stateDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GuardroomMaterial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.GuardroomMaterial
         * @static
         * @param {shift.GuardroomMaterial} message GuardroomMaterial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuardroomMaterial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.reference = "";
                object.materialState = "";
                object.comment = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.stateDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stateDate = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.reference != null && message.hasOwnProperty("reference"))
                object.reference = message.reference;
            if (message.materialState != null && message.hasOwnProperty("materialState"))
                object.materialState = message.materialState;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.stateDate != null && message.hasOwnProperty("stateDate"))
                if (typeof message.stateDate === "number")
                    object.stateDate = options.longs === String ? String(message.stateDate) : message.stateDate;
                else
                    object.stateDate = options.longs === String ? $util.Long.prototype.toString.call(message.stateDate) : options.longs === Number ? new $util.LongBits(message.stateDate.low >>> 0, message.stateDate.high >>> 0).toNumber() : message.stateDate;
            return object;
        };

        /**
         * Converts this GuardroomMaterial to JSON.
         * @function toJSON
         * @memberof shift.GuardroomMaterial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuardroomMaterial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuardroomMaterial;
    })();

    shift.Shift = (function() {

        /**
         * Properties of a Shift.
         * @memberof shift
         * @interface IShift
         * @property {string|null} [shiftId] Shift shiftId
         * @property {string|null} [userId] Shift userId
         * @property {number|Long|null} [startDate] Shift startDate
         * @property {number|Long|null} [endDate] Shift endDate
         * @property {boolean|null} [isStarted] Shift isStarted
         * @property {boolean|null} [isEnded] Shift isEnded
         * @property {number|Long|null} [actualStartDate] Shift actualStartDate
         * @property {number|Long|null} [actualEndDate] Shift actualEndDate
         * @property {boolean|null} [isLocallyCreated] Shift isLocallyCreated
         */

        /**
         * Constructs a new Shift.
         * @memberof shift
         * @classdesc Represents a Shift.
         * @implements IShift
         * @constructor
         * @param {shift.IShift=} [properties] Properties to set
         */
        function Shift(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Shift shiftId.
         * @member {string} shiftId
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.shiftId = "";

        /**
         * Shift userId.
         * @member {string} userId
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.userId = "";

        /**
         * Shift startDate.
         * @member {number|Long} startDate
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.startDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Shift endDate.
         * @member {number|Long} endDate
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.endDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Shift isStarted.
         * @member {boolean} isStarted
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.isStarted = false;

        /**
         * Shift isEnded.
         * @member {boolean} isEnded
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.isEnded = false;

        /**
         * Shift actualStartDate.
         * @member {number|Long} actualStartDate
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.actualStartDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Shift actualEndDate.
         * @member {number|Long} actualEndDate
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.actualEndDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Shift isLocallyCreated.
         * @member {boolean} isLocallyCreated
         * @memberof shift.Shift
         * @instance
         */
        Shift.prototype.isLocallyCreated = false;

        /**
         * Creates a new Shift instance using the specified properties.
         * @function create
         * @memberof shift.Shift
         * @static
         * @param {shift.IShift=} [properties] Properties to set
         * @returns {shift.Shift} Shift instance
         */
        Shift.create = function create(properties) {
            return new Shift(properties);
        };

        /**
         * Encodes the specified Shift message. Does not implicitly {@link shift.Shift.verify|verify} messages.
         * @function encode
         * @memberof shift.Shift
         * @static
         * @param {shift.IShift} message Shift message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Shift.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shiftId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startDate);
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endDate);
            if (message.isStarted != null && message.hasOwnProperty("isStarted"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isStarted);
            if (message.isEnded != null && message.hasOwnProperty("isEnded"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isEnded);
            if (message.actualStartDate != null && message.hasOwnProperty("actualStartDate"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.actualStartDate);
            if (message.actualEndDate != null && message.hasOwnProperty("actualEndDate"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.actualEndDate);
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isLocallyCreated);
            return writer;
        };

        /**
         * Encodes the specified Shift message, length delimited. Does not implicitly {@link shift.Shift.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shift.Shift
         * @static
         * @param {shift.IShift} message Shift message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Shift.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Shift message from the specified reader or buffer.
         * @function decode
         * @memberof shift.Shift
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shift.Shift} Shift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Shift.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shift.Shift();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.shiftId = reader.string();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                case 3:
                    message.startDate = reader.int64();
                    break;
                case 4:
                    message.endDate = reader.int64();
                    break;
                case 5:
                    message.isStarted = reader.bool();
                    break;
                case 6:
                    message.isEnded = reader.bool();
                    break;
                case 7:
                    message.actualStartDate = reader.int64();
                    break;
                case 8:
                    message.actualEndDate = reader.int64();
                    break;
                case 9:
                    message.isLocallyCreated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Shift message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shift.Shift
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shift.Shift} Shift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Shift.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Shift message.
         * @function verify
         * @memberof shift.Shift
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Shift.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                if (!$util.isString(message.shiftId))
                    return "shiftId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (!$util.isInteger(message.startDate) && !(message.startDate && $util.isInteger(message.startDate.low) && $util.isInteger(message.startDate.high)))
                    return "startDate: integer|Long expected";
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isInteger(message.endDate) && !(message.endDate && $util.isInteger(message.endDate.low) && $util.isInteger(message.endDate.high)))
                    return "endDate: integer|Long expected";
            if (message.isStarted != null && message.hasOwnProperty("isStarted"))
                if (typeof message.isStarted !== "boolean")
                    return "isStarted: boolean expected";
            if (message.isEnded != null && message.hasOwnProperty("isEnded"))
                if (typeof message.isEnded !== "boolean")
                    return "isEnded: boolean expected";
            if (message.actualStartDate != null && message.hasOwnProperty("actualStartDate"))
                if (!$util.isInteger(message.actualStartDate) && !(message.actualStartDate && $util.isInteger(message.actualStartDate.low) && $util.isInteger(message.actualStartDate.high)))
                    return "actualStartDate: integer|Long expected";
            if (message.actualEndDate != null && message.hasOwnProperty("actualEndDate"))
                if (!$util.isInteger(message.actualEndDate) && !(message.actualEndDate && $util.isInteger(message.actualEndDate.low) && $util.isInteger(message.actualEndDate.high)))
                    return "actualEndDate: integer|Long expected";
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                if (typeof message.isLocallyCreated !== "boolean")
                    return "isLocallyCreated: boolean expected";
            return null;
        };

        /**
         * Creates a Shift message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shift.Shift
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shift.Shift} Shift
         */
        Shift.fromObject = function fromObject(object) {
            if (object instanceof $root.shift.Shift)
                return object;
            let message = new $root.shift.Shift();
            if (object.shiftId != null)
                message.shiftId = String(object.shiftId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.startDate != null)
                if ($util.Long)
                    (message.startDate = $util.Long.fromValue(object.startDate)).unsigned = false;
                else if (typeof object.startDate === "string")
                    message.startDate = parseInt(object.startDate, 10);
                else if (typeof object.startDate === "number")
                    message.startDate = object.startDate;
                else if (typeof object.startDate === "object")
                    message.startDate = new $util.LongBits(object.startDate.low >>> 0, object.startDate.high >>> 0).toNumber();
            if (object.endDate != null)
                if ($util.Long)
                    (message.endDate = $util.Long.fromValue(object.endDate)).unsigned = false;
                else if (typeof object.endDate === "string")
                    message.endDate = parseInt(object.endDate, 10);
                else if (typeof object.endDate === "number")
                    message.endDate = object.endDate;
                else if (typeof object.endDate === "object")
                    message.endDate = new $util.LongBits(object.endDate.low >>> 0, object.endDate.high >>> 0).toNumber();
            if (object.isStarted != null)
                message.isStarted = Boolean(object.isStarted);
            if (object.isEnded != null)
                message.isEnded = Boolean(object.isEnded);
            if (object.actualStartDate != null)
                if ($util.Long)
                    (message.actualStartDate = $util.Long.fromValue(object.actualStartDate)).unsigned = false;
                else if (typeof object.actualStartDate === "string")
                    message.actualStartDate = parseInt(object.actualStartDate, 10);
                else if (typeof object.actualStartDate === "number")
                    message.actualStartDate = object.actualStartDate;
                else if (typeof object.actualStartDate === "object")
                    message.actualStartDate = new $util.LongBits(object.actualStartDate.low >>> 0, object.actualStartDate.high >>> 0).toNumber();
            if (object.actualEndDate != null)
                if ($util.Long)
                    (message.actualEndDate = $util.Long.fromValue(object.actualEndDate)).unsigned = false;
                else if (typeof object.actualEndDate === "string")
                    message.actualEndDate = parseInt(object.actualEndDate, 10);
                else if (typeof object.actualEndDate === "number")
                    message.actualEndDate = object.actualEndDate;
                else if (typeof object.actualEndDate === "object")
                    message.actualEndDate = new $util.LongBits(object.actualEndDate.low >>> 0, object.actualEndDate.high >>> 0).toNumber();
            if (object.isLocallyCreated != null)
                message.isLocallyCreated = Boolean(object.isLocallyCreated);
            return message;
        };

        /**
         * Creates a plain object from a Shift message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shift.Shift
         * @static
         * @param {shift.Shift} message Shift
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Shift.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.shiftId = "";
                object.userId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.startDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endDate = options.longs === String ? "0" : 0;
                object.isStarted = false;
                object.isEnded = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.actualStartDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.actualStartDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.actualEndDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.actualEndDate = options.longs === String ? "0" : 0;
                object.isLocallyCreated = false;
            }
            if (message.shiftId != null && message.hasOwnProperty("shiftId"))
                object.shiftId = message.shiftId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (typeof message.startDate === "number")
                    object.startDate = options.longs === String ? String(message.startDate) : message.startDate;
                else
                    object.startDate = options.longs === String ? $util.Long.prototype.toString.call(message.startDate) : options.longs === Number ? new $util.LongBits(message.startDate.low >>> 0, message.startDate.high >>> 0).toNumber() : message.startDate;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (typeof message.endDate === "number")
                    object.endDate = options.longs === String ? String(message.endDate) : message.endDate;
                else
                    object.endDate = options.longs === String ? $util.Long.prototype.toString.call(message.endDate) : options.longs === Number ? new $util.LongBits(message.endDate.low >>> 0, message.endDate.high >>> 0).toNumber() : message.endDate;
            if (message.isStarted != null && message.hasOwnProperty("isStarted"))
                object.isStarted = message.isStarted;
            if (message.isEnded != null && message.hasOwnProperty("isEnded"))
                object.isEnded = message.isEnded;
            if (message.actualStartDate != null && message.hasOwnProperty("actualStartDate"))
                if (typeof message.actualStartDate === "number")
                    object.actualStartDate = options.longs === String ? String(message.actualStartDate) : message.actualStartDate;
                else
                    object.actualStartDate = options.longs === String ? $util.Long.prototype.toString.call(message.actualStartDate) : options.longs === Number ? new $util.LongBits(message.actualStartDate.low >>> 0, message.actualStartDate.high >>> 0).toNumber() : message.actualStartDate;
            if (message.actualEndDate != null && message.hasOwnProperty("actualEndDate"))
                if (typeof message.actualEndDate === "number")
                    object.actualEndDate = options.longs === String ? String(message.actualEndDate) : message.actualEndDate;
                else
                    object.actualEndDate = options.longs === String ? $util.Long.prototype.toString.call(message.actualEndDate) : options.longs === Number ? new $util.LongBits(message.actualEndDate.low >>> 0, message.actualEndDate.high >>> 0).toNumber() : message.actualEndDate;
            if (message.isLocallyCreated != null && message.hasOwnProperty("isLocallyCreated"))
                object.isLocallyCreated = message.isLocallyCreated;
            return object;
        };

        /**
         * Converts this Shift to JSON.
         * @function toJSON
         * @memberof shift.Shift
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Shift.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Shift;
    })();

    return shift;
})();

export const site = $root.site = (() => {

    /**
     * Namespace site.
     * @exports site
     * @namespace
     */
    const site = {};

    site.Sites = (function() {

        /**
         * Constructs a new Sites service.
         * @memberof site
         * @classdesc Represents a Sites
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Sites(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Sites.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Sites;

        /**
         * Creates new Sites service using the specified rpc implementation.
         * @function create
         * @memberof site.Sites
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Sites} RPC service. Useful where requests and/or responses are streamed.
         */
        Sites.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link site.Sites#getGuardrooms}.
         * @memberof site.Sites
         * @typedef GetGuardroomsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {site.GetGuardroomsReply} [response] GetGuardroomsReply
         */

        /**
         * Calls GetGuardrooms.
         * @function getGuardrooms
         * @memberof site.Sites
         * @instance
         * @param {site.IGetGuardroomsRequest} request GetGuardroomsRequest message or plain object
         * @param {site.Sites.GetGuardroomsCallback} callback Node-style callback called with the error, if any, and GetGuardroomsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Sites.prototype.getGuardrooms = function getGuardrooms(request, callback) {
            return this.rpcCall(getGuardrooms, $root.site.GetGuardroomsRequest, $root.site.GetGuardroomsReply, request, callback);
        }, "name", { value: "GetGuardrooms" });

        /**
         * Calls GetGuardrooms.
         * @function getGuardrooms
         * @memberof site.Sites
         * @instance
         * @param {site.IGetGuardroomsRequest} request GetGuardroomsRequest message or plain object
         * @returns {Promise<site.GetGuardroomsReply>} Promise
         * @variation 2
         */

        return Sites;
    })();

    site.GetGuardroomsRequest = (function() {

        /**
         * Properties of a GetGuardroomsRequest.
         * @memberof site
         * @interface IGetGuardroomsRequest
         * @property {string|null} [userId] GetGuardroomsRequest userId
         */

        /**
         * Constructs a new GetGuardroomsRequest.
         * @memberof site
         * @classdesc Represents a GetGuardroomsRequest.
         * @implements IGetGuardroomsRequest
         * @constructor
         * @param {site.IGetGuardroomsRequest=} [properties] Properties to set
         */
        function GetGuardroomsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGuardroomsRequest userId.
         * @member {string} userId
         * @memberof site.GetGuardroomsRequest
         * @instance
         */
        GetGuardroomsRequest.prototype.userId = "";

        /**
         * Creates a new GetGuardroomsRequest instance using the specified properties.
         * @function create
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {site.IGetGuardroomsRequest=} [properties] Properties to set
         * @returns {site.GetGuardroomsRequest} GetGuardroomsRequest instance
         */
        GetGuardroomsRequest.create = function create(properties) {
            return new GetGuardroomsRequest(properties);
        };

        /**
         * Encodes the specified GetGuardroomsRequest message. Does not implicitly {@link site.GetGuardroomsRequest.verify|verify} messages.
         * @function encode
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {site.IGetGuardroomsRequest} message GetGuardroomsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetGuardroomsRequest message, length delimited. Does not implicitly {@link site.GetGuardroomsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {site.IGetGuardroomsRequest} message GetGuardroomsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGuardroomsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {site.GetGuardroomsRequest} GetGuardroomsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.site.GetGuardroomsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGuardroomsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {site.GetGuardroomsRequest} GetGuardroomsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGuardroomsRequest message.
         * @function verify
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGuardroomsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a GetGuardroomsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {site.GetGuardroomsRequest} GetGuardroomsRequest
         */
        GetGuardroomsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.site.GetGuardroomsRequest)
                return object;
            let message = new $root.site.GetGuardroomsRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a GetGuardroomsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof site.GetGuardroomsRequest
         * @static
         * @param {site.GetGuardroomsRequest} message GetGuardroomsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGuardroomsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetGuardroomsRequest to JSON.
         * @function toJSON
         * @memberof site.GetGuardroomsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGuardroomsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGuardroomsRequest;
    })();

    site.GetGuardroomsReply = (function() {

        /**
         * Properties of a GetGuardroomsReply.
         * @memberof site
         * @interface IGetGuardroomsReply
         * @property {Array.<site.IGuardroom>|null} [items] GetGuardroomsReply items
         */

        /**
         * Constructs a new GetGuardroomsReply.
         * @memberof site
         * @classdesc Represents a GetGuardroomsReply.
         * @implements IGetGuardroomsReply
         * @constructor
         * @param {site.IGetGuardroomsReply=} [properties] Properties to set
         */
        function GetGuardroomsReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGuardroomsReply items.
         * @member {Array.<site.IGuardroom>} items
         * @memberof site.GetGuardroomsReply
         * @instance
         */
        GetGuardroomsReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new GetGuardroomsReply instance using the specified properties.
         * @function create
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {site.IGetGuardroomsReply=} [properties] Properties to set
         * @returns {site.GetGuardroomsReply} GetGuardroomsReply instance
         */
        GetGuardroomsReply.create = function create(properties) {
            return new GetGuardroomsReply(properties);
        };

        /**
         * Encodes the specified GetGuardroomsReply message. Does not implicitly {@link site.GetGuardroomsReply.verify|verify} messages.
         * @function encode
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {site.IGetGuardroomsReply} message GetGuardroomsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.site.Guardroom.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGuardroomsReply message, length delimited. Does not implicitly {@link site.GetGuardroomsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {site.IGetGuardroomsReply} message GetGuardroomsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGuardroomsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGuardroomsReply message from the specified reader or buffer.
         * @function decode
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {site.GetGuardroomsReply} GetGuardroomsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomsReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.site.GetGuardroomsReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.site.Guardroom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGuardroomsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {site.GetGuardroomsReply} GetGuardroomsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGuardroomsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGuardroomsReply message.
         * @function verify
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGuardroomsReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.site.Guardroom.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGuardroomsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {site.GetGuardroomsReply} GetGuardroomsReply
         */
        GetGuardroomsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.site.GetGuardroomsReply)
                return object;
            let message = new $root.site.GetGuardroomsReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".site.GetGuardroomsReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".site.GetGuardroomsReply.items: object expected");
                    message.items[i] = $root.site.Guardroom.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGuardroomsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof site.GetGuardroomsReply
         * @static
         * @param {site.GetGuardroomsReply} message GetGuardroomsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGuardroomsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.site.Guardroom.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGuardroomsReply to JSON.
         * @function toJSON
         * @memberof site.GetGuardroomsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGuardroomsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGuardroomsReply;
    })();

    site.Guardroom = (function() {

        /**
         * Properties of a Guardroom.
         * @memberof site
         * @interface IGuardroom
         * @property {string|null} [id] Guardroom id
         * @property {string|null} [name] Guardroom name
         */

        /**
         * Constructs a new Guardroom.
         * @memberof site
         * @classdesc Represents a Guardroom.
         * @implements IGuardroom
         * @constructor
         * @param {site.IGuardroom=} [properties] Properties to set
         */
        function Guardroom(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Guardroom id.
         * @member {string} id
         * @memberof site.Guardroom
         * @instance
         */
        Guardroom.prototype.id = "";

        /**
         * Guardroom name.
         * @member {string} name
         * @memberof site.Guardroom
         * @instance
         */
        Guardroom.prototype.name = "";

        /**
         * Creates a new Guardroom instance using the specified properties.
         * @function create
         * @memberof site.Guardroom
         * @static
         * @param {site.IGuardroom=} [properties] Properties to set
         * @returns {site.Guardroom} Guardroom instance
         */
        Guardroom.create = function create(properties) {
            return new Guardroom(properties);
        };

        /**
         * Encodes the specified Guardroom message. Does not implicitly {@link site.Guardroom.verify|verify} messages.
         * @function encode
         * @memberof site.Guardroom
         * @static
         * @param {site.IGuardroom} message Guardroom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guardroom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Guardroom message, length delimited. Does not implicitly {@link site.Guardroom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof site.Guardroom
         * @static
         * @param {site.IGuardroom} message Guardroom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guardroom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Guardroom message from the specified reader or buffer.
         * @function decode
         * @memberof site.Guardroom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {site.Guardroom} Guardroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guardroom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.site.Guardroom();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Guardroom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof site.Guardroom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {site.Guardroom} Guardroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guardroom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Guardroom message.
         * @function verify
         * @memberof site.Guardroom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Guardroom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Guardroom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof site.Guardroom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {site.Guardroom} Guardroom
         */
        Guardroom.fromObject = function fromObject(object) {
            if (object instanceof $root.site.Guardroom)
                return object;
            let message = new $root.site.Guardroom();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Guardroom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof site.Guardroom
         * @static
         * @param {site.Guardroom} message Guardroom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Guardroom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Guardroom to JSON.
         * @function toJSON
         * @memberof site.Guardroom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Guardroom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Guardroom;
    })();

    return site;
})();

export const tour = $root.tour = (() => {

    /**
     * Namespace tour.
     * @exports tour
     * @namespace
     */
    const tour = {};

    tour.Tours = (function() {

        /**
         * Constructs a new Tours service.
         * @memberof tour
         * @classdesc Represents a Tours
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Tours(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Tours.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Tours;

        /**
         * Creates new Tours service using the specified rpc implementation.
         * @function create
         * @memberof tour.Tours
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Tours} RPC service. Useful where requests and/or responses are streamed.
         */
        Tours.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tour.Tours#getTours}.
         * @memberof tour.Tours
         * @typedef GetToursCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tour.GetToursReply} [response] GetToursReply
         */

        /**
         * Calls GetTours.
         * @function getTours
         * @memberof tour.Tours
         * @instance
         * @param {tour.IGetToursRequest} request GetToursRequest message or plain object
         * @param {tour.Tours.GetToursCallback} callback Node-style callback called with the error, if any, and GetToursReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tours.prototype.getTours = function getTours(request, callback) {
            return this.rpcCall(getTours, $root.tour.GetToursRequest, $root.tour.GetToursReply, request, callback);
        }, "name", { value: "GetTours" });

        /**
         * Calls GetTours.
         * @function getTours
         * @memberof tour.Tours
         * @instance
         * @param {tour.IGetToursRequest} request GetToursRequest message or plain object
         * @returns {Promise<tour.GetToursReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tour.Tours#endTour}.
         * @memberof tour.Tours
         * @typedef EndTourCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tour.EndTourReply} [response] EndTourReply
         */

        /**
         * Calls EndTour.
         * @function endTour
         * @memberof tour.Tours
         * @instance
         * @param {tour.IEndTourRequest} request EndTourRequest message or plain object
         * @param {tour.Tours.EndTourCallback} callback Node-style callback called with the error, if any, and EndTourReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tours.prototype.endTour = function endTour(request, callback) {
            return this.rpcCall(endTour, $root.tour.EndTourRequest, $root.tour.EndTourReply, request, callback);
        }, "name", { value: "EndTour" });

        /**
         * Calls EndTour.
         * @function endTour
         * @memberof tour.Tours
         * @instance
         * @param {tour.IEndTourRequest} request EndTourRequest message or plain object
         * @returns {Promise<tour.EndTourReply>} Promise
         * @variation 2
         */

        return Tours;
    })();

    tour.GetToursRequest = (function() {

        /**
         * Properties of a GetToursRequest.
         * @memberof tour
         * @interface IGetToursRequest
         * @property {string|null} [guardroomId] GetToursRequest guardroomId
         */

        /**
         * Constructs a new GetToursRequest.
         * @memberof tour
         * @classdesc Represents a GetToursRequest.
         * @implements IGetToursRequest
         * @constructor
         * @param {tour.IGetToursRequest=} [properties] Properties to set
         */
        function GetToursRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetToursRequest guardroomId.
         * @member {string} guardroomId
         * @memberof tour.GetToursRequest
         * @instance
         */
        GetToursRequest.prototype.guardroomId = "";

        /**
         * Creates a new GetToursRequest instance using the specified properties.
         * @function create
         * @memberof tour.GetToursRequest
         * @static
         * @param {tour.IGetToursRequest=} [properties] Properties to set
         * @returns {tour.GetToursRequest} GetToursRequest instance
         */
        GetToursRequest.create = function create(properties) {
            return new GetToursRequest(properties);
        };

        /**
         * Encodes the specified GetToursRequest message. Does not implicitly {@link tour.GetToursRequest.verify|verify} messages.
         * @function encode
         * @memberof tour.GetToursRequest
         * @static
         * @param {tour.IGetToursRequest} message GetToursRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetToursRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guardroomId);
            return writer;
        };

        /**
         * Encodes the specified GetToursRequest message, length delimited. Does not implicitly {@link tour.GetToursRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.GetToursRequest
         * @static
         * @param {tour.IGetToursRequest} message GetToursRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetToursRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetToursRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tour.GetToursRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.GetToursRequest} GetToursRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetToursRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.GetToursRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guardroomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetToursRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.GetToursRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.GetToursRequest} GetToursRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetToursRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetToursRequest message.
         * @function verify
         * @memberof tour.GetToursRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetToursRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                if (!$util.isString(message.guardroomId))
                    return "guardroomId: string expected";
            return null;
        };

        /**
         * Creates a GetToursRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.GetToursRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.GetToursRequest} GetToursRequest
         */
        GetToursRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.GetToursRequest)
                return object;
            let message = new $root.tour.GetToursRequest();
            if (object.guardroomId != null)
                message.guardroomId = String(object.guardroomId);
            return message;
        };

        /**
         * Creates a plain object from a GetToursRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.GetToursRequest
         * @static
         * @param {tour.GetToursRequest} message GetToursRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetToursRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.guardroomId = "";
            if (message.guardroomId != null && message.hasOwnProperty("guardroomId"))
                object.guardroomId = message.guardroomId;
            return object;
        };

        /**
         * Converts this GetToursRequest to JSON.
         * @function toJSON
         * @memberof tour.GetToursRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetToursRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetToursRequest;
    })();

    tour.GetToursReply = (function() {

        /**
         * Properties of a GetToursReply.
         * @memberof tour
         * @interface IGetToursReply
         * @property {Array.<tour.ITour>|null} [items] GetToursReply items
         */

        /**
         * Constructs a new GetToursReply.
         * @memberof tour
         * @classdesc Represents a GetToursReply.
         * @implements IGetToursReply
         * @constructor
         * @param {tour.IGetToursReply=} [properties] Properties to set
         */
        function GetToursReply(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetToursReply items.
         * @member {Array.<tour.ITour>} items
         * @memberof tour.GetToursReply
         * @instance
         */
        GetToursReply.prototype.items = $util.emptyArray;

        /**
         * Creates a new GetToursReply instance using the specified properties.
         * @function create
         * @memberof tour.GetToursReply
         * @static
         * @param {tour.IGetToursReply=} [properties] Properties to set
         * @returns {tour.GetToursReply} GetToursReply instance
         */
        GetToursReply.create = function create(properties) {
            return new GetToursReply(properties);
        };

        /**
         * Encodes the specified GetToursReply message. Does not implicitly {@link tour.GetToursReply.verify|verify} messages.
         * @function encode
         * @memberof tour.GetToursReply
         * @static
         * @param {tour.IGetToursReply} message GetToursReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetToursReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.tour.Tour.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetToursReply message, length delimited. Does not implicitly {@link tour.GetToursReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.GetToursReply
         * @static
         * @param {tour.IGetToursReply} message GetToursReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetToursReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetToursReply message from the specified reader or buffer.
         * @function decode
         * @memberof tour.GetToursReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.GetToursReply} GetToursReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetToursReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.GetToursReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.tour.Tour.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetToursReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.GetToursReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.GetToursReply} GetToursReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetToursReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetToursReply message.
         * @function verify
         * @memberof tour.GetToursReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetToursReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.tour.Tour.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetToursReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.GetToursReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.GetToursReply} GetToursReply
         */
        GetToursReply.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.GetToursReply)
                return object;
            let message = new $root.tour.GetToursReply();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".tour.GetToursReply.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".tour.GetToursReply.items: object expected");
                    message.items[i] = $root.tour.Tour.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetToursReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.GetToursReply
         * @static
         * @param {tour.GetToursReply} message GetToursReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetToursReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.tour.Tour.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this GetToursReply to JSON.
         * @function toJSON
         * @memberof tour.GetToursReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetToursReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetToursReply;
    })();

    tour.EndTourRequest = (function() {

        /**
         * Properties of an EndTourRequest.
         * @memberof tour
         * @interface IEndTourRequest
         * @property {string|null} [userId] EndTourRequest userId
         * @property {string|null} [tourId] EndTourRequest tourId
         * @property {Array.<tour.ITourCheckpoint>|null} [checkpoints] EndTourRequest checkpoints
         * @property {number|Long|null} [endDate] EndTourRequest endDate
         */

        /**
         * Constructs a new EndTourRequest.
         * @memberof tour
         * @classdesc Represents an EndTourRequest.
         * @implements IEndTourRequest
         * @constructor
         * @param {tour.IEndTourRequest=} [properties] Properties to set
         */
        function EndTourRequest(properties) {
            this.checkpoints = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndTourRequest userId.
         * @member {string} userId
         * @memberof tour.EndTourRequest
         * @instance
         */
        EndTourRequest.prototype.userId = "";

        /**
         * EndTourRequest tourId.
         * @member {string} tourId
         * @memberof tour.EndTourRequest
         * @instance
         */
        EndTourRequest.prototype.tourId = "";

        /**
         * EndTourRequest checkpoints.
         * @member {Array.<tour.ITourCheckpoint>} checkpoints
         * @memberof tour.EndTourRequest
         * @instance
         */
        EndTourRequest.prototype.checkpoints = $util.emptyArray;

        /**
         * EndTourRequest endDate.
         * @member {number|Long} endDate
         * @memberof tour.EndTourRequest
         * @instance
         */
        EndTourRequest.prototype.endDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new EndTourRequest instance using the specified properties.
         * @function create
         * @memberof tour.EndTourRequest
         * @static
         * @param {tour.IEndTourRequest=} [properties] Properties to set
         * @returns {tour.EndTourRequest} EndTourRequest instance
         */
        EndTourRequest.create = function create(properties) {
            return new EndTourRequest(properties);
        };

        /**
         * Encodes the specified EndTourRequest message. Does not implicitly {@link tour.EndTourRequest.verify|verify} messages.
         * @function encode
         * @memberof tour.EndTourRequest
         * @static
         * @param {tour.IEndTourRequest} message EndTourRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndTourRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.tourId != null && message.hasOwnProperty("tourId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tourId);
            if (message.checkpoints != null && message.checkpoints.length)
                for (let i = 0; i < message.checkpoints.length; ++i)
                    $root.tour.TourCheckpoint.encode(message.checkpoints[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endDate);
            return writer;
        };

        /**
         * Encodes the specified EndTourRequest message, length delimited. Does not implicitly {@link tour.EndTourRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.EndTourRequest
         * @static
         * @param {tour.IEndTourRequest} message EndTourRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndTourRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndTourRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tour.EndTourRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.EndTourRequest} EndTourRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndTourRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.EndTourRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.tourId = reader.string();
                    break;
                case 3:
                    if (!(message.checkpoints && message.checkpoints.length))
                        message.checkpoints = [];
                    message.checkpoints.push($root.tour.TourCheckpoint.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endDate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EndTourRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.EndTourRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.EndTourRequest} EndTourRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndTourRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndTourRequest message.
         * @function verify
         * @memberof tour.EndTourRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndTourRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.tourId != null && message.hasOwnProperty("tourId"))
                if (!$util.isString(message.tourId))
                    return "tourId: string expected";
            if (message.checkpoints != null && message.hasOwnProperty("checkpoints")) {
                if (!Array.isArray(message.checkpoints))
                    return "checkpoints: array expected";
                for (let i = 0; i < message.checkpoints.length; ++i) {
                    let error = $root.tour.TourCheckpoint.verify(message.checkpoints[i]);
                    if (error)
                        return "checkpoints." + error;
                }
            }
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isInteger(message.endDate) && !(message.endDate && $util.isInteger(message.endDate.low) && $util.isInteger(message.endDate.high)))
                    return "endDate: integer|Long expected";
            return null;
        };

        /**
         * Creates an EndTourRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.EndTourRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.EndTourRequest} EndTourRequest
         */
        EndTourRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.EndTourRequest)
                return object;
            let message = new $root.tour.EndTourRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.tourId != null)
                message.tourId = String(object.tourId);
            if (object.checkpoints) {
                if (!Array.isArray(object.checkpoints))
                    throw TypeError(".tour.EndTourRequest.checkpoints: array expected");
                message.checkpoints = [];
                for (let i = 0; i < object.checkpoints.length; ++i) {
                    if (typeof object.checkpoints[i] !== "object")
                        throw TypeError(".tour.EndTourRequest.checkpoints: object expected");
                    message.checkpoints[i] = $root.tour.TourCheckpoint.fromObject(object.checkpoints[i]);
                }
            }
            if (object.endDate != null)
                if ($util.Long)
                    (message.endDate = $util.Long.fromValue(object.endDate)).unsigned = false;
                else if (typeof object.endDate === "string")
                    message.endDate = parseInt(object.endDate, 10);
                else if (typeof object.endDate === "number")
                    message.endDate = object.endDate;
                else if (typeof object.endDate === "object")
                    message.endDate = new $util.LongBits(object.endDate.low >>> 0, object.endDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EndTourRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.EndTourRequest
         * @static
         * @param {tour.EndTourRequest} message EndTourRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndTourRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.checkpoints = [];
            if (options.defaults) {
                object.userId = "";
                object.tourId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endDate = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.tourId != null && message.hasOwnProperty("tourId"))
                object.tourId = message.tourId;
            if (message.checkpoints && message.checkpoints.length) {
                object.checkpoints = [];
                for (let j = 0; j < message.checkpoints.length; ++j)
                    object.checkpoints[j] = $root.tour.TourCheckpoint.toObject(message.checkpoints[j], options);
            }
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (typeof message.endDate === "number")
                    object.endDate = options.longs === String ? String(message.endDate) : message.endDate;
                else
                    object.endDate = options.longs === String ? $util.Long.prototype.toString.call(message.endDate) : options.longs === Number ? new $util.LongBits(message.endDate.low >>> 0, message.endDate.high >>> 0).toNumber() : message.endDate;
            return object;
        };

        /**
         * Converts this EndTourRequest to JSON.
         * @function toJSON
         * @memberof tour.EndTourRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndTourRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EndTourRequest;
    })();

    tour.EndTourReply = (function() {

        /**
         * Properties of an EndTourReply.
         * @memberof tour
         * @interface IEndTourReply
         */

        /**
         * Constructs a new EndTourReply.
         * @memberof tour
         * @classdesc Represents an EndTourReply.
         * @implements IEndTourReply
         * @constructor
         * @param {tour.IEndTourReply=} [properties] Properties to set
         */
        function EndTourReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EndTourReply instance using the specified properties.
         * @function create
         * @memberof tour.EndTourReply
         * @static
         * @param {tour.IEndTourReply=} [properties] Properties to set
         * @returns {tour.EndTourReply} EndTourReply instance
         */
        EndTourReply.create = function create(properties) {
            return new EndTourReply(properties);
        };

        /**
         * Encodes the specified EndTourReply message. Does not implicitly {@link tour.EndTourReply.verify|verify} messages.
         * @function encode
         * @memberof tour.EndTourReply
         * @static
         * @param {tour.IEndTourReply} message EndTourReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndTourReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EndTourReply message, length delimited. Does not implicitly {@link tour.EndTourReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.EndTourReply
         * @static
         * @param {tour.IEndTourReply} message EndTourReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndTourReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndTourReply message from the specified reader or buffer.
         * @function decode
         * @memberof tour.EndTourReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.EndTourReply} EndTourReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndTourReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.EndTourReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EndTourReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.EndTourReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.EndTourReply} EndTourReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndTourReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndTourReply message.
         * @function verify
         * @memberof tour.EndTourReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndTourReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EndTourReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.EndTourReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.EndTourReply} EndTourReply
         */
        EndTourReply.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.EndTourReply)
                return object;
            return new $root.tour.EndTourReply();
        };

        /**
         * Creates a plain object from an EndTourReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.EndTourReply
         * @static
         * @param {tour.EndTourReply} message EndTourReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndTourReply.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EndTourReply to JSON.
         * @function toJSON
         * @memberof tour.EndTourReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndTourReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EndTourReply;
    })();

    tour.Tour = (function() {

        /**
         * Properties of a Tour.
         * @memberof tour
         * @interface ITour
         * @property {string|null} [id] Tour id
         * @property {string|null} [name] Tour name
         * @property {string|null} [type] Tour type
         * @property {string|null} [duration] Tour duration
         * @property {string|null} [description] Tour description
         * @property {Array.<tour.ITourCheckpoint>|null} [checkpoints] Tour checkpoints
         * @property {number|null} [requiredCheckpointsCount] Tour requiredCheckpointsCount
         * @property {string|null} [missingTagsExplanation] Tour missingTagsExplanation
         */

        /**
         * Constructs a new Tour.
         * @memberof tour
         * @classdesc Represents a Tour.
         * @implements ITour
         * @constructor
         * @param {tour.ITour=} [properties] Properties to set
         */
        function Tour(properties) {
            this.checkpoints = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tour id.
         * @member {string} id
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.id = "";

        /**
         * Tour name.
         * @member {string} name
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.name = "";

        /**
         * Tour type.
         * @member {string} type
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.type = "";

        /**
         * Tour duration.
         * @member {string} duration
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.duration = "";

        /**
         * Tour description.
         * @member {string} description
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.description = "";

        /**
         * Tour checkpoints.
         * @member {Array.<tour.ITourCheckpoint>} checkpoints
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.checkpoints = $util.emptyArray;

        /**
         * Tour requiredCheckpointsCount.
         * @member {number} requiredCheckpointsCount
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.requiredCheckpointsCount = 0;

        /**
         * Tour missingTagsExplanation.
         * @member {string} missingTagsExplanation
         * @memberof tour.Tour
         * @instance
         */
        Tour.prototype.missingTagsExplanation = "";

        /**
         * Creates a new Tour instance using the specified properties.
         * @function create
         * @memberof tour.Tour
         * @static
         * @param {tour.ITour=} [properties] Properties to set
         * @returns {tour.Tour} Tour instance
         */
        Tour.create = function create(properties) {
            return new Tour(properties);
        };

        /**
         * Encodes the specified Tour message. Does not implicitly {@link tour.Tour.verify|verify} messages.
         * @function encode
         * @memberof tour.Tour
         * @static
         * @param {tour.ITour} message Tour message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tour.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.duration);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.checkpoints != null && message.checkpoints.length)
                for (let i = 0; i < message.checkpoints.length; ++i)
                    $root.tour.TourCheckpoint.encode(message.checkpoints[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.requiredCheckpointsCount != null && message.hasOwnProperty("requiredCheckpointsCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.requiredCheckpointsCount);
            if (message.missingTagsExplanation != null && message.hasOwnProperty("missingTagsExplanation"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.missingTagsExplanation);
            return writer;
        };

        /**
         * Encodes the specified Tour message, length delimited. Does not implicitly {@link tour.Tour.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.Tour
         * @static
         * @param {tour.ITour} message Tour message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tour.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tour message from the specified reader or buffer.
         * @function decode
         * @memberof tour.Tour
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.Tour} Tour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tour.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.Tour();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.duration = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    if (!(message.checkpoints && message.checkpoints.length))
                        message.checkpoints = [];
                    message.checkpoints.push($root.tour.TourCheckpoint.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requiredCheckpointsCount = reader.int32();
                    break;
                case 8:
                    message.missingTagsExplanation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tour message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.Tour
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.Tour} Tour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tour.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tour message.
         * @function verify
         * @memberof tour.Tour
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tour.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isString(message.duration))
                    return "duration: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.checkpoints != null && message.hasOwnProperty("checkpoints")) {
                if (!Array.isArray(message.checkpoints))
                    return "checkpoints: array expected";
                for (let i = 0; i < message.checkpoints.length; ++i) {
                    let error = $root.tour.TourCheckpoint.verify(message.checkpoints[i]);
                    if (error)
                        return "checkpoints." + error;
                }
            }
            if (message.requiredCheckpointsCount != null && message.hasOwnProperty("requiredCheckpointsCount"))
                if (!$util.isInteger(message.requiredCheckpointsCount))
                    return "requiredCheckpointsCount: integer expected";
            if (message.missingTagsExplanation != null && message.hasOwnProperty("missingTagsExplanation"))
                if (!$util.isString(message.missingTagsExplanation))
                    return "missingTagsExplanation: string expected";
            return null;
        };

        /**
         * Creates a Tour message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.Tour
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.Tour} Tour
         */
        Tour.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.Tour)
                return object;
            let message = new $root.tour.Tour();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.duration != null)
                message.duration = String(object.duration);
            if (object.description != null)
                message.description = String(object.description);
            if (object.checkpoints) {
                if (!Array.isArray(object.checkpoints))
                    throw TypeError(".tour.Tour.checkpoints: array expected");
                message.checkpoints = [];
                for (let i = 0; i < object.checkpoints.length; ++i) {
                    if (typeof object.checkpoints[i] !== "object")
                        throw TypeError(".tour.Tour.checkpoints: object expected");
                    message.checkpoints[i] = $root.tour.TourCheckpoint.fromObject(object.checkpoints[i]);
                }
            }
            if (object.requiredCheckpointsCount != null)
                message.requiredCheckpointsCount = object.requiredCheckpointsCount | 0;
            if (object.missingTagsExplanation != null)
                message.missingTagsExplanation = String(object.missingTagsExplanation);
            return message;
        };

        /**
         * Creates a plain object from a Tour message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.Tour
         * @static
         * @param {tour.Tour} message Tour
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tour.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.checkpoints = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = "";
                object.duration = "";
                object.description = "";
                object.requiredCheckpointsCount = 0;
                object.missingTagsExplanation = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.checkpoints && message.checkpoints.length) {
                object.checkpoints = [];
                for (let j = 0; j < message.checkpoints.length; ++j)
                    object.checkpoints[j] = $root.tour.TourCheckpoint.toObject(message.checkpoints[j], options);
            }
            if (message.requiredCheckpointsCount != null && message.hasOwnProperty("requiredCheckpointsCount"))
                object.requiredCheckpointsCount = message.requiredCheckpointsCount;
            if (message.missingTagsExplanation != null && message.hasOwnProperty("missingTagsExplanation"))
                object.missingTagsExplanation = message.missingTagsExplanation;
            return object;
        };

        /**
         * Converts this Tour to JSON.
         * @function toJSON
         * @memberof tour.Tour
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tour.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tour;
    })();

    tour.TourCheckpoint = (function() {

        /**
         * Properties of a TourCheckpoint.
         * @memberof tour
         * @interface ITourCheckpoint
         * @property {string|null} [id] TourCheckpoint id
         * @property {string|null} [name] TourCheckpoint name
         * @property {string|null} [description] TourCheckpoint description
         * @property {string|null} [technology] TourCheckpoint technology
         * @property {string|null} [tagValue] TourCheckpoint tagValue
         * @property {string|null} [pictureUri] TourCheckpoint pictureUri
         * @property {string|null} [videoUrl] TourCheckpoint videoUrl
         * @property {string|null} [comments] TourCheckpoint comments
         * @property {boolean|null} [isMarked] TourCheckpoint isMarked
         * @property {number|Long|null} [markedDate] TourCheckpoint markedDate
         */

        /**
         * Constructs a new TourCheckpoint.
         * @memberof tour
         * @classdesc Represents a TourCheckpoint.
         * @implements ITourCheckpoint
         * @constructor
         * @param {tour.ITourCheckpoint=} [properties] Properties to set
         */
        function TourCheckpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TourCheckpoint id.
         * @member {string} id
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.id = "";

        /**
         * TourCheckpoint name.
         * @member {string} name
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.name = "";

        /**
         * TourCheckpoint description.
         * @member {string} description
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.description = "";

        /**
         * TourCheckpoint technology.
         * @member {string} technology
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.technology = "";

        /**
         * TourCheckpoint tagValue.
         * @member {string} tagValue
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.tagValue = "";

        /**
         * TourCheckpoint pictureUri.
         * @member {string} pictureUri
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.pictureUri = "";

        /**
         * TourCheckpoint videoUrl.
         * @member {string} videoUrl
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.videoUrl = "";

        /**
         * TourCheckpoint comments.
         * @member {string} comments
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.comments = "";

        /**
         * TourCheckpoint isMarked.
         * @member {boolean} isMarked
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.isMarked = false;

        /**
         * TourCheckpoint markedDate.
         * @member {number|Long} markedDate
         * @memberof tour.TourCheckpoint
         * @instance
         */
        TourCheckpoint.prototype.markedDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TourCheckpoint instance using the specified properties.
         * @function create
         * @memberof tour.TourCheckpoint
         * @static
         * @param {tour.ITourCheckpoint=} [properties] Properties to set
         * @returns {tour.TourCheckpoint} TourCheckpoint instance
         */
        TourCheckpoint.create = function create(properties) {
            return new TourCheckpoint(properties);
        };

        /**
         * Encodes the specified TourCheckpoint message. Does not implicitly {@link tour.TourCheckpoint.verify|verify} messages.
         * @function encode
         * @memberof tour.TourCheckpoint
         * @static
         * @param {tour.ITourCheckpoint} message TourCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TourCheckpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.technology != null && message.hasOwnProperty("technology"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.technology);
            if (message.tagValue != null && message.hasOwnProperty("tagValue"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tagValue);
            if (message.pictureUri != null && message.hasOwnProperty("pictureUri"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.pictureUri);
            if (message.videoUrl != null && message.hasOwnProperty("videoUrl"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.videoUrl);
            if (message.comments != null && message.hasOwnProperty("comments"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.comments);
            if (message.isMarked != null && message.hasOwnProperty("isMarked"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isMarked);
            if (message.markedDate != null && message.hasOwnProperty("markedDate"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.markedDate);
            return writer;
        };

        /**
         * Encodes the specified TourCheckpoint message, length delimited. Does not implicitly {@link tour.TourCheckpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tour.TourCheckpoint
         * @static
         * @param {tour.ITourCheckpoint} message TourCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TourCheckpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TourCheckpoint message from the specified reader or buffer.
         * @function decode
         * @memberof tour.TourCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tour.TourCheckpoint} TourCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TourCheckpoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tour.TourCheckpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.technology = reader.string();
                    break;
                case 5:
                    message.tagValue = reader.string();
                    break;
                case 6:
                    message.pictureUri = reader.string();
                    break;
                case 7:
                    message.videoUrl = reader.string();
                    break;
                case 8:
                    message.comments = reader.string();
                    break;
                case 9:
                    message.isMarked = reader.bool();
                    break;
                case 10:
                    message.markedDate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TourCheckpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tour.TourCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tour.TourCheckpoint} TourCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TourCheckpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TourCheckpoint message.
         * @function verify
         * @memberof tour.TourCheckpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TourCheckpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.technology != null && message.hasOwnProperty("technology"))
                if (!$util.isString(message.technology))
                    return "technology: string expected";
            if (message.tagValue != null && message.hasOwnProperty("tagValue"))
                if (!$util.isString(message.tagValue))
                    return "tagValue: string expected";
            if (message.pictureUri != null && message.hasOwnProperty("pictureUri"))
                if (!$util.isString(message.pictureUri))
                    return "pictureUri: string expected";
            if (message.videoUrl != null && message.hasOwnProperty("videoUrl"))
                if (!$util.isString(message.videoUrl))
                    return "videoUrl: string expected";
            if (message.comments != null && message.hasOwnProperty("comments"))
                if (!$util.isString(message.comments))
                    return "comments: string expected";
            if (message.isMarked != null && message.hasOwnProperty("isMarked"))
                if (typeof message.isMarked !== "boolean")
                    return "isMarked: boolean expected";
            if (message.markedDate != null && message.hasOwnProperty("markedDate"))
                if (!$util.isInteger(message.markedDate) && !(message.markedDate && $util.isInteger(message.markedDate.low) && $util.isInteger(message.markedDate.high)))
                    return "markedDate: integer|Long expected";
            return null;
        };

        /**
         * Creates a TourCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tour.TourCheckpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tour.TourCheckpoint} TourCheckpoint
         */
        TourCheckpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.tour.TourCheckpoint)
                return object;
            let message = new $root.tour.TourCheckpoint();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.technology != null)
                message.technology = String(object.technology);
            if (object.tagValue != null)
                message.tagValue = String(object.tagValue);
            if (object.pictureUri != null)
                message.pictureUri = String(object.pictureUri);
            if (object.videoUrl != null)
                message.videoUrl = String(object.videoUrl);
            if (object.comments != null)
                message.comments = String(object.comments);
            if (object.isMarked != null)
                message.isMarked = Boolean(object.isMarked);
            if (object.markedDate != null)
                if ($util.Long)
                    (message.markedDate = $util.Long.fromValue(object.markedDate)).unsigned = false;
                else if (typeof object.markedDate === "string")
                    message.markedDate = parseInt(object.markedDate, 10);
                else if (typeof object.markedDate === "number")
                    message.markedDate = object.markedDate;
                else if (typeof object.markedDate === "object")
                    message.markedDate = new $util.LongBits(object.markedDate.low >>> 0, object.markedDate.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TourCheckpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tour.TourCheckpoint
         * @static
         * @param {tour.TourCheckpoint} message TourCheckpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TourCheckpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.description = "";
                object.technology = "";
                object.tagValue = "";
                object.pictureUri = "";
                object.videoUrl = "";
                object.comments = "";
                object.isMarked = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.markedDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.markedDate = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.technology != null && message.hasOwnProperty("technology"))
                object.technology = message.technology;
            if (message.tagValue != null && message.hasOwnProperty("tagValue"))
                object.tagValue = message.tagValue;
            if (message.pictureUri != null && message.hasOwnProperty("pictureUri"))
                object.pictureUri = message.pictureUri;
            if (message.videoUrl != null && message.hasOwnProperty("videoUrl"))
                object.videoUrl = message.videoUrl;
            if (message.comments != null && message.hasOwnProperty("comments"))
                object.comments = message.comments;
            if (message.isMarked != null && message.hasOwnProperty("isMarked"))
                object.isMarked = message.isMarked;
            if (message.markedDate != null && message.hasOwnProperty("markedDate"))
                if (typeof message.markedDate === "number")
                    object.markedDate = options.longs === String ? String(message.markedDate) : message.markedDate;
                else
                    object.markedDate = options.longs === String ? $util.Long.prototype.toString.call(message.markedDate) : options.longs === Number ? new $util.LongBits(message.markedDate.low >>> 0, message.markedDate.high >>> 0).toNumber() : message.markedDate;
            return object;
        };

        /**
         * Converts this TourCheckpoint to JSON.
         * @function toJSON
         * @memberof tour.TourCheckpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TourCheckpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TourCheckpoint;
    })();

    return tour;
})();

export { $root as default };
