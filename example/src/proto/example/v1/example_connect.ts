// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts,import_extension=none"
// @generated from file example/v1/example.proto (package example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {MethodKind} from '@bufbuild/protobuf'
import {
  HelloBiDiStreamRequest,
  HelloBiDiStreamResponse,
  HelloClientStreamRequest,
  HelloClientStreamResponse,
  HelloServerStreamRequest,
  HelloServerStreamResponse,
  HelloUnaryRequest,
  HelloUnaryResponse,
} from './example_pb'

/**
 * @generated from service example.v1.ExampleService
 */
export const ExampleService = {
  typeName: 'example.v1.ExampleService',
  methods: {
    /**
     * @generated from rpc example.v1.ExampleService.HelloUnary
     */
    helloUnary: {
      name: 'HelloUnary',
      I: HelloUnaryRequest,
      O: HelloUnaryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc example.v1.ExampleService.HelloClientStream
     */
    helloClientStream: {
      name: 'HelloClientStream',
      I: HelloClientStreamRequest,
      O: HelloClientStreamResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc example.v1.ExampleService.HelloServerStream
     */
    helloServerStream: {
      name: 'HelloServerStream',
      I: HelloServerStreamRequest,
      O: HelloServerStreamResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc example.v1.ExampleService.HelloBiDiStream
     */
    helloBiDiStream: {
      name: 'HelloBiDiStream',
      I: HelloBiDiStreamRequest,
      O: HelloBiDiStreamResponse,
      kind: MethodKind.BiDiStreaming,
    },
  },
} as const