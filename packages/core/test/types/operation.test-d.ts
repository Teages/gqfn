import type { ResultOf, VariablesOf } from '../../src/types/document'
import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { Variable } from '../../src/types/variable'
import type { Schema } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/document', () => {
  test('GraphQueryFunctionCore', () => {
    const gqfn: GraphQueryFunctionCore<Schema> = null as any

    const _i0 = gqfn([])
    expectTypeOf<ResultOf<typeof _i0>>().toEqualTypeOf<never>()

    const _i1 = gqfn(['__typename', 'hello'])
    expectTypeOf<ResultOf<typeof _i1>>().toEqualTypeOf<{ __typename: 'Query', hello: string }>()

    const _i2 = gqfn(['__typename', 'hi: hello'])
    expectTypeOf<ResultOf<typeof _i2>>().toEqualTypeOf<{ __typename: 'Query', hi: string }>()

    const _i3 = gqfn('query Hello', { name: 'String! = "world"' }, [{
      hello: ($) => {
        // just for test and don't do it in real code
        expectTypeOf($.vars).toExtend<{ name: Variable<'String!'> }>()
        return $({ name: $.vars.name }, true).withDirective(['@skip', { if: true }])
      },
    }])
    expectTypeOf<ResultOf<typeof _i3>>().toEqualTypeOf<{ hello: string | null | undefined }>()
    expectTypeOf<VariablesOf<typeof _i3>>().toEqualTypeOf<{ name?: string | undefined }>()
  })
})
