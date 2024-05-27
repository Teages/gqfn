import type { UserSchemaTypes } from '../schema'
import type { EmptyRecord } from '../utils/object'
import type { DirectiveInputWithDollar } from './directive'
import type { TypedQueryDocumentNode } from './document-node'
import type { GetOperationType, OperationName } from './operation'
import type { ProvideOperationSelection } from './select'
import type { ParseVariables, PrepareVariables, ProvideVariable } from './variable'

export interface GraphQueryFunction<
  Schema extends UserSchemaTypes,
> {
  <
    Selection extends ProvideOperationSelection<
      Schema['Objects'][GetOperationType<'query'>],
      EmptyRecord
    >,
  >(
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<EmptyRecord>>,
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

  <
    Name extends OperationName,
    Selection extends ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      EmptyRecord
    >,
  >(
    name: Name,
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<EmptyRecord>>,
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

  <
    Name extends OperationName,
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      ParseVariables<Schema, Variables>
    >,
  >(
    name: Name,
    variables: Variables,
    selection: Selection,
    directives?: Array<DirectiveInputWithDollar<PrepareVariables<Variables>>>,
  ): TypedQueryDocumentNode<unknown, ParseVariables<Schema, Variables>>
}
