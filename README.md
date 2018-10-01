# React Native gRPC Starter

This is a starter template for gRPC and React Native. It contains backend (Golang) and mobile (React Native) folders.

## How it works

1. Protobuf.js is used for generating proto types and services. [See here](https://github.com/trackforce/react-native-grpc-starter/blob/master/mobile/src/services/grpc/grpcCore.ts#L58)
2. Communication with native is done by passing binary as base64 string (React Native doesn't support TypedArray).
3. For iOS SwiftGrpc is used to actually make network calls. It uses low level SwiftGrpc API. [See here](https://github.com/trackforce/react-native-grpc-starter/blob/master/mobile/ios/grpc/GrpcNative.swift#L3).
4. For android SwiftJava should be implemented the same way at some point. (PR is welcome).

## Features

- [x] Protobuf.js support with Typescript.
- [x] Unary calls.
- [x] Unary middlewares.
- [x] Server, Client, Bidirectional streaming.
- [x] Low level native gRPC Swift implementation.
- [ ] Low level native gRPC Java implementation.

## Run

1. Start gRPC backend
```
cd backend
make container
make start
```

2. Start React Native app
```
cd mobile
yarn run-ios
```

![alt text](https://github.com/trackforce/react-native-grpc-starter/blob/master/demo.png)
