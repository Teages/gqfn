import type { $enum, gqfn, gqp } from '../core'
import type { DefineSchema, UserSchemaTypes } from '../schema'
import type { GraphQueryFunction, GraphQueryPartial } from '../typed'

export interface CreateGQFn {
  <Schema extends UserSchemaTypes | undefined = undefined>(): Package<Schema>
}

export type Package<Schema extends UserSchemaTypes | DefineSchema<any> | undefined> =
  Schema extends UserSchemaTypes | DefineSchema<any>
    ? {
        $enum: typeof $enum
        gqfn: GraphQueryFunction<Schema>
        gqp: GraphQueryPartial<Schema>
      }
    : {
        $enum: typeof $enum
        gqfn: typeof gqfn
        gqp: typeof gqp
      }
