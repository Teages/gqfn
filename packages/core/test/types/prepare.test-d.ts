import type { ObjectSelectionContext, ObjectSelectionSimple } from '../../src/types/prepare'
import type {
  Interface_ItemWithId,
  Type_Query,
  Type_User,
} from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('type-next/prepare', () => {
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
    >()

    expectTypeOf<ObjectSelectionSimple<ObjectSelectionContext<Interface_ItemWithId, Record<string, never>>>>()
      .toEqualTypeOf<
        | 'id'
        | `__typename`
        | `${string}:id`
        | `${string}:__typename`
    >()
  })
})
