import type { EnumPackage } from '../../core/dollar'
import type { Nullable } from '../../utils/object'
import type { DefineSchema } from './define'
import type { BaseType } from './types'

export type FindInput<
  Schema extends DefineSchema<any>,
  TKey extends keyof (
    & Schema['Scalars']
    & Schema['Enums']
    & Schema['Inputs']
  ),
  TInput = (
    & Schema['Scalars']
    & Schema['Enums']
    & Schema['Inputs']
  )[TKey],
> = TInput extends BaseType<any, string> ? TInput : never

export type ArgOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<ArgOf<Schema, F>>
  : TKey extends `[${infer F}]`
    ? ArgOf<Schema, F> extends never
      ? never
      : Nullable<Array<ArgOf<Schema, F>>>
    : Nullable<FindInput<Schema, TKey>>

export type ParseArg<
  T extends ArgOf<any, string>,
  Inline extends boolean = true, // will parse to ts type if false
> = T extends never
  ? never
  : T extends Array<infer U>
    ? Array<ParseArg<U>>
    : T extends BaseType<any, string>
      ? T['Input']extends Record<string, unknown>
        ? {
            [K in keyof T['Input']]: ParseArg<T['Input'][K]>
          }
        : Inline extends true
          ? T['Input']
          : ParseGqfType<T['Input']>
      : T

export type ParseGqfType<T> =
  T extends EnumPackage<infer U>
    ? U
    : T

export type FindOutput<
  Schema extends DefineSchema<any>,
  TKey extends keyof (
    & Schema['Scalars']
    & Schema['Enums']
    & Schema['Objects']
    & Schema['Interfaces']
    & Schema['Unions']
  ),
  TOutput = (
    & Schema['Scalars']
    & Schema['Enums']
    & Schema['Objects']
    & Schema['Interfaces']
    & Schema['Unions']
  )[TKey],
> = TOutput extends BaseType<any, string> ? TOutput : never

export type ResOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<ResOf<Schema, F>>
  : TKey extends `[${infer F}]`
    ? ResOf<Schema, F> extends never
      ? never
      : Nullable<Array<ResOf<Schema, F>>>
    : Nullable<FindOutput<Schema, TKey>>

export type ParseRes<
  T extends ResOf<any, string>,
> = T extends never
  ? never
  : T extends Array<infer U>
    ? Array<ParseRes<U>>
    : T extends BaseType<any, string>
      ? T['Output'] extends Record<string, unknown>
        ? {
            [K in keyof T['Output']]: ParseRes<T['Output'][K]>
          }
        : T['Output']
      : never
