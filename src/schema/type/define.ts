import type { EmptyRecord } from '../../utils/object'
import type { Enum, InputObject, InterfaceObject, Scalar, TypeObject, Union } from './types'

export interface DefineSchema<
  PartialTypes extends Partial<UserSchemaTypes>,
> extends UserSchemaTypes {
  Scalars: DefaultSchemaTypes['Scalars'] & PartialTypes['Scalars']
  Enums: DefaultSchemaTypes['Enums'] & PartialTypes['Enums']

  Inputs: Merge<PartialTypes['Inputs'], DefaultSchemaTypes['Inputs']>

  Interfaces: Merge<PartialTypes['Interfaces'], DefaultSchemaTypes['Interfaces']>
  Unions: Merge<PartialTypes['Unions'], DefaultSchemaTypes['Unions']>

  Objects: Merge<PartialTypes['Objects'], DefaultSchemaTypes['Objects']>

  Config: DefaultSchemaTypes['Config'] & PartialTypes['Config']
}
type Merge<T, U> = T extends undefined ? U : T

export interface DefaultSchemaTypes extends UserSchemaTypes {
  Scalars: {
    ID: Scalar<'ID', string>
    String: Scalar<'String', string>
    Int: Scalar<'Int', number>
    Float: Scalar<'Float', number>
    Boolean: Scalar<'Boolean', boolean>
  }
  Enums: EmptyRecord
  Inputs: EmptyRecord
  Interfaces: EmptyRecord
  Unions: EmptyRecord
  Objects: {
    Query: TypeObject<'Query', EmptyRecord>
    Mutation: TypeObject<'Mutation', EmptyRecord>
    Subscription: TypeObject<'Subscription', EmptyRecord>
  }

  Config: EmptyRecord
}

export interface UserSchemaTypes {
  Scalars: Record<string, Scalar<string, unknown, unknown>>
  Enums: Record<string, Enum<string, string>>

  Inputs: Record<string, InputObject<string, any>>

  Unions: Record<string, Union<string, any>>

  Interfaces: Record<string, InterfaceObject<string, any, any>>
  Objects: {
    Query: TypeObject<'Query', any>
    Mutation: TypeObject<'Mutation', any>
    Subscription: TypeObject<'Subscription', any>
  } & Record<string, TypeObject<string, any>>

  Config: Record<string, unknown>
}
