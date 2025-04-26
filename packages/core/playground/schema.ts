import type {
  DefineSchema,
  EnumType,

  Field,
  Input,

  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,

  UnionType,
} from '../src/type-next/define'

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

export type Enum_CategoryEnum = EnumType<'CategoryEnum', CategoryEnum, CategoryEnum>

export type Input_SayingDataInput = InputObjectType<'SayingDataInput', {
  category: Field<'CategoryEnum!', Enum_CategoryEnum>
  content: Field<'String!', Scalar_String>
}>

export type Interface_ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<'Int!', Scalar_Int>
}, {
  Saying: Object_Saying
  User: Object_User
}>

export type Object_Saying = ObjectType<'Saying', {
  category: Field<'CategoryEnum!', Enum_CategoryEnum>
  content: Field<'String!', Scalar_String>
  createdAt: Field<'Date!', Scalar_Date>
  id: Field<'Int!', Scalar_Int>
  owner: Field<'User!', Object_User>
  updatedAt: Field<'Date!', Scalar_Date>
}>

export type Object_User = ObjectType<'User', {
  email: Field<'String!', Scalar_String>
  friends: Field<'[User!]!', Object_User>
  id: Field<'Int!', Scalar_Int>
  name: Field<'String!', Scalar_String>
  sayings: Field<'[Saying!]!', Object_Saying, {
    category: Input<'CategoryEnum', Enum_CategoryEnum>
  }>
}>

export type Union_Data = UnionType<'Data', {
  Saying: Object_Saying
  User: Object_User
}>

export type Type_Mutation = ObjectType<'Mutation', {
  addSaying: Field<'Saying!', Object_Saying, {
    input: Input<'SayingDataInput', Input_SayingDataInput>
    ownerId: Field<'Int!', Scalar_Int>
  }>
}>

export type Type_Query = ObjectType<'Query', {
  all: Field<'[Data!]!', Union_Data>
  allId: Field<'[ItemWithId!]!', Interface_ItemWithId>
  hello: Field<'String!', Scalar_String, {
    name: Input<'String', Scalar_String>
  }>
  saying: Field<'Saying!', Object_Saying, {
    id: Field<'Int!', Scalar_Int>
  }>
  sayings: Field<'[Saying!]!', Object_Saying, {
    category: Input<'CategoryEnum', Enum_CategoryEnum>
  }>
  user: Field<'User!', Object_User, {
    id: Field<'Int!', Scalar_Int>
  }>
  users: Field<'[User!]!', Object_User>
}>

export type Type_Subscription = ObjectType<'Subscription', {
  countdown: Field<'Int!', Scalar_Int, {
    from: Field<'Int!', Scalar_Int>
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

  Saying: Object_Saying
  User: Object_User

  Data: Union_Data

  Mutation: Type_Mutation
  Query: Type_Query
  Subscription: Type_Subscription
}>
