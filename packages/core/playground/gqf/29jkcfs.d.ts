/* eslint-ignore */
import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'

export type CategoryEnum =
  | 'funny'
  | 'jokes'
  | 'serious'

type SayingDataInput = InputObject<'SayingDataInput', {
  category: Arg<'CategoryEnum!'>
  content: Arg<'String!'>
}>

type ItemWithId = InterfaceObject<'ItemWithId', {
  id: Res<'Int!'>
}, {
  Saying: Saying
  User: User
}>

type Data = Union<'Data', {
  Saying: Saying
  User: User
}>

type Mutation = TypeObject<'Mutation', {
  addSaying: Field<'addSaying', Res<'Saying!'>, {
    input: Arg<'SayingDataInput!'>
    ownerId: Arg<'Int!'>
  }>
}>

type Query = TypeObject<'Query', {
  all: Field<'all', Res<'[Data!]!'>>
  allId: Field<'allId', Res<'[ItemWithId!]!'>>
  hello: Field<'hello', Res<'String!'>, {
    name: Arg<'String'>
  }>
  saying: Field<'saying', Res<'Saying!'>, {
    id: Arg<'Int!'>
  }>
  sayings: Field<'sayings', Res<'[Saying!]!'>, {
    category: Arg<'[CategoryEnum!]'>
  }>
  user: Field<'user', Res<'User!'>, {
    id: Arg<'Int!'>
  }>
  users: Field<'users', Res<'[User!]!'>>
}>

type Saying = TypeObject<'Saying', {
  category: Field<'category', Res<'CategoryEnum!'>>
  content: Field<'content', Res<'String!'>>
  createdAt: Field<'createdAt', Res<'Date!'>>
  id: Field<'id', Res<'Int!'>>
  owner: Field<'owner', Res<'User!'>>
  updatedAt: Field<'updatedAt', Res<'Date!'>>
}>

type Subscription = TypeObject<'Subscription', {
  countdown: Field<'countdown', Res<'Int!'>, {
    from: Arg<'Int!'>
  }>
}>

type User = TypeObject<'User', {
  email: Field<'email', Res<'String!'>>
  friends: Field<'friends', Res<'[User!]!'>>
  id: Field<'id', Res<'Int!'>>
  name: Field<'name', Res<'String!'>>
  sayings: Field<'sayings', Res<'[Saying!]!'>, {
    category: Arg<'CategoryEnum'>
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
    Mutation: Mutation
    Query: Query
    Saying: Saying
    Subscription: Subscription
    User: User
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>

declare module '@teages/gqf/schema' {
  interface Schemas {
    '/test-fixtures/graphql': Schema
  }
}
