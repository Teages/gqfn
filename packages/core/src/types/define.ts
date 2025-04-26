import type { PackedEnum } from './enum'

export interface DefineSchema<
  Namespace extends Record<string, BaseType<any, any>>,
> {
  __define__?: () => Namespace
}

export interface Input<
  Modifier extends string,
  Type extends BaseType<string, string>,
> {
  __define__?: (modifier: Modifier, type: Type) => void
}

export interface Field<
  Modifier extends string,
  Type extends BaseType<any, any>,
  Args extends Record<string, Input<any, any>> = Record<string, never>,
> {
  __define__?: (args: Args) => [Modifier, Type]
}

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
// eslint-disable-next-line ts/no-empty-object-type
> extends BaseObject<Name, Fields, {}> {
  __type__?: () => 'Type'
}
export interface UnionType<
  Name extends string,
  Implements extends Record<string, BaseObject<any, any, any>>,
// eslint-disable-next-line ts/no-empty-object-type
> extends BaseObject<Name, {}, Implements> {
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
