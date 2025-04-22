import type { Field } from '../../src/schema'
import type { IsHasArguments, IsRequiredArguments, IsTypeObjectKeys, PrepareField, PrepareOperationSelectionSet, PrepareSelectionField, PrepareSelectionObject, PrepareSelectionObjectForFields, PrepareSelectionObjectForInlineFragment, PrepareSelectionSetComplex, PrepareSelectionSetSimple } from '../../src/types-legacy/selection'
import type { Arg, Data, ItemWithId, Mutation, Query, Res, Subscription, User } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/selection', () => {
  test('PrepareSelectionField', () => {
    expectTypeOf<PrepareSelectionField<Query>>()
      .toEqualTypeOf<'hello' | `${string}:hello` | '__typename' | `${string}:__typename`>()
  })
  test('PrepareSelectionObject', () => {
    const tester = (_selection: PrepareSelectionObject<Query, Record<string, never>>) => null
    tester({ hello: $ => $({}, true) })
  })
  test('PrepareSelectionObjectForFields', () => {
    const tester = (_selection: PrepareSelectionObjectForFields<Query, Record<string, never>>) => null
    tester({ hello: $ => $({}, true) })
    tester({ user: $ => $({ id: 1 }, ['id', 'name']) })
  })
  test('PrepareField', () => {
    const tester_0 = (_selection: PrepareField<Field<'username', Res<'String!'>>, Record<string, never>>) => null
    tester_0(true)
    tester_0($ => $(true))

    const tester_1 = (_selection: PrepareField<Field<'users', Res<'[User!]!'>>, Record<string, never>>) => null
    // @ts-expect-error can't be simply select
    tester_1(true)

    const tester_2 = (_selection: PrepareField<Field<'greeting', Res<'String!'>, { name: Arg<'String'> }>, Record<string, never>>) => null
    tester_2(true)

    const tester_3 = (_selection: PrepareField<Field<'greeting', Res<'String!'>, { name: Arg<'String!'> }>, Record<string, never>>) => null
    // @ts-expect-error can't be simply select
    tester_3(true)
  })
  test('PrepareFieldResult', () => { /** equal to `PrepareField` */ })
  test('PrepareSelectionObjectForInlineFragment', () => {
    const tester_0 = (_selection: PrepareSelectionObjectForInlineFragment<Data, Record<string, never>>) => null
    tester_0({ '... on User': $ => $(['email']) })
    tester_0({ '... on Saying': $ => $(['content']) })

    const tester_1 = (_selection: PrepareSelectionObjectForInlineFragment<ItemWithId, Record<string, never>>) => null
    tester_1({ '...': $ => $(['id']) })
    tester_1({ '... on User': $ => $(['email']) })
    tester_1({ '... on Saying': $ => $(['content']) })

    const tester_2 = (_selection: PrepareSelectionObjectForInlineFragment<User, Record<string, never>>) => null
    tester_2({ '...': $ => $(['email']) })
  })
  test('PrepareInlineFragment', () => { /** tested in `PrepareSelectionObjectForInlineFragment` */ })
  test('PrepareSelectionSetComplex', () => {
    const tester = (_selection: PrepareSelectionSetComplex<User, Record<string, never>>) => null
    tester([])
    tester(['id'])
    tester(['name'])
    tester([{ id: true, name: $ => $(true) }])
  })
  test('PrepareOperationSelectionSet', () => {
    const tester_0 = (_selection: PrepareOperationSelectionSet<undefined, Record<string, never>>) => null
    tester_0([])

    const tester_1 = (_selection: PrepareOperationSelectionSet<Query, Record<string, never>>) => null
    tester_1([])
    tester_1(['hello', '__typename'])

    const tester_2 = (_selection: PrepareOperationSelectionSet<Mutation, Record<string, never>>) => null
    tester_2([])
    tester_2([{
      addSaying: $ => $(
        { input: { category: () => 'jokes', content: 'hello' }, ownerId: 1 },
        ['__typename', 'content'],
      ),
    }])

    const tester_3 = (_selection: PrepareOperationSelectionSet<Subscription, Record<string, never>>) => null
    tester_3([])
    tester_3([{
      countdown: $ => $(
        { from: 10 },
        true,
      ),
    }])
  })

  /**
   * Utils
   */
  test('PrepareSelectionSetSimple', () => {
    expectTypeOf<PrepareSelectionSetSimple<Field<'users', Res<'[User!]!'>>>>()
      .toEqualTypeOf<never>()
    expectTypeOf<PrepareSelectionSetSimple<Field<'users', Res<'[User!]!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<never>()
    expectTypeOf<PrepareSelectionSetSimple<Field<'users', Res<'[User!]!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<never>()

    expectTypeOf<PrepareSelectionSetSimple<Field<'username', Res<'String!'>>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<PrepareSelectionSetSimple<Field<'username', Res<'String!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<PrepareSelectionSetSimple<Field<'username', Res<'String!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<never>()
  })
  test('IsRequiredArguments', () => {
    expectTypeOf<IsRequiredArguments<Field<'users', Res<'[User!]!'>>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsRequiredArguments<Field<'users', Res<'[User!]!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsRequiredArguments<Field<'users', Res<'[User!]!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<false>()

    expectTypeOf<IsRequiredArguments<Field<'username', Res<'String!'>>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsRequiredArguments<Field<'username', Res<'String!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsRequiredArguments<Field<'username', Res<'String!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsRequiredArguments<Field<'username', Res<'String!'>, { id: Arg<'Int!'>, name: Arg<'String'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsRequiredArguments<Field<'username', Res<'String!'>, { id: Arg<'Int'>, name: Arg<'String'> }>>>()
      .toEqualTypeOf<false>()
  })
  test('IsHasArguments', () => {
    expectTypeOf<IsHasArguments<Field<'users', Res<'[User!]!'>>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsHasArguments<Field<'users', Res<'[User!]!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsHasArguments<Field<'users', Res<'[User!]!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<true>()

    expectTypeOf<IsHasArguments<Field<'username', Res<'String!'>>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsHasArguments<Field<'username', Res<'String!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsHasArguments<Field<'username', Res<'String!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<true>()
  })
  test('IsTypeObjectKeys', () => {
    expectTypeOf<IsTypeObjectKeys<Field<'users', Res<'[User!]!'>>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsTypeObjectKeys<Field<'users', Res<'[User!]!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<true>()
    expectTypeOf<IsTypeObjectKeys<Field<'users', Res<'[User!]!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<true>()

    expectTypeOf<IsTypeObjectKeys<Field<'username', Res<'String!'>>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsTypeObjectKeys<Field<'username', Res<'String!'>, { id: Arg<'Int'> }>>>()
      .toEqualTypeOf<false>()
    expectTypeOf<IsTypeObjectKeys<Field<'username', Res<'String!'>, { id: Arg<'Int!'> }>>>()
      .toEqualTypeOf<false>()
  })
})
