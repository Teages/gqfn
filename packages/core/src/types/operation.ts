import type { Exact } from '../internal/utils'
import type { UserSchemaTypes } from '../schema'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { TypedDocumentNode } from './document'
import type { ParseSelectionSet } from './parser/selection'
import type { PrepareOperationSelectionSet } from './selection'
import type { PrepareVariables, RequireVariables, VariablesDefinition } from './variable'

export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`
export type GetOperationType<T extends OperationName> =
  T extends `query${string}` ? 'Query'
    : T extends `mutation${string}` ? 'Mutation'
      : T extends `subscription${string}` ? 'Subscription'
        : never

export interface GraphQueryFunctionCore<
  Schema extends UserSchemaTypes,
> {
  <
    Selection extends PrepareOperationSelectionSet<
      Schema['Objects']['Query'],
      Record<string, never>
    >,
  >(
    selection: Exact<
      PrepareOperationSelectionSet<
        Schema['Objects']['Query'],
        Record<string, never>
      >,
      Selection
    >,
  ): TypedDocumentNode<
    ParseSelectionSet<Schema['Objects']['Query'], Selection>,
    Record<string, never>
  >

  <
    Name extends OperationName,
    Selection extends PrepareOperationSelectionSet<
      Schema['Objects'][GetOperationType<Name>],
      Record<string, never>
    >,
  >(
    name: Name,
    selection: Exact<
      PrepareOperationSelectionSet<
        Schema['Objects'][GetOperationType<Name>],
        Record<string, never>
      >,
      Selection
    >,
  ): TypedDocumentNode<
    ParseSelectionSet<Schema['Objects'][GetOperationType<Name>], Selection>,
    Record<string, never>
  >

  <
    Name extends OperationName,
    Variables extends VariablesDefinition<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends PrepareOperationSelectionSet<
      Schema['Objects'][GetOperationType<Name>],
      PrepareVariables<Variables>
    >,
  >(
    name: Name,
    variables: Variables,
    selection: Exact<
      PrepareOperationSelectionSet<
        Schema['Objects'][GetOperationType<Name>],
        PrepareVariables<NoInfer<Variables>>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<PrepareVariables<NoInfer<Variables>>>,
  ): TypedDocumentNode<
    ParseSelectionSet<Schema['Objects'][GetOperationType<Name>], Selection>,
    RequireVariables<Schema, Variables>
  >
}
