import type { GraphQueryFunction } from '../../src/types'
import type { Input } from '../../src/types/define'
import type { ParseObjectSelectionContextField } from '../../src/types/result'
import type { ExtractBaseType, FindType, ModifiedName, ModifierToTypeExpr, ParseInputModifier, ParseOutputModifier, RequireInput, RequireInputOrVariable, SchemaRequire, TypeExprToModifier, Typename, TypenameField } from '../../src/types/utils'
import type { Variable } from '../../src/types/variable'
import type {
  Enum_CategoryEnum,
  Input_SayingDataInput,
  Interface_ItemWithId,
  Scalar_Boolean,
  Scalar_Date,
  Scalar_Float,
  Scalar_ID,
  Scalar_Int,
  Scalar_String,
  Schema,
  Type_Mutation,
  Type_Query,
  Type_Saying,
  Type_Subscription,
  Type_User,
  Union_Data,
} from './schema'
import { describe, expectTypeOf, test } from 'vitest'

describe('type-next/utils', () => {
  test('TypenameField', () => {
    expectTypeOf<
      ParseObjectSelectionContextField<TypenameField<'Name'>, true>
    >().toEqualTypeOf<'Name'>()
  })

  test('Typename', () => {
    expectTypeOf<Typename<Type_Saying>>().toEqualTypeOf<'Saying'>()
    expectTypeOf<Typename<Type_User>>().toEqualTypeOf<'User'>()
    expectTypeOf<Typename<Type_Mutation>>().toEqualTypeOf<'Mutation'>()
    expectTypeOf<Typename<Type_Query>>().toEqualTypeOf<'Query'>()
    expectTypeOf<Typename<Type_Subscription>>().toEqualTypeOf<'Subscription'>()
    expectTypeOf<Typename<Union_Data>>().toEqualTypeOf<'Saying' | 'User'>()
    expectTypeOf<Typename<Interface_ItemWithId>>().toEqualTypeOf<'Saying' | 'User'>()
  })

  test('ModifiedName', () => {
    expectTypeOf<ModifiedName<'String'>>().toEqualTypeOf<'String'>()
    expectTypeOf<ModifiedName<'String!'>>().toEqualTypeOf<'String'>()
    expectTypeOf<ModifiedName<'String!!'>>().toEqualTypeOf<never>()
    expectTypeOf<ModifiedName<'[String]'>>().toEqualTypeOf<'String'>()
    expectTypeOf<ModifiedName<'[String!]'>>().toEqualTypeOf<'String'>()
    expectTypeOf<ModifiedName<'[String]!'>>().toEqualTypeOf<'String'>()
    expectTypeOf<ModifiedName<'[String!]!'>>().toEqualTypeOf<'String'>()
  })

  test('ExtractBaseType', () => {
    expectTypeOf<ExtractBaseType<Scalar_String>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<Scalar_String | null>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<[Scalar_String]>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<[Scalar_String | null]>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<[Scalar_String] | null>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<[Scalar_String | null] | null>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ExtractBaseType<[[Scalar_String]]>>().toEqualTypeOf<Scalar_String>()
  })

  test('ModifierToTypeExpr', () => {
    expectTypeOf<ModifierToTypeExpr<'String!', Scalar_String>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<ModifierToTypeExpr<'String', Scalar_String>>().toEqualTypeOf<Scalar_String | null>()
    expectTypeOf<ModifierToTypeExpr<'[String!]!', Scalar_String>>().toEqualTypeOf<[Scalar_String]>()
    expectTypeOf<ModifierToTypeExpr<'[String!]', Scalar_String>>().toEqualTypeOf<[Scalar_String] | null>()
    expectTypeOf<ModifierToTypeExpr<'[String]!', Scalar_String>>().toEqualTypeOf<[Scalar_String | null]>()
    expectTypeOf<ModifierToTypeExpr<'[String]', Scalar_String>>().toEqualTypeOf<[Scalar_String | null] | null>()
  })

  test('TypeExprToModifier', () => {
    expectTypeOf<TypeExprToModifier<Scalar_String>>().toEqualTypeOf<'String!'>()
    expectTypeOf<TypeExprToModifier<Scalar_String | null>>().toEqualTypeOf<'String'>()
    expectTypeOf<TypeExprToModifier<[Scalar_String]>>().toEqualTypeOf<'[String!]!'>()
    expectTypeOf<TypeExprToModifier<[Scalar_String] | null>>().toEqualTypeOf<'[String!]'>()
    expectTypeOf<TypeExprToModifier<[Scalar_String | null]>>().toEqualTypeOf<'[String]!'>()
    expectTypeOf<TypeExprToModifier<[Scalar_String | null] | null>>().toEqualTypeOf<'[String]'>()
  })

  test('FindType', () => {
    expectTypeOf<FindType<Schema, 'Int'>>().toEqualTypeOf<Scalar_Int>()
    expectTypeOf<FindType<Schema, 'Float'>>().toEqualTypeOf<Scalar_Float>()
    expectTypeOf<FindType<Schema, 'String'>>().toEqualTypeOf<Scalar_String>()
    expectTypeOf<FindType<Schema, 'Boolean'>>().toEqualTypeOf<Scalar_Boolean>()
    expectTypeOf<FindType<Schema, 'ID'>>().toEqualTypeOf<Scalar_ID>()
    expectTypeOf<FindType<Schema, 'Date'>>().toEqualTypeOf<Scalar_Date>()
    expectTypeOf<FindType<Schema, 'SayingDataInput'>>().toEqualTypeOf<Input_SayingDataInput>()
    expectTypeOf<FindType<Schema, 'CategoryEnum'>>().toEqualTypeOf<Enum_CategoryEnum>()
    expectTypeOf<FindType<Schema, 'ItemWithId'>>().toEqualTypeOf<Interface_ItemWithId>()
    expectTypeOf<FindType<Schema, 'Saying'>>().toEqualTypeOf<Type_Saying>()
    expectTypeOf<FindType<Schema, 'User'>>().toEqualTypeOf<Type_User>()
    expectTypeOf<FindType<Schema, 'Mutation'>>().toEqualTypeOf<Type_Mutation>()
    expectTypeOf<FindType<Schema, 'Query'>>().toEqualTypeOf<Type_Query>()
    expectTypeOf<FindType<Schema, 'Subscription'>>().toEqualTypeOf<Type_Subscription>()
  })

  test('RequireInput', () => {
    expectTypeOf<RequireInput<Input<Scalar_Int | null>>>()
      .toEqualTypeOf<number | null | undefined>()
    expectTypeOf<RequireInput<Input<Scalar_Int>>>()
      .toEqualTypeOf<number>()
    expectTypeOf<RequireInput<Input<[Scalar_Int]>>>()
      .toEqualTypeOf<number[] | number>()
    expectTypeOf<RequireInput<Input<Input_SayingDataInput>>>()
      .toEqualTypeOf<{ category: (() => 'funny') | (() => 'jokes') | (() => 'serious'), content: string }>()
    expectTypeOf<RequireInput<Input<[Input_SayingDataInput]>>>()
      .toEqualTypeOf<
        | { category: (() => 'funny') | (() => 'jokes') | (() => 'serious'), content: string }[]
        | { category: (() => 'funny') | (() => 'jokes') | (() => 'serious'), content: string }
    >()
  })

  test('RequireInputOrVariable', () => {
    expectTypeOf<RequireInputOrVariable<Input<Scalar_Int | null>>>()
      .toEqualTypeOf<number | Variable<'Int!'> | Variable<'Int'> | null | undefined>()
    expectTypeOf<RequireInputOrVariable<Input<Scalar_Int>>>()
      .toEqualTypeOf<number | Variable<'Int!'>>()
    expectTypeOf<RequireInputOrVariable<Input<[Scalar_Int]>>>()
      .toEqualTypeOf<number[] | number | Variable<'[Int!]!'> | Variable<'Int!'>>()
    expectTypeOf<RequireInputOrVariable<Input<[Scalar_Int | null]>>>()
      .toEqualTypeOf<
        | number | (number | null | undefined)[]
        | Variable<'[Int]!'> | Variable<'[Int!]!'>
        | Variable<'Int!'>
    >()
    expectTypeOf<RequireInputOrVariable<Input<[Scalar_Int] | null>>>()
      .toEqualTypeOf<
        | number[] | number
        | Variable<'[Int!]'> | Variable<'[Int!]!'>
        | Variable<'Int!'> | Variable<'Int'>
        | null | undefined
    >()
    expectTypeOf<RequireInputOrVariable<Input<[Scalar_Int | null] | null>>>()
      .toEqualTypeOf<
        | number | (number | null | undefined)[]
        | Variable<'[Int]'> | Variable<'[Int]!'> | Variable<'[Int!]'> | Variable<'[Int!]!'>
        | Variable<'Int!'> | Variable<'Int'>
        | null | undefined
    >()
    expectTypeOf<RequireInputOrVariable<Input<Input_SayingDataInput>>>()
      .toEqualTypeOf<
        | {
          category: (() => 'funny') | (() => 'jokes') | (() => 'serious') | Variable<'CategoryEnum!'>
          content: string | Variable<'String!'>
        }
        | Variable<'SayingDataInput!'>
    >()
    expectTypeOf<RequireInputOrVariable<Input<[Input_SayingDataInput]>>>()
      .toEqualTypeOf<
        | {
          category: (() => 'funny') | (() => 'jokes') | (() => 'serious') | Variable<'CategoryEnum!'>
          content: string | Variable<'String!'>
        }[]
        | {
          category: (() => 'funny') | (() => 'jokes') | (() => 'serious') | Variable<'CategoryEnum!'>
          content: string | Variable<'String!'>
        }
        | Variable<'[SayingDataInput!]!'>
        | Variable<'SayingDataInput!'>
    >()
  })

  test('ParseOutputModifier', () => {
    expectTypeOf<ParseOutputModifier<Scalar_String | null, string>>()
      .toEqualTypeOf<string | null | undefined>()
    expectTypeOf<ParseOutputModifier<Scalar_String, string>>()
      .toEqualTypeOf<string>()
    expectTypeOf<ParseOutputModifier<[Scalar_String], string>>()
      .toEqualTypeOf<string[]>()
    expectTypeOf<ParseOutputModifier<[[Scalar_String]], string>>()
      .toEqualTypeOf<string[][]>()
  })

  test('ParseInputModifier', () => {
    expectTypeOf<ParseInputModifier<Scalar_String | null, string>>()
      .toEqualTypeOf<string | null | undefined>()
    expectTypeOf<ParseInputModifier<Scalar_String, string>>()
      .toEqualTypeOf<string>()
    expectTypeOf<ParseInputModifier<[Scalar_String], string>>()
      .toEqualTypeOf<string[] | string>()
    expectTypeOf<ParseInputModifier<[[Scalar_String]], string>>()
      .toEqualTypeOf<string[][] | string>()

    // from spec 3.11 List
    // [Int] [1, 2, 3] [1, 2, 3]
    expectTypeOf([1, 2, 3])
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [Int] [1, "b", true] Error: Incorrect item value
    expectTypeOf([1, 'b', true])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [Int] 1 [1]
    expectTypeOf(1)
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [Int] null null
    expectTypeOf(null)
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [[Int]] [[1], [2, 3]] [[1], [2, 3]]
    expectTypeOf([[1], [2, 3]])
      .toExtend<ParseInputModifier<[[Scalar_Int | null] | null] | null, number>>()
    // [[Int]] [1, 2, 3] Error: Incorrect item value
    expectTypeOf([1, 2, 3])
      .not
      .toExtend<ParseInputModifier<[[Scalar_Int | null] | null] | null, number>>()
    // [[Int]] 1 [[1]]
    expectTypeOf(1)
      .toExtend<ParseInputModifier<[[Scalar_Int | null] | null] | null, number>>()
    // [[Int]] null null
    expectTypeOf(null)
      .toExtend<ParseInputModifier<[[Scalar_Int | null] | null] | null, number>>()

    // from spec 3.12.1 Combining List and Non-Null
    // [Int] [1, 2, null] [1, 2, null]
    expectTypeOf([1, 2, null])
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [Int] [1, 2, Error] [1, 2, null] (With logged error)
    expectTypeOf([1, 2, 'a'])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int | null] | null, number>>()
    // [Int]! [1, 2, 3] [1, 2, 3]
    expectTypeOf([1, 2, 3])
      .toExtend<ParseInputModifier<[Scalar_Int | null], number>>()
    // [Int]! null Error: Value cannot be null
    expectTypeOf(null)
      .not
      .toExtend<ParseInputModifier<[Scalar_Int | null], number>>()
    // [Int]! [1, 2, null] [1, 2, null]
    expectTypeOf([1, 2, null])
      .toExtend<ParseInputModifier<[Scalar_Int | null], number>>()
    // [Int]! [1, 2, Error] [1, 2, null] (With logged error)
    expectTypeOf([1, 2, 'a'])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int | null], number>>()
    // [Int!] [1, 2, 3] [1, 2, 3]
    expectTypeOf([1, 2, 3])
      .toExtend<ParseInputModifier<[Scalar_Int] | null, number>>()
    // [Int!] null null
    expectTypeOf(null)
      .toExtend<ParseInputModifier<[Scalar_Int] | null, number>>()
    // [Int!] [1, 2, null] null (With logged coercion error)
    expectTypeOf([1, 2, null])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int] | null, number>>()
    // [Int!] [1, 2, Error] null (With logged error)
    expectTypeOf([1, 2, 'a'])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int] | null, number>>()
    // [Int!]! [1, 2, 3] [1, 2, 3]
    expectTypeOf([1, 2, 3])
      .toExtend<ParseInputModifier<[Scalar_Int], number>>()
    // [Int!]! null Error: Value cannot be null
    expectTypeOf(null)
      .not
      .toExtend<ParseInputModifier<[Scalar_Int], number>>()
    // [Int!]! [1, 2, null] Error: Item cannot be null
    expectTypeOf([1, 2, null])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int], number>>()
    // [Int!]! [1, 2, Error] Error: Error occurred in item
    expectTypeOf([1, 2, 'a'])
      .not
      .toExtend<ParseInputModifier<[Scalar_Int], number>>()
  })

  test('SchemaRequire', () => {
    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, 'Int'>>()
      .toEqualTypeOf<number | null | undefined>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, 'Int!'>>()
      .toEqualTypeOf<number>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, '[Int]'>>()
      .toEqualTypeOf<(number | null | undefined)[] | number | null | undefined>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, '[Int]!'>>()
      .toEqualTypeOf<(number | null | undefined)[] | number>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, '[Int!]'>>()
      .toEqualTypeOf<number[] | number | null | undefined>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, '[Int!]!'>>()
      .toEqualTypeOf<number[] | number>()

    expectTypeOf<SchemaRequire<GraphQueryFunction<Schema>, 'SayingDataInput!'>>()
      .toEqualTypeOf<{ category: (() => 'funny') | (() => 'jokes') | (() => 'serious'), content: string }>()
  })
})
