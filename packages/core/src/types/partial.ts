import type { Exact, Expand } from '../internal/utils'
import type { BaseObject, DefineSchema } from './define'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { DollarPayload } from './dollar'
import type { FragmentBase, FragmentName } from './fragment'
import type { PrepareSelection } from './prepare'
import type { AnalyzedObjectSelection, ParseObjectSelectionContext } from './result'
import type { PrepareVariables, VariablesDefinition, VariableStore } from './variable'

const OperationPartialBaseSymbol = Symbol('@gqfn/core:OperationPartialBase')
export interface OperationPartial<
  T extends BaseObject<string, any, any>,
  P,
  Variables extends VariableStore,
> {
  [OperationPartialBaseSymbol]: T
  ($: DollarPayload<Variables>): P
}

export type RequireOperationPartialData<
  T extends OperationPartial<any, any, any>,
> = T extends OperationPartial<infer Base, infer P, any>
  ? Expand<ParseObjectSelectionContext<Base, P>>
  : never

export interface GraphQueryFunctionPartial<
  Schema extends DefineSchema<any>,
> {
  <
    Name extends FragmentName,
    Type extends keyof FragmentBase<Schema>,
    Selection extends PrepareSelection<
      FragmentBase<Schema>[Type],
      Record<string, never>
    >,
  >(
    name: Name,
    base: `on ${Type & string}`,
    selection: Exact<
      PrepareSelection<
        FragmentBase<Schema>[Type],
        Record<string, never>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<Record<string, never>>,
  ): OperationPartial<
    FragmentBase<Schema>[Type],
    AnalyzedObjectSelection<Selection>,
    Record<string, any>
  >

  <
    Name extends FragmentName,
    Type extends keyof FragmentBase<Schema>,
    Variables extends VariablesDefinition<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends PrepareSelection<
      FragmentBase<Schema>[Type],
      PrepareVariables<NoInfer<Variables>>
    >,
  >(
    name: Name,
    base: `on ${Type & string}`,
    variables: Variables,
    selection: Exact<
      PrepareSelection<
        FragmentBase<Schema>[Type],
        PrepareVariables<NoInfer<Variables>>
      >,
      Selection
    >,
    directives?: Array<DirectiveInput> | DirectivesInputWithDollar<Record<string, never>>,
  ): OperationPartial<
    FragmentBase<Schema>[Type],
    AnalyzedObjectSelection<Selection>,
    PrepareVariables<Variables>
  >
}
