# Typed Document Node

New to typed document node? Read this article by Dotan Simha: [TypedDocumentNode: the next generation of GraphQL and TypeScript](https://the-guild.dev/blog/typed-document-node)

> TypedDocumentNode is a development tool for creating fully typed DocumentNode objects. It means that just by passing the GraphQL query/mutation/subscription/fragment to a supporting GraphQL client library, you’ll get fully-typed result and variables objects.

This library use Typed Document Node to provide type safety for your GraphQL queries, mutations, and subscriptions.

## Type Definition

Different with `@graphql-typed-document-node/core`, we make a wrapper of it and make it compatible with `TypedQueryDocumentNode` from `graphql`.

```ts
import type {
  DocumentTypeDecoration,
} from '@graphql-typed-document-node/core'
import type {
  TypedQueryDocumentNode as GraphqlTypedDocumentNode,
} from 'graphql'

export type {
  ResultOf,
  VariablesOf,
} from '@graphql-typed-document-node/core'

export interface TypedQueryDocumentNode<
  TResult = Record<string, any>,
  TVariables = Record<string, any>,
> extends DocumentTypeDecoration<TResult, TVariables>,
  GraphqlTypedDocumentNode<TResult, TVariables> {}
```
