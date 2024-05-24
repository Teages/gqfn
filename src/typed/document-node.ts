import type {
  DocumentTypeDecoration,
} from '@graphql-typed-document-node/core'
import type {
  TypedQueryDocumentNode as GraphqlTypedDocumentNode,
} from 'graphql'

export interface TypedQueryDocumentNode<
  TResult = Record<string, any>,
  TVariables = Record<string, any>,
> extends DocumentTypeDecoration<TResult, TVariables>,
  GraphqlTypedDocumentNode<TResult, TVariables> {}

export type {
  ResultOf,
  VariablesOf,
} from '@graphql-typed-document-node/core'
