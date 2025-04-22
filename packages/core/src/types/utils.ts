import type { GraphQueryFunction } from '.'
import type { BaseObject, BaseScalar, BaseType, DefineSchema, Field, Input, InputObjectType, ScalarType } from './define'
import type { AcceptVariable } from './variable'

export type TypenameField<Name extends string> =
  Field<'String', ScalarType<'String', Name, Name>>

export type Typename<T extends BaseType<any, any>> =
  T extends BaseObject<infer Name, any, infer Implements>
    ? Implements extends Record<string, never>
      ? Name
      : keyof Implements
    : never

export type ModifiedName<Modifier extends string> =
  Modifier extends `${string}!!`
    ? never
    : Modifier extends `${infer F}!`
      ? ModifiedName<F>
      : Modifier extends `[${infer F}]`
        ? ModifiedName<F>
        : Modifier

export type FindType<Schema, Name extends string> =
  Schema extends DefineSchema<infer Namespace>
    ? Name extends keyof Namespace
      ? Namespace[Name]
      : never
    : never

export type RequireInput<T extends Input<any, any>> =
  T extends Input<infer Modifier, infer Type>
    ? Type extends BaseScalar<any, any, infer InputType>
      ? ParseInputModifier<Modifier, Type, InputType>
      : Type extends InputObjectType<any, infer Fields>
        ? ParseInputModifier<Modifier, Type, { [K in keyof Fields]: RequireInput<Fields[K]> }>
        : never
    : never

export type RequireInputOrVariable<T extends Input<any, any>> =
  T extends Input<infer Modifier, infer Type>
    ? Type extends BaseScalar<any, any, infer InputType>
      ? ParseInputModifier<Modifier, Type, InputType> | AcceptVariable<Modifier>
      : Type extends InputObjectType<any, infer Fields>
        ? ParseInputModifier<Modifier, Type, { [K in keyof Fields]: RequireInputOrVariable<Fields[K]> }> | AcceptVariable<Modifier>
        : never
    : never

export type ParseOutputModifier<
  Modifier extends string,
  T extends BaseType<any, any>,
  U,
> =
  Modifier extends `${string}!!`
    ? never
    : Modifier extends `${infer F}!`
      ? ParseOutputModifier<F, T, U> & {}
      : Modifier extends `[${infer F}]`
        ? ParseOutputModifier<F, T, U> extends never
          ? never
          : Array<ParseOutputModifier<F, T, U>> | null | undefined
        : T extends BaseType<any, Modifier>
          ? U | null | undefined
          : never

export type ParseInputModifier<
  Modifier extends string,
  T extends BaseType<any, any>,
  U,
> = RelexInputArray<_ParseInputModifier<Modifier, T, U>, U>
type _ParseInputModifier<
  Modifier extends string,
  T extends BaseType<any, any>,
  U,
> =
  Modifier extends `${string}!!`
    ? never
    : Modifier extends `${infer F}!`
      ? _ParseInputModifier<F, T, U> & {}
      : Modifier extends `[${infer F}]`
        ? _ParseInputModifier<F, T, U> extends never
          ? never
          : Array<_ParseInputModifier<F, T, U>> | null | undefined
        : T extends BaseType<any, Modifier>
          ? U | null | undefined
          : never

export type SchemaRequire<GQFn extends GraphQueryFunction<any>, Modifier extends string>
  = GQFn extends GraphQueryFunction<infer Schema>
    ? RequireInput<Input<Modifier, FindType<Schema, ModifiedName<Modifier>>>>
    : never

type RelexInputArray<T, U> =
  [T] extends [never]
    ? never
    : T extends Array<any>
      ? T | U
      : T
