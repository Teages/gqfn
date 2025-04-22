import type { ResultOf } from '../../src/types-legacy/document'
import type { GraphQueryFunctionCore } from '../../src/types-legacy/operation'
import type { Schema } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/document', () => {
  test('GraphQueryFunctionCore', () => {
    const gqfn: GraphQueryFunctionCore<Schema> = null as any

    const _i0 = gqfn([])
    expectTypeOf<ResultOf<typeof _i0>>().toEqualTypeOf<never>()

    const _i1 = gqfn(['hello'])
    expectTypeOf<ResultOf<typeof _i1>>().toEqualTypeOf<{ hello: string }>()
  })
})
