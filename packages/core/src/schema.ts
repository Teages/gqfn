import type { DefineSchema } from './types'

export type {
  DefineSchema,
  EnumType,
  Field,
  Input,
  InputObjectType,
  InterfaceType,
  ObjectType,
  ScalarType,
  UnionType,
} from './types'

export interface Schemas {}

export type SchemaFromUrl<T extends string>
  = T extends keyof Schemas
    ? Schemas[T] extends DefineSchema<any>
      ? Schemas[T]
      : never
    : never
