import type { UserSchemaTypes } from '../schema'
import type { GqfPackage } from '../utils/package'
import { gqf, gqp } from '../core'

export interface Schemas {
}

export type LoadFromUrl<T extends string> =
  Schemas extends {
    [key in T]: infer U extends UserSchemaTypes
  } ? U : undefined

export function useSchema<T extends string>(
  _url?: T,
): GqfPackage<LoadFromUrl<T>> {
  return { gqf, gqp } as any
}
