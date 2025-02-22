import type { VariableIdentitySymbol } from '../internal/symbol'
import type { RelaxedOptional, Trim, Values } from '../internal/utils'
import type { ArgOf, BaseType, ParseArg, UserSchemaTypes } from '../schema'
import type { DollarPackage, VariablesDefinitionDollar } from './dollar'

export type VariablesDefinitionDollarPackage<T extends string> =
  ($: VariablesDefinitionDollar) => DollarPackage<T>
export type VariablesDefinition<T extends string> =
  Record<string, T | VariablesDefinitionDollarPackage<T>>

export interface Variable<T extends string> {
  [VariableIdentitySymbol]?: () => T
}

export type PrepareVariables<T extends VariablesDefinition<string>> = {
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Type} = ${infer _Default}`
    ? PrepareVariable<Type>
    : PrepareVariable<UnpackDollar<T[K]>>
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

export type RequireVariables<
  Schema extends UserSchemaTypes,
  T extends VariablesDefinition<string>,
> = RelaxedOptional<{
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Type} = ${infer _Default}`
    ? ParseArg<ArgOf<Schema, Trim<Type>>, false> extends never
      ? never
      : ParseArg<ArgOf<Schema, Type>, false> | undefined
    : ParseArg<ArgOf<Schema, UnpackDollar<T[K]>>, false> extends never
      ? never
      : ParseArg<ArgOf<Schema, UnpackDollar<T[K]>>, false>
}>

type PrepareVariable<
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<PrepareVariable<F>>
  : TKey extends `[${infer F}]`
    ? PrepareVariable<F> extends never
      ? never
      : Array<PrepareVariable<F>> | null | undefined
    : Variable<TKey> | null | undefined

type UnpackDollar<T extends Values<VariablesDefinition<string>>> =
  T extends (($: VariablesDefinitionDollar) => DollarPackage<infer U extends string, boolean>)
    ? U
    : T
