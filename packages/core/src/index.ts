import type { DefineSchema, Schemas, UserSchemaTypes } from './schema'
import { gqfn } from './runtime'

export const createGQFn = () => ({ gqfn })

export function useSchema<T extends string>(
  _url?: T,
): { gqfn: typeof gqfn } {
  return { gqfn }
}

export type LoadFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? Schemas[T]
      : undefined
    : undefined
