import type { EmptyRecord } from '../types/utils/object'
import type { EnumType, InputObject, InterfaceObject, ScalarType, TypeObject, Union } from './types'

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
    ID: ScalarType<'ID', string>
    String: ScalarType<'String', string>
    Int: ScalarType<'Int', number>
    Float: ScalarType<'Float', number>
    Boolean: ScalarType<'Boolean', boolean>
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
  Scalars: Record<string, ScalarType<string, unknown, unknown>>
  Enums: Record<string, EnumType<string, string>>

  Inputs: Record<string, InputObject<string, any>>

  Unions: Record<string, Union<string, any>>

  Interfaces: Record<string, InterfaceObject<string, any, any>>
  Objects: {
    Query?: TypeObject<'Query', any>
    Mutation?: TypeObject<'Mutation', any>
    Subscription?: TypeObject<'Subscription', any>
  } & Record<string, TypeObject<string, any>>

  Config: Record<string, unknown>
}
