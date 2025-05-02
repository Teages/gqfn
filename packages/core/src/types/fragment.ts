import type { Exact } from '../internal/utils'
import type { BaseObject, DefineSchema } from './define'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { TypedDocumentNode } from './document'
import type { PrepareSelection } from './prepare'
import type { ParseSelection } from './result'
import type { PrepareVariables, RequireVariables, VariablesDefinition } from './variable'

export type FragmentType = 'fragment'
export type FragmentName = `${FragmentType} ${string}`
export type FragmentBaseDefinition = `on ${string}`
export type FragmentBase<Schema extends DefineSchema<any>> =
  Schema extends DefineSchema<infer Namespace>
    ? {
        [K in keyof Namespace as Namespace[K] extends BaseObject<any, any, any> ? K : never]: Namespace[K]
      }
    : never

export interface GraphQueryFunctionFragment<
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
  ): TypedDocumentNode<
    ParseSelection<FragmentBase<Schema>[Type], Selection>,
    Record<string, never>
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
  ): TypedDocumentNode<
    ParseSelection<FragmentBase<Schema>[Type], Selection>,
    RequireVariables<Schema, Variables>
  >
}
