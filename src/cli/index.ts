import type { DefineSchema, UserSchemaTypes } from '../schema'
import type { GqfPackage } from '../utils/package'
import { $enum, gqf, gqp } from '../core'

export { sync } from './sync'
export type { Config } from './config'

export interface Schemas {}

export type LoadFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? Schemas[T]
      : undefined
    : undefined

export function useSchema<T extends string>(
  _url?: T,
): GqfPackage<LoadFromUrl<T>> {
  return { gqf, gqp, $enum } as any
}
