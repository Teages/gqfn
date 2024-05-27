import type { UserSchemaTypes } from '../schema'
import type { EmptyRecord } from '../utils/object'
import type { DirectiveInputWithDollar } from './directive'
import type { TypedQueryDocumentNode } from './document-node'
import type { OperationName } from './operation'
import type { ParseVariables, PrepareVariables, ProvideVariable } from './variable'

export interface GraphQueryFunction<
  Schema extends UserSchemaTypes,
> {
  <
    Selection,
  >(
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<EmptyRecord>>,
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

  <
    Name extends OperationName,
    Selection,
  >(
    name: Name,
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<EmptyRecord>>,
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

  <
    Name extends OperationName,
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
    Selection,
  >(
    name: Name,
    variables: Variables,
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<PrepareVariables<Variables>>>,
  ): TypedQueryDocumentNode<unknown, ParseVariables<Schema, Variables>>
}
