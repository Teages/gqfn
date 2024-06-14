import type {
  ArgOf,
  DefineSchema,
  EnumType,
  Field,
  InputObject,
  InterfaceObject,
  ResOf,
  ScalarType,
  TypeObject,
  Union,
} from '../../../src/schema'

export type CategoryEnum =
  | 'funny'
  | 'jokes'
  | 'serious'

type SayingDataInput = InputObject<'SayingDataInput', {
  category: Arg<'CategoryEnum!'>
  content: Arg<'String!'>
}>

type ItemWithId = InterfaceObject<'ItemWithId', {
  id: Field<'id', Res<'Int!'>>
}, {
  User: User
  Saying: Saying
}>

type Data = Union<'Data', {
  User: User
  Saying: Saying
}>

type User = TypeObject<'User', {
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
  email: Field<'email', Res<'String!'>>
  friends: Field<'friends', Res<'[User!]!'>>
  saying: Field<'saying', Res<'[Saying!]!'>, {
    category: Arg<'CategoryEnum'>
  }>
}>

type Saying = TypeObject<'Saying', {
  id: Field<'id', Res<'Int!'>>
  category: Field<'category', Res<'CategoryEnum!'>>
  content: Field<'content', Res<'String!'>>
  createdAt: Field<'createdAt', Res<'Date!'>>
  updatedAt: Field<'updatedAt', Res<'Date!'>>
  owner: Field<'owner', Res<'User!'>>
}>

type Complex = TypeObject<'Complex', {
  nullable: Field<'nullable', Res<'Int'>>
  nonNullable: Field<'nonNullable', Res<'Int!'>>

  array1: Field<'array1', Res<'[Int!]!'>>
  array2: Field<'array2', Res<'[Int!]'>>
  array3: Field<'array3', Res<'[Int]!'>>
  array4: Field<'array4', Res<'[Int]'>>

  nestingArray1: Field<'nestingArray1', Res<'[[Int!]!]!'>>
  nestingArray2: Field<'nestingArray2', Res<'[[Int]!]!'>>
  nestingArray3: Field<'nestingArray3', Res<'[[Int!]]!'>>
  nestingArray4: Field<'nestingArray4', Res<'[[Int!]!]'>>
  nestingArray5: Field<'nestingArray5', Res<'[[Int!]]'>>
  nestingArray6: Field<'nestingArray6', Res<'[[Int]!]'>>
  nestingArray7: Field<'nestingArray7', Res<'[[Int]]!'>>
  nestingArray8: Field<'nestingArray8', Res<'[[Int]]'>>
}>

type Query = TypeObject<'Query', {
  hello: Field<'hello', Res<'String!'>, {
    name: Arg<'String'>
  }>
  user: Field<'user', Res<'User!'>, {
    id: Arg<'Int!'>
  }>
  users: Field<'users', Res<'[User!]!'>>
  saying: Field<'saying', Res<'Saying!'>, {
    id: Arg<'Int!'>
  }>
  sayings: Field<'sayings', Res<'[Saying!]!'>, {
    category: Arg<'[CategoryEnum!]'>
  }>
  all: Field<'all', Res<'[Data!]!'>>
  allId: Field<'allId', Res<'[ItemWithId!]!'>>

  complex: Field<'complex', Res<'Complex!'>>
}>

type Mutation = TypeObject<'Mutation', {
  addSaying: Field<'addSaying', Res<'Saying!'>, {
    input: Arg<'SayingDataInput!'>
    ownerId: Arg<'Int!'>
  }>
}>

type Subscription = TypeObject<'Subscription', {
  countdown: Field<'countdown', Res<'Int!'>, {
    from: Arg<'Int!'>
  }>
}>

export type Schema = DefineSchema<{
  Scalars: {
    Date: ScalarType<'Date', string>
  }
  Enums: {
    CategoryEnum: EnumType<'CategoryEnum', CategoryEnum>
  }
  Inputs: {
    SayingDataInput: SayingDataInput
  }

  Interfaces: {
    ItemWithId: ItemWithId
  }
  Unions: {
    Data: Data
  }

  Objects: {
    Query: Query
    Mutation: Mutation
    Subscription: Subscription

    User: User
    Saying: Saying
    Complex: Complex
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>
