import type { DefineSchema, Schemas, UserSchemaTypes } from '../schema'
import type { Package } from '../utils/package'
import { $enum, gqfn, gqp } from '../core'

export { sync, type Output } from './sync'
export type { Config, ClientConfig, SchemaConfig } from './config'

export type LoadFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? Schemas[T]
      : undefined
    : undefined

export function useSchema<T extends string>(
  _url?: T,
): Package<LoadFromUrl<T>> {
  return { gqfn, gqp, $enum } as any
}
export type { Package as GQFnPackage }
