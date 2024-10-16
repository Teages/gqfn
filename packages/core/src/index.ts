import type { DefineSchema, Schemas, UserSchemaTypes } from './schema'
import type { CreateGQFn, Package } from './types/utils/package'
import { $enum, gqfn, gqp } from './runtime'

export { $enum } from './runtime'
export type { RequireQueryPart, ResultOf, VariablesOf } from './types'

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
