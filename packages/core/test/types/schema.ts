import type { DefineSchema, EnumType, Field, Input, InputObjectType, InterfaceType, ObjectType, ScalarType, UnionType } from '../../src/schema'

export type CategoryEnum =
  | 'funny'
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
  category: Input<'CategoryEnum!', Enum_CategoryEnum>
  content: Input<'String!', Scalar_String>
}>

export type Interface_ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<'Int!', Scalar_Int>
}, {
  Saying: Type_Saying
  User: Type_User
}>

export type Type_Saying = ObjectType<'Saying', {
  category: Field<'CategoryEnum!', Enum_CategoryEnum>
  content: Field<'String!', Scalar_String>
  createdAt: Field<'Date!', Scalar_Date>
  id: Field<'Int!', Scalar_Int>
  owner: Field<'User!', Type_User>
  updatedAt: Field<'Date!', Scalar_Date>
}>

export type Type_User = ObjectType<'User', {
  email: Field<'String!', Scalar_String>
  friends: Field<'[User!]!', Type_User>
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  sayings: Field<'[Saying!]!', Type_Saying, {
    category: Input<'CategoryEnum', Enum_CategoryEnum>
  }>
}>

export type Union_Data = UnionType<'Data', {
  Saying: Type_Saying
  User: Type_User
}>

export type Type_Mutation = ObjectType<'Mutation', {
  addSaying: Field<'Saying!', Type_Saying, {
    input: Input<'SayingDataInput', Input_SayingDataInput>
    ownerId: Input<'Int!', Scalar_Int>
  }>
}>

export type Type_Query = ObjectType<'Query', {
  all: Field<'[Data!]!', Union_Data>
  allId: Field<'[ItemWithId!]!', Interface_ItemWithId>
  hello: Field<'String!', Scalar_String, {
    name: Input<'String', Scalar_String>
  }>
  saying: Field<'Saying!', Type_Saying, {
    id: Input<'Int!', Scalar_Int>
  }>
  sayings: Field<'[Saying!]!', Type_Saying, {
    category: Input<'CategoryEnum', Enum_CategoryEnum>
  }>
  user: Field<'User!', Type_User, {
    id: Input<'Int!', Scalar_Int>
  }>
  users: Field<'[User!]!', Type_User>
}>

export type Type_Subscription = ObjectType<'Subscription', {
  countdown: Field<'Int!', Scalar_Int, {
    from: Input<'Int!', Scalar_Int>
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
