import { $enum, gqfn, gqp } from './core'
import type { CreateGQFn, Package } from './utils/package'
import type { DefineSchema, Schemas, UserSchemaTypes } from './schema'

export { $enum } from './core'
export type { RequireQueryPart, ResultOf, VariablesOf } from './typed'

export const createGQFn: CreateGQFn = () => ({ gqfn, gqp, $enum }) as any

export function useSchema<T extends string>(
  _url?: T,
): Package<LoadFromUrl<T>> {
  return { gqfn, gqp, $enum } as any
}

export type LoadFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? Schemas[T]
      : undefined
    : undefined
