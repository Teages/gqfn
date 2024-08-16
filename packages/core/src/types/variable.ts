import type { ArgOf, BaseType, ParseArg, UserSchemaTypes } from '../schema'
import type { HiddenSymbol, Nullable, RelaxedOptional, Values } from './utils/object'
import type { Trim } from './utils/string'
import type { DollarContext, VariableDollar } from './dollar'

export type ProvideVariable<T extends string> =
  Record<string, T | (($: VariableDollar) => DollarContext<T, boolean>)>

export type ParseVariables<
  Schema extends UserSchemaTypes,
  T extends ProvideVariable<string>,
> = RelaxedOptional<{
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Type} = ${infer _Default}`
    ? ParseArg<ArgOf<Schema, Trim<Type>>, false> extends never
      ? never
      : ParseArg<ArgOf<Schema, Type>, false> | undefined
    : ParseArg<ArgOf<Schema, UnpackDollar<T[K]>>, false> extends never
      ? never
      : ParseArg<ArgOf<Schema, UnpackDollar<T[K]>>, false>
}>

export interface Variable<
  U extends string,
> {
  [HiddenSymbol]?: () => U
}

export type AcceptVariables<
  T extends ArgOf<any, string>,
> = T extends never
  ? never
  : T extends Array<infer U>
    ? Array<ParseArg<U>>
    : T extends BaseType<any, string>
      ? T['Input']extends Record<string, unknown>
        ? {
            [K in keyof T['Input']]: AcceptVariables<T['Input'][K]>
          }
        : T['Input'] | Variable<T['Name']>
      : T

export type ExtractVariables<T> = T extends Variable<infer U> ? U : T

export type PrepareVariables<
  T extends ProvideVariable<string>,
> = {
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Type} = ${infer _Default}`
    ? Var<Type>
    : Var<UnpackDollar<T[K]>>
}
type UnpackDollar<T extends Values<ProvideVariable<string>>> =
  T extends (($: VariableDollar) => DollarContext<infer U extends string, boolean>)
    ? U
    : T
type Var<
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<Var<F>>
  : TKey extends `[${infer F}]`
    ? Var<F> extends never
      ? never
      : Nullable<Array<Var<F>>>
    : Nullable<Variable<TKey>>
