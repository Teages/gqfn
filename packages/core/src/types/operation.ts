import type { Exact } from '../internal/utils'
import type { DefineSchema } from './define'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { TypedDocumentNode } from './document'
import type { PrepareSelection } from './prepare'
import type { ParseSelection } from './result'
import type { PrepareVariables, RequireVariables, VariablesDefinition } from './variable'

export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`
export type GetOperationType<T extends OperationName>
  = T extends `query${string}` ? 'Query'
    : T extends `mutation${string}` ? 'Mutation'
      : T extends `subscription${string}` ? 'Subscription'
        : never

export type OperationTypeObject<
  Schema extends DefineSchema<any>,
  Type extends string,
> = Schema extends DefineSchema<infer Namespace>
  ? Type extends keyof Namespace
    ? Namespace[Type]
    : never
  : never

export interface GraphQueryFunctionCore<
  Schema extends DefineSchema<any>,
> {
  <
    Selection extends PrepareSelection<
      OperationTypeObject<Schema, 'Query'>,
      Record<string, never>
    >,
  >(
    selection: Exact<
      PrepareSelection<
        OperationTypeObject<Schema, 'Query'>,
        Record<string, never>
      >,
      Selection
    >,
  ): TypedDocumentNode<
    ParseSelection<OperationTypeObject<Schema, 'Query'>, Selection>,
    Record<string, never>
  >

  <
    Name extends OperationName,
    Selection extends PrepareSelection<
      OperationTypeObject<Schema, GetOperationType<Name>>,
      Record<string, never>
    >,
  >(
    name: Name,
    selection: Exact<
      PrepareSelection<
        OperationTypeObject<Schema, GetOperationType<Name>>,
        Record<string, never>
      >,
      Selection
    >,
  ): TypedDocumentNode<
    ParseSelection<OperationTypeObject<Schema, GetOperationType<Name>>, Selection>,
    Record<string, never>
  >

  <
    Name extends OperationName,
    Variables extends VariablesDefinition<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends PrepareSelection<
      OperationTypeObject<Schema, GetOperationType<Name>>,
      PrepareVariables<Variables>
    >,
  >(
    name: Name,
    variables: Variables,
    selection: Exact<
      PrepareSelection<
        OperationTypeObject<Schema, GetOperationType<Name>>,
        PrepareVariables<NoInfer<Variables>>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<PrepareVariables<NoInfer<Variables>>>,
  ): TypedDocumentNode<
    ParseSelection<OperationTypeObject<Schema, GetOperationType<Name>>, Selection>,
    RequireVariables<Schema, Variables>
  >
}
