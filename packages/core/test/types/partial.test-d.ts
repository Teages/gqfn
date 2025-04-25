import { ResultOf, VariablesOf } from '../../src'
import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { GraphQueryFunctionPartial, OperationPartial } from '../../src/types/partial'
import type { PrepareVariables } from '../../src/types/variable'
import type { Schema, Type_Query, Type_User } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/partial', () => {
  test('GraphQueryFunctionPartial', () => {
    const schema: {
      gqfn: GraphQueryFunctionCore<Schema>
      partial: GraphQueryFunctionPartial<Schema>
    } = null as any

    const _i0 = schema.partial(
      'fragment Hello',
      'on Query',
      { name: 'String!' },
      ['__typename'],
    )
    expectTypeOf<typeof _i0>().toEqualTypeOf<OperationPartial<
      Type_Query,
      { __typename: true },
      PrepareVariables<{ name: 'String!' }>
    >>()
    const _i0_res = schema.gqfn('query GetHello', { name: 'String! = "world"' }, [{
      '...': $ => $([{ ..._i0($) }])
    }])
    expectTypeOf<ResultOf<typeof _i0_res>>().toEqualTypeOf<{ __typename: 'Query' }>()
    expectTypeOf<VariablesOf<typeof _i0_res>>().toEqualTypeOf<{ name?: string | undefined }>()

    const _i1 = schema.partial(
      'fragment Hello',
      'on User',
      { name: 'String' },
      ['__typename', { name: true }],
    )
    expectTypeOf<typeof _i1>().toEqualTypeOf<OperationPartial<
      Type_User,
      { __typename: true, name: true },
      PrepareVariables<{ name: 'String' }>
    >>()
  })
})
