/* eslint-ignore */
import type { ScalarType, EnumType, InputObjectType, Input, Field, ObjectType, InterfaceType, UnionType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Date = ScalarType<'Date', unknown, unknown>
type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string | number>

export type CategoryEnum =
  | 'funny'
  | 'jokes'
  | 'serious'
type Enum_CategoryEnum = EnumType<'CategoryEnum', CategoryEnum>

type Input_SayingDataInput = InputObjectType<'SayingDataInput', {
  category: Input<'CategoryEnum!', Enum_CategoryEnum>
  content: Input<'String!', Scalar_String>
}>

type Type_Mutation = ObjectType<'Mutation', {
  addSaying: Field<'Saying!', Type_Saying, {
    input: Input<'SayingDataInput!', Input_SayingDataInput>
    ownerId: Input<'Int!', Scalar_Int>
  }>
}>

type Type_Query = ObjectType<'Query', {
  all: Field<'[Data!]!', Union_Data>
  allId: Field<'[ItemWithId!]!', Interface_ItemWithId>
  hello: Field<'String!', Scalar_String, {
    name: Input<'String', Scalar_String>
  }>
  saying: Field<'Saying!', Type_Saying, {
    id: Input<'Int!', Scalar_Int>
  }>
  sayings: Field<'[Saying!]!', Type_Saying, {
    category: Input<'[CategoryEnum!]', Enum_CategoryEnum>
  }>
  user: Field<'User!', Type_User, {
    id: Input<'Int!', Scalar_Int>
  }>
  users: Field<'[User!]!', Type_User>
}>

type Type_Saying = ObjectType<'Saying', {
  category: Field<'CategoryEnum!', Enum_CategoryEnum>
  content: Field<'String!', Scalar_String>
  createdAt: Field<'Date!', Scalar_Date>
  id: Field<'Int!', Scalar_Int>
  owner: Field<'User!', Type_User>
  updatedAt: Field<'Date!', Scalar_Date>
}>

type Type_Subscription = ObjectType<'Subscription', {
  countdown: Field<'Int!', Scalar_Int, {
    from: Input<'Int!', Scalar_Int>
  }>
}>

type Type_User = ObjectType<'User', {
  email: Field<'String!', Scalar_String>
  friends: Field<'[User!]!', Type_User>
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  sayings: Field<'[Saying!]!', Type_Saying, {
    category: Input<'CategoryEnum', Enum_CategoryEnum>
  }>
}>

type Interface_ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<'id', Res<'Int!'>>
}, {
  Saying: Type_Saying
  User: Type_User
}>

type Union_Data = UnionType<'Data', {
  Saying: Type_Saying
  User: Type_User
}>

export type Schema = DefineSchema<{
  Date: Scalar_Date
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  CategoryEnum: Enum_CategoryEnum
  SayingDataInput: Input_SayingDataInput
  Mutation: Type_Mutation
  Query: Type_Query
  Saying: Type_Saying
  Subscription: Type_Subscription
  User: Type_User
  ItemWithId: Interface_ItemWithId
  Data: Union_Data
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    '/test-fixtures/graphql': Schema
  }
}
