import type { UserSchemaTypes } from '../schema'
import type { EmptyRecord, Exact } from '../utils/object'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { TypedQueryDocumentNode } from './document-node'
import type { DirectiveDollar } from './dollar'
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
    selection: Exact<ProvideOperationSelection<
      Schema['Objects'][GetOperationType<'query'>],
      EmptyRecord
    >, Selection>,
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

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
  ): TypedQueryDocumentNode<unknown, EmptyRecord>

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
  ): TypedQueryDocumentNode<unknown, ParseVariables<Schema, Variables>>
}
