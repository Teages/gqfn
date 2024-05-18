import type { UserSchemaTypes } from '../schema'
import type { EmptyRecord, Exact } from '../utils/object'
import type { SelectionDollar } from './dollar'
import type { ParseQueryPart, QueryPartType } from './parse/part'
import type { ParseTypeSelection } from './parse/select'
import type { ProvideTypeSelection } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'

export interface GraphQueryPartial<
  Schema extends UserSchemaTypes,
> {
  <
    Name extends 'fragment' | `fragment ${string}`,
    Type extends keyof FragmentBase<Schema>,
    Selection extends ProvideTypeSelection<
      FragmentBase<Schema>[Type],
      EmptyRecord
    >,
  > (
    name: Name,
    base: `on ${Type & string}`,
    selection: Exact<ProvideTypeSelection<
      FragmentBase<Schema>[Type],
      EmptyRecord
    >, Selection>
  ): QueryPartType<
    ParseTypeSelection<FragmentBase<Schema>[Type], Selection>
  > & ((
    $: SelectionDollar<any, any>
  ) => ParseQueryPart<Selection>)

  <
    Name extends 'fragment' | `fragment ${string}`,
    Type extends keyof FragmentBase<Schema>,
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
    Selection extends ProvideTypeSelection<
      FragmentBase<Schema>[Type],
      PrepareVariables<Variables>
    >,
  > (
    name: Name,
    base: `on ${Type & string}`,
    variables: Variables,
    selection: Exact<ProvideTypeSelection<
      FragmentBase<Schema>[Type],
      PrepareVariables<Variables>
    >, Selection>
  ): QueryPartType<
    ParseTypeSelection<FragmentBase<Schema>[Type], Selection>
  > & ((
    $: SelectionDollar<any, PrepareVariables<Variables>>
  ) => ParseQueryPart<Selection>)
}

type FragmentBase<Schema extends UserSchemaTypes> = Omit<
  (Schema['Objects'] & Schema['Interfaces'] & Schema['Unions']),
  'Query' | 'Mutation' | 'Subscription'
>
