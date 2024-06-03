# Schema

::: tip
We suggest to use [Schema Loader CLI](#) to load the schema.

This page is written for those who want to manually write the schema type.
:::

## Reference

Here is a empty schema type, you can get start with it:

```ts
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
} from '@teages/gqf/schema'

export type Schema = DefineSchema<{
  // Define your schema here
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>
```

### Scalar

To define a scalar type, you can use the `ScalarType` helper type:

:::tip
Most custom scalar types uses `string` as input and output type in client-side.
:::

::: code-group
```ts [schema.ts]
export type Schema = DefineSchema<{
  Scalars: {
    Date: ScalarType<'Date', string>
  }
}>
```

```graphql [GraphQL SDL]
"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z,
compliant with the `date-time` format outlined in section 5.6
of the RFC 3339 profile of the ISO 8601 standard for
representation of dates and times using the Gregorian calendar.
"""
scalar Date
```
:::

### Enum

::: code-group
```ts [schema.ts]
export type RoleEnum =
  | 'ADMIN'
  | 'USER'
  | 'GUEST'

export type Schema = DefineSchema<{
  Enums: {
    RoleEnum: EnumType<'RoleEnum', RoleEnum>
  }
}>
```

```graphql [GraphQL SDL]
enum RoleEnum {
  ADMIN
  USER
  GUEST
}
```
:::

### Input Object

::: code-group
```ts [schema.ts]
type UserInput = InputObject<'UserInput', {
  name: Arg<'String!'>
  role: Arg<'RoleEnum!'>
  email: Arg<'String'>
}>

export type Schema = DefineSchema<{
  Inputs: {
    UserInput: UserInput
  }
}>
```

```graphql [GraphQL SDL]
input UserInput {
  name: String!
  role: RoleEnum!
  email: String
}
```
:::

### Interface, ObjectType and Union

::: code-group
```ts [schema.ts]
type Query = TypeObject<'Query', {
  users: Field<'users', Res<'User!'>>
  todo: Field<'todo', Res<'Todo!'>, {
    id: Arg<'ID!'>
  }>
  allIdItems: Field<'allIdItems', Res<'[ItemWithId!]!'>>
  allData: Field<'allData', Res<'[Data!]!'>>
}>

type Mutation = TypeObject<'Query', {
  addTodo: Field<'addTodo', Res<'Todo!'>, {
    content: Arg<'string!'>
  }>
}>

type Subscription = TypeObject<'Query', {
  watchTodo: Field<'watchTodo', Res<'Todo'>, {
    id: Arg<'ID!'>
  }>
}>

type ItemWithId = InterfaceObject<'ItemWithId', {
  id: Field<'id', Res<'Int!'>>
}, {
  User: User
  Todo: Todo
}>

type Data = Union<'Data', {
  User: User
  Todo: Todo
}>

type User = TypeObject<'Query', {
  id: Field<'id', Res<'ID!'>>
  name: Field<'name', Res<'String!'>>
  email: Field<'email', Res<'String'>>
  todo: Field<'todo', Res<'[Todo!]!'>>
}>

type Todo = TypeObject<'Query', {
  id: Field<'id', Res<'ID!'>>
  title: Field<'title', Res<'String'>>
  content: Field<'content', Res<'String!'>>
  isDone: Field<'isDone', Res<'Boolean!'>>
  owner: Field<'User!', Res<'User!'>>
}>

export type Schema = DefineSchema<{
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
    Todo: Todo
  }
}>
```

```graphql [GraphQL SDL]
interface ItemWithId {
  id: Int!
}

union Data = User | Todo

type Query {
  users: [User!]!
  todo(id: ID!): Todo!
  allIdItems: [ItemWithId!]!
  allData: [Data!]!
}

type Mutation {
  addTodo(input: String!): Todo!
}

type Subscription {
  watchTodo(id: ID!): Todo
}

type User implements ItemWithId {
  id: ID!
  name: String!
  email: String
  todo: [Todo!]!
}

type Todo implements ItemWithId {
  id: ID!
  title: String
  content: String!
  isDone: Boolean!
  owner: User!
}
```
:::

## Type Definition

```ts
export interface ScalarType<
  Name extends string,
  Input = unknown,
  Output = Input,
> { /* internal */ }

export interface EnumType<
  Name extends string,
  Values extends string,
> { /* internal */ }

export interface InputObject<
  Name extends string,
  Fields extends Record<
    string,
    ArgOf<any, string>
  >,
> { /* internal */ }

export interface InterfaceObject<
  Name extends string,
  Fields extends Record<
    string,
    Field<string, any, any>
  >,
  Implements extends Record<string, TypeObject<string, any>>,
> { /* internal */ }

export interface TypeObject<
  Name extends string,
  Fields extends Record<
    string,
    Field<string, any, any>
  >,
  Types extends Record<string, TypeObject<string, any>> = EmptyRecord,
> { /* internal */ }

export interface Union<
  Name extends string,
  Types extends Record<string, TypeObject<string, any>>,
> { /* internal */ }

export interface Field<
  Name extends string,
  Return extends ResOf<any, string>,
  Argument extends Record<string, ArgOf<any, string>> = EmptyRecord,
> { /* internal */ }

export type ArgOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = internal // It converts GraphQL input type to TypeScript type

export type ResOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = internal // It converts GraphQL output type to TypeScript type
```
