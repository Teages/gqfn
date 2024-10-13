import type { GraphQueryFunction, GraphQueryPartial } from '..'
import type { $enum, gqfn, gqp } from '../../runtime'
import type { DefineSchema, UserSchemaTypes } from '../../schema'

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
