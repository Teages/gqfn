import type { Field, ObjectType } from '../../src/types'
import type { ObjectSelection, ObjectSelectionContext, ObjectSelectionOnFields, ObjectSelectionOnInlineFragments, ObjectSelectionSimple, PrepareSelection, SelectionSimplyOnField, WithAlias } from '../../src/types/prepare'
import type {
  Enum_CategoryEnum,
  Interface_ItemWithId,
  Scalar_Int,
  Scalar_String,
  Type_Query,
  Type_User,
  Union_Data,
} from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('type-next/prepare', () => {
  test('PrepareSelection', () => {
    expectTypeOf<PrepareSelection<Type_User, Record<string, never>>>()
      .toEqualTypeOf<ObjectSelection<Type_User, Record<string, never>>>()

    expectTypeOf<PrepareSelection<Interface_ItemWithId, Record<string, never>>>()
      .toEqualTypeOf<ObjectSelection<Interface_ItemWithId, Record<string, never>>>()

    expectTypeOf<PrepareSelection<Union_Data, Record<string, never>>>()
      .toEqualTypeOf<ObjectSelection<Union_Data, Record<string, never>>>()

    expectTypeOf<PrepareSelection<Enum_CategoryEnum, Record<string, never>>>()
      .toEqualTypeOf<true>()

    expectTypeOf<PrepareSelection<Scalar_String, Record<string, never>>>()
      .toEqualTypeOf<true>()
  })

  test('ObjectSelectionSimple', () => {
    expectTypeOf<ObjectSelectionSimple<ObjectSelectionContext<Type_User, Record<string, never>>>>()
      .toEqualTypeOf<
        | 'id'
        | 'email'
        | 'name'
        | '__typename'
        | `${string}:__typename`
        | `${string}:email`
        | `${string}:id`
        | `${string}:name`
        | `${string}: __typename`
        | `${string}: email`
        | `${string}: id`
        | `${string}: name`
    >()

    expectTypeOf<ObjectSelectionSimple<ObjectSelectionContext<Interface_ItemWithId, Record<string, never>>>>()
      .toEqualTypeOf<
        | 'id'
        | `__typename`
        | `${string}:id`
        | `${string}:__typename`
        | `${string}: id`
        | `${string}: __typename`
    >()
  })

  test('ObjectSelectionContext', () => {
    type PreparedQuery = ObjectSelectionContext<Type_Query, Record<string, never>>
    expectTypeOf<PreparedQuery>().toHaveProperty('__typename')
    expectTypeOf<PreparedQuery>().toHaveProperty('all')
    expectTypeOf<PreparedQuery>().toHaveProperty('allId')
    expectTypeOf<PreparedQuery>().toHaveProperty('hello')
    expectTypeOf<PreparedQuery>().toHaveProperty('saying')
    expectTypeOf<PreparedQuery>().toHaveProperty('sayings')
    expectTypeOf<PreparedQuery>().toHaveProperty('user')
    expectTypeOf<PreparedQuery>().toHaveProperty('users')
    expectTypeOf<PreparedQuery>().toHaveProperty('__typename')
    expectTypeOf<PreparedQuery>().toHaveProperty('...')
  })

  test('ObjectSelectionOnFields', () => {
    type Type = ObjectType<'Saying', {
      id: Field<'Int!', Scalar_Int>
    }>

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('id')

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('__typename')

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('a: id')

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('a: __typename')

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('a:id')

    expectTypeOf<ObjectSelectionOnFields<Type, Record<string, never>>>()
      .toHaveProperty('a:__typename')
  })

  test('ObjectSelectionOnInlineFragments', () => {
    expectTypeOf<ObjectSelectionOnInlineFragments<Type_User, Record<string, never>>>()
      .toHaveProperty('...')

    expectTypeOf<ObjectSelectionOnInlineFragments<Interface_ItemWithId, Record<string, never>>>()
      .toHaveProperty('...')
    expectTypeOf<ObjectSelectionOnInlineFragments<Interface_ItemWithId, Record<string, never>>>()
      .toHaveProperty('... on Saying')
    expectTypeOf<ObjectSelectionOnInlineFragments<Interface_ItemWithId, Record<string, never>>>()
      .toHaveProperty('... on User')

    expectTypeOf<ObjectSelectionOnInlineFragments<Union_Data, Record<string, never>>>()
      .toHaveProperty('...')
    expectTypeOf<ObjectSelectionOnInlineFragments<Union_Data, Record<string, never>>>()
      .toHaveProperty('... on Saying')
    expectTypeOf<ObjectSelectionOnInlineFragments<Union_Data, Record<string, never>>>()
      .toHaveProperty('... on User')
  })

  // test('SelectionOnField', () => { })

  test('SelectionSimplyOnField', () => {
    expectTypeOf<SelectionSimplyOnField<Scalar_Int, Record<string, never>>>()
      .toEqualTypeOf<true>()

    expectTypeOf<SelectionSimplyOnField<Enum_CategoryEnum, Record<string, never>>>()
      .toEqualTypeOf<true>()

    expectTypeOf<SelectionSimplyOnField<Type_User, Record<string, never>>>()
      .toEqualTypeOf<never>()
  })

  test('WithAlias', () => {
    expectTypeOf<WithAlias<'id'>>()
      .toEqualTypeOf<`${string}:id` | `${string}: id` | 'id'>()
  })
})
