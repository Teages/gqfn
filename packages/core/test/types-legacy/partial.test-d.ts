import type { GraphQueryFunction, RequireOperationPartialData } from '../../src/types-legacy'
import type { ResultOf, VariablesOf } from '../../src/types-legacy/document'
import type { Schema } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/partial', () => {
  test('GraphQueryFunctionPartial', () => {
    const gqfn: GraphQueryFunction<Schema> = null as any

    const f0 = gqfn.partial('fragment A', 'on User', ['id'])
    const _q0 = gqfn([{
      user: $ => $({ id: 0 }, [{ ...f0($) }]),
    }])
    type Args_0 = VariablesOf<typeof _q0>
    type Result_0 = ResultOf<typeof _q0>
    expectTypeOf<Args_0>().toEqualTypeOf<Record<string, never>>()
    expectTypeOf<Result_0>().toEqualTypeOf<{ user: { id: number } }>()

    const f1 = gqfn.partial('fragment A', 'on User', { msg: 'String' }, ['id'])
    type R1 = RequireOperationPartialData<typeof f1>
    expectTypeOf<R1>().toEqualTypeOf<{ id: number }>()

    const _q1_1 = gqfn(
      'query Q',
      { msg: 'String' },
      [{
        user: $ => $({ id: 0 }, [{ ...f1($) }]),
      }],
    )
    type Args_1_1 = VariablesOf<typeof _q1_1>
    type Result_1_1 = ResultOf<typeof _q1_1>
    expectTypeOf<Args_1_1>().toEqualTypeOf<{ msg?: string | null | undefined }>()
    expectTypeOf<Result_1_1>().toEqualTypeOf<{ user: { id: number } }>()

    const _q1_2 = gqfn(
      'query Q',
      { msg: 'String!' },
      [{
        user: $ => $({ id: 0 }, [{ ...f1($) }]),
      }],
    )
    type Args_1_2 = VariablesOf<typeof _q1_2>
    type Result_1_2 = ResultOf<typeof _q1_2>
    expectTypeOf<Args_1_2>().toEqualTypeOf<{ msg: string }>()
    expectTypeOf<Result_1_2>().toEqualTypeOf<{ user: { id: number } }>()

    const _q1_3 = gqfn(
      'query Q',
      { msg: 'String!' },
      [{
        users: $ => $([{ ...f1($) }]),
      }],
    )
    type Args_1_3 = VariablesOf<typeof _q1_3>
    type Result_1_3 = ResultOf<typeof _q1_3>
    expectTypeOf<Args_1_3>().toEqualTypeOf<{ msg: string }>()
    expectTypeOf<Result_1_3>().toEqualTypeOf<{ users: { id: number }[] }>()

    const f2 = gqfn.partial('fragment A', 'on User', { msg: 'String!' }, ['id'])
    type R2 = RequireOperationPartialData<typeof f2>
    expectTypeOf<R2>().toEqualTypeOf<{ id: number }>()
    const _q2 = gqfn(
      'query Q',
      { msg: 'String!' },
      [{
        user: $ => $({ id: 0 }, [{ ...f2($) }]),
      }],
    )
    type Args_2 = VariablesOf<typeof _q2>
    type Result_2 = ResultOf<typeof _q2>
    expectTypeOf<Args_2>().toEqualTypeOf<{ msg: string }>()
    expectTypeOf<Result_2>().toEqualTypeOf<{ user: { id: number } }>()
  })
})
