/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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

export { $root as default };
