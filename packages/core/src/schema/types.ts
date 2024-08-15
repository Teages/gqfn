import type { DollarEnum } from '../types/dollar'
import type { EmptyRecord } from '../utils/object'
import type { ArgOf, ResOf } from './utils'

export interface Field<
  Name extends string,
  Return extends ResOf<any, string>,
  Argument extends Record<string, ArgOf<any, string>> = EmptyRecord,
> {
  Name: Name
  Argument: Argument
  Return: Return
}

export interface Union<
  Name extends string,
  Types extends Record<string, TypeObject<string, any>>,
> extends TypeObject<Name, EmptyRecord, Types> {}

export interface InterfaceObject<
  Name extends string,
  Fields extends Record<
    string,
    Field<string, any, any>
  >,
  Implements extends Record<string, TypeObject<string, any>>,
> extends TypeObject<Name, Fields, Implements> {}

export interface TypeObject<
  Name extends string,
  Fields extends Record<
    string,
    Field<string, any, any>
  >,
  Types extends Record<string, TypeObject<string, any>> = EmptyRecord,
> extends BaseType<'TypeObject', Name> {
  Input: never
  Output: {
    [K in keyof Fields]: Fields[K]['Return']
  }
  Fields: Fields
  Types: Types
}

export interface InputObject<
  Name extends string,
  Fields extends Record<
    string,
    ArgOf<any, string>
  >,
> extends BaseType<'InputObject', Name> {
  Input: Fields
  Output: never
}

export interface ScalarType<
  Name extends string,
  Input = unknown,
  Output = Input,
> extends BaseType<'Scalar', Name> {
  Input: Input
  Output: Output
}

export interface EnumType<
  Name extends string,
  Values extends string,
> extends BaseType<'Enum', Name> {
  Input: DollarEnum<Values>
  Output: Values
}

export interface BaseType<
  Type extends 'Enum' | 'Scalar' | 'InputObject' | 'TypeObject' | 'Variable',
  Name extends string,
> {
  __type?: Type
  Name: Name
  Input: unknown
  Output: unknown
}
