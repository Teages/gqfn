/* eslint-ignore */
import type { ScalarType, EnumType, InputObjectType, Input, Field, ObjectType, InterfaceType, UnionType, DefineSchema } from '@gqfn/core/schema'

type Scalar_Date = ScalarType<'Date', unknown, unknown>
type Scalar_Int = ScalarType<'Int', number, number>
type Scalar_Float = ScalarType<'Float', number, number>
type Scalar_String = ScalarType<'String', string, string>
type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
type Scalar_ID = ScalarType<'ID', string | number, string>

export type CategoryEnum =
  | 'funny'
  | 'jokes'
  | 'serious'
type Enum_CategoryEnum = EnumType<'CategoryEnum', CategoryEnum>

type Input_SayingDataInput = InputObjectType<'SayingDataInput', {
  category: Input<Enum_CategoryEnum>
  content: Input<Scalar_String>
}>

type Type_Mutation = ObjectType<'Mutation', {
  addSaying: Field<Type_Saying, {
    input: Input<Input_SayingDataInput>
    ownerId: Input<Scalar_Int>
  }>
}>

type Type_Query = ObjectType<'Query', {
  all: Field<[Union_Data]>
  allId: Field<[Interface_ItemWithId]>
  hello: Field<Scalar_String, {
    name: Input<Scalar_String | null>
  }>
  saying: Field<Type_Saying, {
    id: Input<Scalar_Int>
  }>
  sayings: Field<[Type_Saying], {
    category: Input<[Enum_CategoryEnum] | null>
  }>
  user: Field<Type_User, {
    id: Input<Scalar_Int>
  }>
  users: Field<[Type_User]>
}>

type Type_Saying = ObjectType<'Saying', {
  category: Field<Enum_CategoryEnum>
  content: Field<Scalar_String>
  createdAt: Field<Scalar_Date>
  id: Field<Scalar_Int>
  owner: Field<Type_User>
  updatedAt: Field<Scalar_Date>
}>

type Type_Subscription = ObjectType<'Subscription', {
  countdown: Field<Scalar_Int, {
    from: Input<Scalar_Int>
  }>
}>

type Type_User = ObjectType<'User', {
  email: Field<Scalar_String>
  friends: Field<[Type_User]>
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
  sayings: Field<[Type_Saying], {
    category: Input<Enum_CategoryEnum | null>
  }>
}>

type Interface_ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<Scalar_Int>
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
