import type { gqf, gqp } from '../core'
import type { UserSchemaTypes } from '../schema'
import type { GraphQueryFunction, GraphQueryPartial } from '../typed'

export interface DefineGqf {
  <Schema extends UserSchemaTypes | undefined = undefined>(): GqfPackage<Schema>
}

export type GqfPackage<Schema extends UserSchemaTypes | undefined> =
  Schema extends UserSchemaTypes
    ? {
        gqf: GraphQueryFunction<Schema>
        gqp: GraphQueryPartial<Schema>
      }
    : {
        gqf: typeof gqf
        gqp: typeof gqp
      }
