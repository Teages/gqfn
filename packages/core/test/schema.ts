import type { DefineSchema, EnumType, Field, Input, InputObjectType, InterfaceType, ObjectType, ScalarType, UnionType } from '../src/schema'

export type CategoryEnum
  = | 'funny'
    | 'jokes'
    | 'serious'

export type Scalar_Int = ScalarType<'Int', number, number>
export type Scalar_Float = ScalarType<'Float', number, number>
export type Scalar_String = ScalarType<'String', string, string>
export type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
export type Scalar_ID = ScalarType<'ID', string | number, string | number>
export type Scalar_Date = ScalarType<'Date', string, string>

export type Enum_CategoryEnum = EnumType<'CategoryEnum', CategoryEnum>

export type Input_SayingDataInput = InputObjectType<'SayingDataInput', {
  category: Input<Enum_CategoryEnum>
  content: Input<Scalar_String>
}>

export type Interface_ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<Scalar_Int>
}, {
  Saying: Type_Saying
  User: Type_User
}>

export type Type_Saying = ObjectType<'Saying', {
  category: Field<Enum_CategoryEnum>
  content: Field<Scalar_String>
  createdAt: Field<Scalar_Date>
  id: Field<Scalar_Int>
  owner: Field<Type_User>
  updatedAt: Field<Scalar_Date>
}>

export type Type_User = ObjectType<'User', {
  email: Field<Scalar_String>
  friends: Field<[Type_User]>
  id: Field<Scalar_Int>
  name: Field<Scalar_String>
  sayings: Field<[Type_Saying], {
    category: Input<Enum_CategoryEnum | null>
  }>
}>

export type Union_Data = UnionType<'Data', {
  Saying: Type_Saying
  User: Type_User
}>

export type Type_Mutation = ObjectType<'Mutation', {
  addSaying: Field<Type_Saying, {
    input: Input<Input_SayingDataInput | null>
    ownerId: Input<Scalar_Int>
  }>
}>

export type Type_Query = ObjectType<'Query', {
  all: Field<[Union_Data]>
  allId: Field<[Interface_ItemWithId]>
  hello: Field<Scalar_String, {
    name: Input<Scalar_String | null>
  }>
  saying: Field<Type_Saying, {
    id: Input<Scalar_Int>
  }>
  sayings: Field<[Type_Saying], {
    category: Input<Enum_CategoryEnum | null>
  }>
  user: Field<Type_User, {
    id: Input<Scalar_Int>
  }>
  users: Field<[Type_User]>
}>

export type Type_Subscription = ObjectType<'Subscription', {
  countdown: Field<Scalar_Int, {
    from: Input<Scalar_Int>
  }>
}>

export type Schema = DefineSchema<{
  Int: Scalar_Int
  Float: Scalar_Float
  String: Scalar_String
  Boolean: Scalar_Boolean
  ID: Scalar_ID
  Date: Scalar_Date

  CategoryEnum: Enum_CategoryEnum

  SayingDataInput: Input_SayingDataInput

  ItemWithId: Interface_ItemWithId

  Saying: Type_Saying
  User: Type_User

  Data: Union_Data

  Mutation: Type_Mutation
  Query: Type_Query
  Subscription: Type_Subscription
}>

declare module '../src/schema' {
  interface Schemas {
    '/graphql': Schema
  }
}
