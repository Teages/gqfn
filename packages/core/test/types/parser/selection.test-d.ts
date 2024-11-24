import type { Exact } from '../../../src/internal/utils'
import type { TypeObject } from '../../../src/schema'
import type { AnalyzedSelectionSetComplex, ParseSelectionObjectForFields, ParseSelectionObjectForInlineFragment, ParseSelectionSetComplex } from '../../../src/types/parser/selection'
import type { PrepareSelectionSetComplex } from '../../../src/types/selection'
import type { Data, ItemWithId, Query, User } from '../schema'
import { describe, expectTypeOf, test } from 'vitest'

interface Prepare<
  T extends TypeObject<string, any, any>,
> {
  <Selection extends PrepareSelectionSetComplex<T, Record<string, never>>>(
    selection: Exact<
      PrepareSelectionSetComplex<T, Record<string, never>>,
      Selection
    >
  ): Selection
}

describe('types/parser/selection', () => {
  test('ParseSelectionSetComplex', () => {
    const prepare: Prepare<Query> = selection => selection as any

    const _i0 = prepare(['hello', 'hi:hello', '__typename'])
    expectTypeOf<ParseSelectionSetComplex<Query, typeof _i0>>()
      .toEqualTypeOf<{ hello: string, hi: string, __typename: 'Query' }>()
  })

  test('ParseSelectionObjectForFields', () => {
    const prepare: Prepare<Query> = selection => selection as any

    const _i0 = prepare([{ 'hello': true, 'hi:hello': true, '__typename': true }])[0]
    expectTypeOf<ParseSelectionObjectForFields<Query, typeof _i0>>()
      .toEqualTypeOf<{ hello: string, hi: string, __typename: 'Query' }>()

    const _i1 = prepare([{ user: $ => $({ id: 0 }, ['id', 'email', 'name', '__typename']), __typename: true }])[0]
    expectTypeOf<ParseSelectionObjectForFields<Query, typeof _i1>>()
      .toEqualTypeOf<{ user: { id: number, email: string, name: string, __typename: 'User' }, __typename: 'Query' }>()

    const _i3 = prepare([{ hello: $ => $({}, true).withDirective(['@skip', { if: true }]) }])[0]
    expectTypeOf<ParseSelectionObjectForFields<Query, typeof _i3>>()
      .toEqualTypeOf<{ hello: string | null | undefined }>()
  })

  test('ParseSelectionObjectForInlineFragment', () => {
    const prepare_0: Prepare<User> = selection => selection as any
    const _i0 = prepare_0([{ '...': $ => $(['__typename', 'id', 'email']) }])[0]
    expectTypeOf<ParseSelectionObjectForInlineFragment<User, typeof _i0>>()
      .toEqualTypeOf<{ __typename: 'User', id: number, email: string }>()

    const prepare_1: Prepare<ItemWithId> = selection => selection as any
    const _i1 = prepare_1([{
      '__typename': true,
      'id': true,
      '... on User': $ => $(['__typename', 'name', 'email']),
      '... on Saying': $ => $(['__typename', 'content']),
    }])
    type R1 = ParseSelectionSetComplex<ItemWithId, typeof _i1>
    const r1: R1 = null as any
    expectTypeOf(r1.__typename).toEqualTypeOf<'User' | 'Saying'>();
    (() => {
      if (r1.__typename === 'Saying') {
        expectTypeOf(r1.content).toEqualTypeOf<string>()
      }
      if (r1.__typename === 'User') {
        expectTypeOf(r1.name).toEqualTypeOf<string>()
        expectTypeOf(r1.email).toEqualTypeOf<string>()
        return
      }
      expectTypeOf(r1.__typename).toEqualTypeOf<'Saying'>()
      expectTypeOf(r1.content).toEqualTypeOf<string>()
    })()

    const prepare_2: Prepare<Data> = selection => selection as any
    const _i2 = prepare_2([{
      '... on User': $ => $(['__typename', 'name', 'email']),
      '... on Saying': $ => $(['__typename', 'content']),
    }])[0]
    type R2 = ParseSelectionObjectForInlineFragment<Data, typeof _i2>
    const r2: R2 = null as any
    expectTypeOf(r2.__typename).toEqualTypeOf<'User' | 'Saying'>();
    (() => {
      if (r2.__typename === 'Saying') {
        expectTypeOf(r2.content).toEqualTypeOf<string>()
      }
      if (r2.__typename === 'User') {
        expectTypeOf(r2.name).toEqualTypeOf<string>()
        expectTypeOf(r2.email).toEqualTypeOf<string>()
        return
      }
      expectTypeOf(r2.__typename).toEqualTypeOf<'Saying'>()
      expectTypeOf(r2.content).toEqualTypeOf<string>()
    })()

    const prepare_3: Prepare<User> = selection => selection as any
    const _i3 = prepare_3([{
      '...': $ => $(['__typename', 'id', 'email']).withDirective(['@skip', { if: true }]),
    }])[0]
    expectTypeOf<ParseSelectionObjectForInlineFragment<User, typeof _i3>>()
      .toEqualTypeOf<
        | { __typename: 'User', id: number, email: string }
        | {
          __typename: null | undefined
          email: null | undefined
          id: null | undefined
        }
    >()
  })

  test('AnalyzedSelectionSetComplex', () => {
    const prepare: Prepare<Query> = selection => selection as any

    const _i0 = prepare(['hello'])
    type R0 = AnalyzedSelectionSetComplex<typeof _i0>
    expectTypeOf<R0>().toEqualTypeOf<{ hello: true }>()

    const _i1 = prepare(['hello', '__typename', { }])
    type R1 = AnalyzedSelectionSetComplex<typeof _i1>
    expectTypeOf<R1>().toEqualTypeOf<{ hello: true, __typename: true }>()

    const _i2 = prepare(['hello', '__typename', { 'hi:hello': true }])
    type R2 = AnalyzedSelectionSetComplex<typeof _i2>
    expectTypeOf<R2>().toEqualTypeOf<{ 'hello': true, '__typename': true, 'hi:hello': true }>()
  })
})
