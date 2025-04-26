/* eslint-ignore */
import type { ScalarType, Field, Input, ObjectType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string | number>

type Type_Query = ObjectType<'Query', {
  hello: Field<'String!', Scalar_String, {
    name: Input<'String', Scalar_String>
  }>
  user: Field<'User', Type_User, {
    id: Input<'ID', Scalar_ID>
  }>
  users: Field<'[User!]!', Type_User>
}>

type Type_User = ObjectType<'User', {
  id: Field<'ID!', Scalar_ID>
  name: Field<'String!', Scalar_String>
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
