import type { UserSchemaTypes } from '../../schema'
import type { DirectiveInput } from '../directive'
import type { TypedQueryDocumentNode } from '../document-node'
import type { DirectiveDollar } from '../dollar'
import type { GetOperationType, OperationName } from '../operation'
import type { ParseTypeSelection } from '../parser/select'
import type { ProvideOperationSelection } from '../select'
import type { EmptyRecord, Exact } from '../utils/object'
import type { ParseVariables, PrepareVariables, ProvideVariable } from '../variable'

export interface GraphQueryFunction<
  Schema extends UserSchemaTypes,
> {
  <
    Selection extends ProvideOperationSelection<
      Schema['Objects']['Query'],
      EmptyRecord
    >,
  >(
    selection: Exact<ProvideOperationSelection<
      Schema['Objects']['Query'],
      EmptyRecord
    >, Selection>,
  ): TypedQueryDocumentNode<
    ParseTypeSelection<Schema['Objects']['Query'], Selection>,
    EmptyRecord
  >

  <
    Name extends OperationName,
    Selection extends ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      EmptyRecord
    >,
  >(
    name: Name,
    selection: Exact<ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      EmptyRecord
    >, Selection>,
  ): TypedQueryDocumentNode<
    ParseTypeSelection<Schema['Objects'][GetOperationType<Name>], Selection>,
    EmptyRecord
  >

  <
    Name extends OperationName,
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      PrepareVariables<Variables>
    >,
  >(
    name: Name,
    variables: Variables,
    selection: Exact<ProvideOperationSelection<
      Schema['Objects'][GetOperationType<Name>],
      PrepareVariables<Variables>
    >, Selection>,
    directives?: ($: DirectiveDollar<PrepareVariables<Variables>>) => Array<DirectiveInput>,
  ): TypedQueryDocumentNode<
    ParseTypeSelection<Schema['Objects'][GetOperationType<Name>], Selection>,
    ParseVariables<Schema, Variables>
  >
}
