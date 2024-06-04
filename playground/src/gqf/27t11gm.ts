/* eslint-ignore */
import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'

type Query = TypeObject<'Query', {
  hello: Field<'hello', Res<'String!'>, {
    name: Arg<'String'>
  }>
  user: Field<'user', Res<'User'>, {
    id: Arg<'ID'>
  }>
  users: Field<'users', Res<'[User!]!'>>
}>

type User = TypeObject<'User', {
  id: Field<'id', Res<'ID!'>>
  name: Field<'name', Res<'String!'>>
}>

export type Schema = DefineSchema<{
  Objects: {
    Query: Query
    User: User
  }
}>

type Arg<T extends string> = ArgOf<Schema, T>
type Res<T extends string> = ResOf<Schema, T>

declare module '@teages/gqf/cli' {
  interface Schemas {
    'https://graphql-test.teages.xyz/graphql-user': Schema
  }
}
