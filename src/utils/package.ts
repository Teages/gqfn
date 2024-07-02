import type { $enum, gqf, gqp } from '../core'
import type { DefineSchema, UserSchemaTypes } from '../schema'
import type { GraphQueryFunction, GraphQueryPartial } from '../typed'

export interface CreateGqf {
  <Schema extends UserSchemaTypes | undefined = undefined>(): Package<Schema>
}

export type Package<Schema extends UserSchemaTypes | DefineSchema<any> | undefined> =
  Schema extends UserSchemaTypes | DefineSchema<any>
    ? {
        $enum: typeof $enum
        gqf: GraphQueryFunction<Schema>
        gqp: GraphQueryPartial<Schema>
      }
    : {
        $enum: typeof $enum
        gqf: typeof gqf
        gqp: typeof gqp
      }
