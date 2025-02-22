import type { EnumPackage } from '../runtime/enum'
import type { DefineSchema } from './define'
import type { BaseType } from './types'

type FindInput<
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
> = TInput extends BaseType<any, string>
  ? TInput | null | undefined
  : never

export type ArgOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<ArgOf<Schema, F>>
  : TKey extends `[${infer F}]`
    ? ArgOf<Schema, F> extends never
      ? never
      : Array<ArgOf<Schema, F>> | null | undefined
    : FindInput<Schema, TKey>

export type ParseArg<
  T extends ArgOf<any, string>,
  Inline extends boolean = true, // will parse to ts type if false
> = T extends never
  ? never
  : T extends Array<infer U>
    ? Array<ParseGQFnType<ParseArg<U>>>
    : T extends BaseType<any, string>
      ? T['Input']extends Record<string, unknown>
        ? {
            [K in keyof T['Input']]: ParseGQFnType<ParseArg<T['Input'][K]>>
          }
        : Inline extends true
          ? T['Input']
          : ParseGQFnType<T['Input']>
      : T

type ParseGQFnType<T> =
  T extends EnumPackage<infer U>
    ? U
    : T extends Record<string, unknown>
      ? { [K in keyof T]: ParseGQFnType<T[K]> }
      : T

type FindOutput<
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
> = TOutput extends BaseType<any, string>
  ? TOutput | null | undefined
  : never

export type ResOf<
  Schema extends DefineSchema<any>,
  TKey extends string,
> = TKey extends `${infer F}!`
  ? NonNullable<ResOf<Schema, F>>
  : TKey extends `[${infer F}]`
    ? ResOf<Schema, F> extends never
      ? never
      : Array<ResOf<Schema, F>> | null | undefined
    : FindOutput<Schema, TKey>
