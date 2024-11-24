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
  Enums: Record<string, never>
  Inputs: Record<string, never>
  Interfaces: Record<string, never>
  Unions: Record<string, never>
  Objects: {
    Query: TypeObject<'Query', Record<string, never>>
    Mutation: TypeObject<'Mutation', Record<string, never>>
    Subscription: TypeObject<'Subscription', Record<string, never>>
  }
  Config: Record<string, never>
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
