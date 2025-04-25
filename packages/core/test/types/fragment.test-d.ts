import type { ResultOf, VariablesOf } from '../../src/types'
import type { GraphQueryFunctionFragment } from '../../src/types/fragment'
import type { Schema } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/fragment', () => {
  test('GraphQueryFunctionFragment', () => {
    const schema: {
      fragment: GraphQueryFunctionFragment<Schema>
    } = null as any

    const _i0 = schema.fragment(
      'fragment Hello',
      'on Query',
      { name: 'String!' },
      ['__typename'],
    )
    expectTypeOf<ResultOf<typeof _i0>>().toEqualTypeOf<{ __typename: 'Query' }>()
    expectTypeOf<VariablesOf<typeof _i0>>().toEqualTypeOf<{ name: string }>()

    const _i1 = schema.fragment(
      'fragment Hello',
      'on User',
      { name: 'String' },
      ['__typename', { name: true }],
    )
    expectTypeOf<ResultOf<typeof _i1>>().toEqualTypeOf<{ __typename: 'User', name: string }>()
    expectTypeOf<VariablesOf<typeof _i1>>().toEqualTypeOf<{ name?: string | null | undefined }>()
  })
})
