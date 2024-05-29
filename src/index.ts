import type { gqp } from './core'
import { gqf } from './core'
import type { UserSchemaTypes } from './schema'
import type { GraphQueryFunction, GraphQueryPartial } from './typed'

export { $enum } from './core'
export type { RequireQueryPart, ResultOf, VariablesOf } from './typed'

export function defineGqf<
  Schema extends UserSchemaTypes | undefined = undefined,
>(): DefineGqf<Schema> {
  return gqf as any
}

type DefineGqf<Schema extends UserSchemaTypes | undefined> =
  Schema extends UserSchemaTypes
    ? {
        gqf: GraphQueryFunction<Schema>
        gqp: GraphQueryPartial<Schema>
      }
    : {
        gqf: typeof gqf
        gqp: typeof gqp
      }
