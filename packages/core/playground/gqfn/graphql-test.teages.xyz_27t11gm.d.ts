/* eslint-ignore */
import type { ScalarType, Field, Input, ObjectType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

type Type_Query = ObjectType<'Query', {
  hello: Field<Scalar_String, {
    name: Input<Scalar_String | null>
  }>
  user: Field<Type_User | null, {
    id: Input<Scalar_ID | null>
  }>
  users: Field<[Type_User]>
}>

type Type_User = ObjectType<'User', {
  id: Field<Scalar_ID>
  name: Field<Scalar_String>
}>

export type Schema = DefineSchema<{
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  Query: Type_Query
  User: Type_User
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    'https://graphql-test.teages.xyz/graphql-user': Schema
  }
}
