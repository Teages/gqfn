# Schema

::: tip
We suggest to use [@gqfn/cli](../packages/cli) to load the schema.

This page is written for those who want to manually write the schema type.
:::

## Reference

Here is a empty schema type, you can get start with it:

```ts twoslash
import type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType
} from '@gqfn/core/schema'

export type Schema = DefineSchema<{
  // Define your schema here
}>
```

### Scalar

To define a scalar type, you can use the `ScalarType` helper type:

::: code-group
```ts twoslash [schema.ts]
import type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType
} from '@gqfn/core/schema'

// ---cut---
type Scalar_Date = ScalarType<'Date', string, string>
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
```ts twoslash [schema.ts]
import type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType
} from '@gqfn/core/schema'
// ---cut---
export type RoleEnum =
  | 'ADMIN'
  | 'USER'
  | 'GUEST'

type Enum_RoleEnum = EnumType<'RoleEnum', RoleEnum>
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
```ts twoslash [schema.ts]
import type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType
} from '@gqfn/core/schema'

export type Scalar_Int = ScalarType<'Int', number, number>
export type Scalar_Float = ScalarType<'Float', number, number>
export type Scalar_String = ScalarType<'String', string, string>
export type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
export type Scalar_ID = ScalarType<'ID', string | number, string | number>
export type Scalar_Date = ScalarType<'Date', string, string>

export type RoleEnum =
  | 'ADMIN'
  | 'USER'
  | 'GUEST'

type Enum_RoleEnum = EnumType<'RoleEnum', RoleEnum>
// ---cut---
type UserInput = InputObjectType<'UserInput', {
  name: Input<'String!', Scalar_String>
  role: Input<'RoleEnum!', Enum_RoleEnum>
  email: Input<'String', Scalar_String>
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
```ts twoslash [schema.ts]
import type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType
} from '@gqfn/core/schema'

export type Scalar_Int = ScalarType<'Int', number, number>
export type Scalar_Float = ScalarType<'Float', number, number>
export type Scalar_String = ScalarType<'String', string, string>
export type Scalar_Boolean = ScalarType<'Boolean', boolean, boolean>
export type Scalar_ID = ScalarType<'ID', string | number, string | number>
export type Scalar_Date = ScalarType<'Date', string, string>

export type RoleEnum =
  | 'ADMIN'
  | 'USER'
  | 'GUEST'

// ---cut---
type Query = ObjectType<'Query', {
  users: Field<'[User!]!', User>
  todo: Field<'Todo!', Todo, {
    id: Input<'ID!', Scalar_ID>
  }>
  allIdItems: Field<'[ItemWithId!]!', ItemWithId>
  allData: Field<'[Data!]!', Data>
}>

type Mutation = ObjectType<'Mutation', {
  addTodo: Field<'Todo!', Todo, {
    content: Input<'String!', Scalar_String>
  }>
}>

type Subscription = ObjectType<'Subscription', {
  watchTodo: Field<'Todo', Todo, {
    id: Input<'ID!', Scalar_ID>
  }>
}>

type ItemWithId = InterfaceType<'ItemWithId', {
  id: Field<'Int!', Scalar_Int>
}, {
  User: User
  Todo: Todo
}>

type Data = UnionType<'Data', {
  User: User
  Todo: Todo
}>

type User = ObjectType<'User', {
  id: Field<'ID!', Scalar_ID>
  name: Field<'String!', Scalar_String>
  email: Field<'String', Scalar_String>
  todo: Field<'[Todo!]!', Todo>
}>

type Todo = ObjectType<'Todo', {
  id: Field<'ID!', Scalar_ID>
  title: Field<'String', Scalar_String>
  content: Field<'String!', Scalar_String>
  isDone: Field<'Boolean!', Scalar_Boolean>
  owner: Field<'User!', User>
}>

export type Schema = DefineSchema<{
  ItemWithId: ItemWithId
  Data: Data
  Query: Query
  Mutation: Mutation
  Subscription: Subscription
  User: User
  Todo: Todo
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
  Output,
  Input,
> extends BaseScalar<Name, Output, Input> {
  __type__?: () => 'Scalar'
}

export interface EnumType<
  Name extends string,
  Definition extends string,
> extends BaseScalar<
    Name,
    Definition,
    PackedEnum<Definition>
  > {
  __type__?: () => 'Enum'
}

export interface ObjectType<
  Name extends string,
  Fields extends Record<string, Field<any, any, any>>,
> extends BaseObject<Name, Fields, Record<string, never>> {
  __type__?: () => 'Type'
}

export interface UnionType<
  Name extends string,
  Implements extends Record<string, BaseObject<any, any, any>>,
> extends BaseObject<Name, Record<string, never>, Implements> {
  __type__?: () => 'Union'
}

export interface InterfaceType<
  Name extends string,
  Fields extends Record<string, Field<any, any, any>>,
  Implements extends Record<string, BaseObject<any, any, any>>,
> extends BaseObject<Name, Fields, Implements> {
  __type__?: () => 'Interface'
}

export interface InputObjectType<
  Name extends string,
  Fields extends Record<string, Input<any, any>>,
> extends BaseType<'InputObject', Name> {
  __define__?: (fields: Fields) => void
}

export interface Field<
  Modifier extends string,
  Type extends BaseType<any, any>,
  Args extends Record<string, Input<any, any>> = Record<string, never>,
> {
  __define__?: (args: Args) => [Modifier, Type]
}

export interface Input<
  Modifier extends string,
  Type extends BaseType<string, string>,
> {
  __define__?: (modifier: Modifier, type: Type) => void
}

export interface DefineSchema<
  Namespace extends Record<string, BaseType<any, any>>,
> {
  __define__?: () => Namespace
}

export interface BaseScalar<
  Name extends string,
  Output,
  Input,
> extends BaseType<'BaseScalar', Name> {
  __define__?: (input: Input) => Output
}

export interface BaseObject<
  Name extends string,
  Fields extends Record<string, Field<any, any, any>>,
  Implements extends Record<string, BaseObject<string, any, any>>,
> extends BaseType<'BaseObject', Name> {
  __define__?: (Implements: Implements) => Fields
}

export interface BaseType<Base extends string, Name extends string> {
  __base__?: () => Base
  __name__?: () => Name
}
```
