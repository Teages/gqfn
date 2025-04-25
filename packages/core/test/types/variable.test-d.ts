import type { AcceptVariable, PrepareVariables, RequireVariables, Variable } from '../../src/types/variable'
import type { Schema } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/variable', () => {
  test('PrepareVariables', () => {
    expectTypeOf<PrepareVariables<{ a: 'String!' }>>()
      .toEqualTypeOf<{ a: Variable<'String!'> }>()

    expectTypeOf<PrepareVariables<{ a: 'String! = "default"' }>>()
      .toEqualTypeOf<{ a: Variable<'String!'> }>()
  })
  test('AcceptVariable', () => {
    expectTypeOf<AcceptVariable<'String!'>>()
      .toEqualTypeOf<Variable<'String!'>>()

    expectTypeOf<AcceptVariable<'String'>>()
      .toEqualTypeOf<Variable<'String'> | Variable<'String!'>>()

    expectTypeOf<AcceptVariable<'[String!]!'>>()
      .toEqualTypeOf<Variable<'[String!]!'> | Variable<'String!'>>()

    expectTypeOf<AcceptVariable<'[String]!'>>()
      .toEqualTypeOf<
        | Variable<'[String!]!'>
        | Variable<'[String]!'>
        | Variable<'String!'>
    >()

    expectTypeOf<AcceptVariable<'[String!]'>>()
      .toEqualTypeOf<
        | Variable<'[String!]!'>
        | Variable<'[String!]'>
        | Variable<'String!'>
        | Variable<'String'>
    >()

    expectTypeOf<AcceptVariable<'[String]'>>()
      .toEqualTypeOf<
        | Variable<'[String!]!'>
        | Variable<'[String!]'>
        | Variable<'[String]!'>
        | Variable<'[String]'>
        | Variable<'String!'>
        | Variable<'String'>
    >()
  })
  test('RequireVariables', () => {
    expectTypeOf<RequireVariables<Schema, { a: 'String!' }>>()
      .toEqualTypeOf<{ a: string }>()

    expectTypeOf<RequireVariables<Schema, { a: 'String' }>>()
      .toEqualTypeOf<{ a?: string | null | undefined }>()

    expectTypeOf<RequireVariables<Schema, { a: '[String!]!' }>>()
      .toEqualTypeOf<{ a: string[] | string }>()

    expectTypeOf<RequireVariables<Schema, { a: '[String!]' }>>()
      .toEqualTypeOf<{ a?: string[] | string | null | undefined }>()

    expectTypeOf<RequireVariables<Schema, { a: '[String]!' }>>()
      .toEqualTypeOf<{ a: (string | null | undefined)[] | string }>()

    expectTypeOf<RequireVariables<Schema, { a: '[String]' }>>()
      .toEqualTypeOf<{ a?: (string | null | undefined)[] | string | null | undefined }>()

    expectTypeOf<RequireVariables<Schema, { a: 'String = "default"' }>>()
      .toEqualTypeOf<{ a?: string | null | undefined }>()

    expectTypeOf<RequireVariables<Schema, { a: 'String! = "default"' }>>()
      .toEqualTypeOf<{ a?: string | undefined }>()
  })
})
