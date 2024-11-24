import type { Exact } from '../internal/utils'
import type { TypeObject, UserSchemaTypes } from '../schema'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { DollarPayload } from './dollar'
import type { FragmentBase, FragmentName } from './fragment'
import type { AnalyzedSelectionSetComplex, ParseSelectionObject } from './parser/selection'
import type { PrepareOperationSelectionSet } from './selection'
import type { PrepareVariables, VariablesDefinition } from './variable'

const OperationPartialBaseSymbol = Symbol('@gqfn/core:OperationPartialBase')
export interface OperationPartial<
  T extends TypeObject<string, any, any>,
  P,
  Variables extends DollarPayload,
> {
  [OperationPartialBaseSymbol]: T
  ($: Variables): P
}

export type RequireOperationPartialData<
  T extends OperationPartial<any, any, any>,
> = T extends OperationPartial<infer Base, infer P, any>
  ? ParseSelectionObject<Base, P>
  : never

export interface GraphQueryFunctionPartial<
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
  ): OperationPartial<
    FragmentBase<Schema>[Type],
    AnalyzedSelectionSetComplex<Selection>,
    Record<string, any>
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
  ): OperationPartial<
    FragmentBase<Schema>[Type],
    AnalyzedSelectionSetComplex<Selection>,
    PrepareVariables<Variables>
  >
}
