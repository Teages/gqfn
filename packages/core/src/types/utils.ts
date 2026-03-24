import type { GraphQueryFunction } from '.'
import type { BaseObject, BaseScalar, BaseType, DefineSchema, Field, Input, InputObjectType, ScalarType } from './define'
import type { AcceptVariable } from './variable'

export type TypenameField<Name extends string>
  = Field<ScalarType<'String', Name, Name>>

export type Typename<T extends BaseType<any, any>>
  = T extends BaseObject<infer Name, any, infer Implements>
    ? Implements extends Record<string, never>
      ? Name
      : keyof Implements
    : never

export type ExtractBaseType<T>
  = NonNullable<T> extends readonly [infer Inner]
    ? ExtractBaseType<Inner>
    : NonNullable<T>

export type ModifiedName<Modifier extends string>
  = Modifier extends `${string}!!`
    ? never
    : Modifier extends `${infer F}!`
      ? ModifiedName<F>
      : Modifier extends `[${infer F}]`
        ? ModifiedName<F>
        : Modifier

export type ModifierToTypeExpr<
  Modifier extends string,
  Type extends BaseType<any, any>,
>
  = Modifier extends `${string}!!`
    ? never
    : Modifier extends `${infer F}!`
      ? _ModifierToTypeExprCore<F, Type>
      : _ModifierToTypeExprCore<Modifier, Type> | null

type _ModifierToTypeExprCore<
  Modifier extends string,
  Type extends BaseType<any, any>,
>
  = Modifier extends `[${infer F}]`
    ? [ModifierToTypeExpr<F, Type>]
    : Type extends BaseType<any, Modifier>
      ? Type
      : never

export type TypeExprToModifier<T>
  = [T] extends [never]
    ? never
    : null extends T
      ? _TypeExprToModifierCore<NonNullable<T>>
      : `${_TypeExprToModifierCore<T>}!`

type _TypeExprToModifierCore<T>
  = [T] extends [readonly [infer Inner]]
    ? `[${TypeExprToModifier<Inner>}]`
    : T extends BaseType<any, infer Name>
      ? Name
      : never

export type FindType<Schema, Name extends string>
  = Schema extends DefineSchema<infer Namespace>
    ? Name extends keyof Namespace
      ? Namespace[Name]
      : never
    : never

export type RequireInput<T extends Input<any>>
  = T extends Input<infer TypeExpr>
    ? ExtractBaseType<TypeExpr> extends BaseScalar<any, any, infer InputType>
      ? ParseInputModifier<TypeExpr, InputType>
      : ExtractBaseType<TypeExpr> extends InputObjectType<any, infer Fields>
        ? ParseInputModifier<TypeExpr, { [K in keyof Fields]: RequireInput<Fields[K]> }>
        : never
    : never

export type RequireInputOrVariable<T extends Input<any>>
  = T extends Input<infer TypeExpr>
    ? ExtractBaseType<TypeExpr> extends BaseScalar<any, any, infer InputType>
      ? ParseInputModifier<TypeExpr, InputType> | AcceptVariable<TypeExprToModifier<TypeExpr>>
      : ExtractBaseType<TypeExpr> extends InputObjectType<any, infer Fields>
        ? ParseInputModifier<TypeExpr, { [K in keyof Fields]: RequireInputOrVariable<Fields[K]> }> | AcceptVariable<TypeExprToModifier<TypeExpr>>
        : never
    : never

export type ParseOutputModifier<TypeExpr, U>
  = null extends TypeExpr
    ? _ParseOutputModifierCore<NonNullable<TypeExpr>, U> | null | undefined
    : _ParseOutputModifierCore<TypeExpr, U>

type _ParseOutputModifierCore<TypeExpr, U>
  = [TypeExpr] extends [readonly [infer Inner]]
    ? Array<ParseOutputModifier<Inner, U>>
    : U

export type ParseInputModifier<TypeExpr, U>
  = RelexInputArray<_ParseInputModifier<TypeExpr, U>, U>

type _ParseInputModifier<TypeExpr, U>
  = null extends TypeExpr
    ? _ParseInputModifierCore<NonNullable<TypeExpr>, U> | null | undefined
    : _ParseInputModifierCore<TypeExpr, U>

type _ParseInputModifierCore<TypeExpr, U>
  = [TypeExpr] extends [readonly [infer Inner]]
    ? Array<_ParseInputModifier<Inner, U>>
    : U

export type SchemaRequire<GQFn extends GraphQueryFunction<any>, Modifier extends string>
  = GQFn extends GraphQueryFunction<infer Schema>
    ? RequireInput<Input<ModifierToTypeExpr<Modifier, FindType<Schema, ModifiedName<Modifier>>>>>
    : never

type RelexInputArray<T, U>
  = [T] extends [never]
    ? never
    : T extends Array<any>
      ? T | U
      : T
