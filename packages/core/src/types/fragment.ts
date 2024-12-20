import type { Exact } from '../internal/utils'
import type { UserSchemaTypes } from '../schema'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { TypedDocumentNode } from './document'
import type { ParseSelectionSet } from './parser/selection'
import type { PrepareOperationSelectionSet } from './selection'
import type { PrepareVariables, RequireVariables, VariablesDefinition } from './variable'

export type FragmentType = 'fragment'
export type FragmentName = `${FragmentType} ${string}`
export type FragmentBaseDefinition = `on ${string}`
export type FragmentBase<Schema extends UserSchemaTypes> = Schema['Objects'] & Schema['Interfaces'] & Schema['Unions']

export interface GraphQueryFunctionFragment<
  Schema extends UserSchemaTypes,
> {
  <
    Name extends FragmentName,
    Type extends keyof FragmentBase<Schema>,
    Selection extends PrepareOperationSelectionSet<
      FragmentBase<Schema>[Type],
      Record<string, never>
    >,
  >(
    name: Name,
    base: `on ${Type & string}`,
    selection: Exact<
      PrepareOperationSelectionSet<
        FragmentBase<Schema>[Type],
        Record<string, never>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<Record<string, never>>,
  ): TypedDocumentNode<
    ParseSelectionSet<FragmentBase<Schema>[Type], Selection>,
    Record<string, never>
  >

  <
    Name extends FragmentName,
    Type extends keyof FragmentBase<Schema>,
    Variables extends VariablesDefinition<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends PrepareOperationSelectionSet<
      FragmentBase<Schema>[Type],
      PrepareVariables<NoInfer<Variables>>
    >,
  >(
    name: Name,
    base: `on ${Type & string}`,
    variables: Variables,
    selection: Exact<
      PrepareOperationSelectionSet<
        FragmentBase<Schema>[Type],
        PrepareVariables<NoInfer<Variables>>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<Record<string, never>>,
  ): TypedDocumentNode<
    ParseSelectionSet<FragmentBase<Schema>[Type], Selection>,
    RequireVariables<Schema, Variables>
  >
}
