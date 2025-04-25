import type { Exact } from '../../src/internal/utils'
import type { BaseObject, BaseType, Field } from '../../src/types'
import type { DollarPackage } from '../../src/types/dollar'
import type { ObjectSelectionOnInlineFragments, PrepareSelection } from '../../src/types/prepare'
import type { AnalyzedObjectSelection, OmitInlineFragmentKeys, ParseInlineFragmentReturn, ParseObjectSelection, ParseObjectSelectionContext, ParseObjectSelectionContextField, ParseObjectSelectionContextInlineFragments, ParseSelection, ParseSelectionName, PickInlineFragmentKeys } from '../../src/types/result'
import type { Scalar_Boolean, Scalar_String, Schema, Type_Query, Type_User, Union_Data } from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('types/result', () => {
  test('ParseSelection', () => {
    expectTypeOf<ParseSelection<Type_Query, ['hello', 'hi:hello', '__typename']>>()
      .toEqualTypeOf<{ hello: string, hi: string, __typename: 'Query' }>()

    expectTypeOf<ParseSelection<Scalar_Boolean, true>>()
      .toEqualTypeOf<boolean>()

    expectTypeOf<ParseSelection<Scalar_String, true>>()
      .toEqualTypeOf<string>()
  })

  test('ParseObjectSelection', () => {
    expectTypeOf<ParseObjectSelection<Type_Query, ['hello', 'hi:hello', '__typename']>>()
      .toEqualTypeOf<{ hello: string, hi: string, __typename: 'Query' }>()
  })

  test('ParseObjectSelectionContext', () => {
    expectTypeOf<ParseObjectSelectionContext<Type_Query, { hello: true }>>()
      .toEqualTypeOf<{ hello: string }>()
    expectTypeOf<ParseObjectSelectionContext<Type_Query, { '...': () => DollarPackage<['hello']> }>>()
      .toEqualTypeOf<{ hello: string }>()
  })

  test('PickInlineFragmentKeys', () => {
    expectTypeOf<PickInlineFragmentKeys<{
      '...': true
      '... on User': true
      'a': true
      'b': true
    }>>()
      .toEqualTypeOf<{ '...': true, '... on User': true }>()
  })

  test('OmitInlineFragmentKeys', () => {
    expectTypeOf<OmitInlineFragmentKeys<{
      '...': true
      '... on User': true
      'a': true
      'b': true
    }>>()
      .toEqualTypeOf<{ a: true, b: true }>()
  })

  test('ParseObjectSelectionContextField', () => {
    expectTypeOf<ParseObjectSelectionContextField<
      Field<'String!', Scalar_String, any>,
      true
    >>().toEqualTypeOf<string>()

    expectTypeOf<ParseObjectSelectionContextField<
      Field<'User!', Type_User, any>,
      ['__typename', 'name', 'email']
    >>().toEqualTypeOf<{ __typename: 'User', name: string, email: string }>()
  })

  test('ParseSelectionName', () => {
    expectTypeOf<ParseSelectionName<'str'>>()
      .toEqualTypeOf<{ Field: 'str', Name: 'str' }>()

    expectTypeOf<ParseSelectionName<'a:b'>>()
      .toEqualTypeOf<{ Field: 'b', Name: 'a' }>()
    expectTypeOf<ParseSelectionName<'a: b'>>()
      .toEqualTypeOf<{ Field: 'b', Name: 'a' }>()
    expectTypeOf<ParseSelectionName<'a:  b'>>()
      .toEqualTypeOf<{ Field: 'b', Name: 'a' }>()
  })

  test('ParseObjectSelectionContextInlineFragments', () => {
    expectTypeOf<ParseObjectSelectionContextInlineFragments<Type_User, {
      '...': () => DollarPackage<['__typename', 'name', 'email'], true>
    }>>()
      .toEqualTypeOf<{
      __typename: 'User' | null | undefined
      name: string | null | undefined
      email: string | null | undefined
    }>()

    expectTypeOf<ParseObjectSelectionContextInlineFragments<Union_Data, {
      '... on User': () => DollarPackage<['__typename', 'name', 'email']>
    }>>()
      .toEqualTypeOf<{
        __typename?: 'Saying' | 'User' | undefined
      } & {
        __typename: 'User'
        name: string
        email: string
      }>()
  })

  test('ParseInlineFragmentReturn', () => {
    expectTypeOf<ParseInlineFragmentReturn<Type_User, () => DollarPackage<['__typename', 'name', 'email']>>>()
      .toEqualTypeOf<{ __typename: 'User', name: string, email: string }>()
    expectTypeOf<ParseInlineFragmentReturn<Type_User, () => DollarPackage<['__typename', 'name', 'email'], true>>>()
      .toEqualTypeOf<{ __typename: 'User' | null | undefined, name: string | null | undefined, email: string | null | undefined }>()
  })

  test('AnalyzedObjectSelection', () => {
    expectTypeOf<AnalyzedObjectSelection<[]>>()
      .toEqualTypeOf<unknown>()

    expectTypeOf<AnalyzedObjectSelection<['a', 'b']>>()
      .toEqualTypeOf<{ a: true, b: true }>()

    expectTypeOf<AnalyzedObjectSelection<['a', 'b', { c: true }]>>()
      .toEqualTypeOf<{ a: true, b: true, c: true }>()

    expectTypeOf<AnalyzedObjectSelection<['a', 'b', { c: true }, { d: true }]>>()
      .toEqualTypeOf<{ a: true, b: true, c: true, d: true }>()
  })
})
