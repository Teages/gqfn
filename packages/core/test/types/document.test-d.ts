import type { TypedDocumentNode as GraphqlTypedDocumentNode } from '@graphql-typed-document-node/core'
import type { TypedQueryDocumentNode } from 'graphql'
import type { TypedDocumentNode } from '../../src/types/document'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/document', () => {
  test('TypedDocumentNode', () => {
    expectTypeOf<TypedQueryDocumentNode<{ res: 'hello' }, { arg: 'world' }>>()
      .toMatchTypeOf<TypedDocumentNode<{ res: 'hello' }, { arg: 'world' }>>()

    expectTypeOf<GraphqlTypedDocumentNode<{ res: 'hello' }, { arg: 'world' }>>()
      .toMatchTypeOf<TypedDocumentNode<{ res: 'hello' }, { arg: 'world' }>>()
  })
})
