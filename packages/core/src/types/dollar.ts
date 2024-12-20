import type { DollarPackageContentSymbol, DollarPackageIsOptionalSymbol } from '../internal/symbol'
import type { Exact } from '../internal/utils'
import type { Field, TypeObject } from '../schema'
import type { PrepareSelectionArgument } from './argument'
import type { DirectiveInput, HasSkipDirective } from './directive'
import type { IsHasArguments, PrepareFieldResult, PrepareSelectionSetComplex } from './selection'

export type DollarPayload = Record<string, unknown>

export type SelectionSetDollar<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> = SelectionSetDollarFunction<T, Variables> & Variables
type SelectionSetDollarFunction<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> = IsHasArguments<T> extends true
  ? SelectionSetDollarFunctionWithArguments<T, Variables>
  : SelectionSetDollarFunctionWithoutArguments<T, Variables>
interface SelectionSetDollarFunctionWithArguments<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> {
  <U extends PrepareFieldResult<T, Variables>>(
    arg: PrepareSelectionArgument<T['Argument']>,
    selection: Exact<PrepareFieldResult<T, Variables>, U>
  ): DollarPackage<U>
}
interface SelectionSetDollarFunctionWithoutArguments<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> {
  <U extends PrepareFieldResult<T, Variables>>(
    selection: Exact<PrepareFieldResult<T, Variables>, U>
  ): DollarPackage<U>
}

export type InlineFragmentDollar<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> = InlineFragmentDollarFunction<T, Variables> & Variables
interface InlineFragmentDollarFunction<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> {
  <U extends PrepareSelectionSetComplex<T, Variables>>(
    selection: Exact<PrepareSelectionSetComplex<T, Variables>, U>
  ): DollarPackage<U>
}

export type DirectiveDollar<Variables extends DollarPayload> = DirectiveDollarFunction & Variables
interface DirectiveDollarFunction {
  (): void
}

export type VariablesDefinitionDollar = VariablesDefinitionDollarFunction
interface VariablesDefinitionDollarFunction {
  <T extends string>(
    def: T
  ): DollarPackage<T>
}

export interface DollarPackage<T, IsOptional extends boolean = false> {
  [DollarPackageContentSymbol]?: () => T
  [DollarPackageIsOptionalSymbol]?: () => IsOptional
  withDirective: <U extends DirectiveInput[]>(...directives: U) => HasSkipDirective<U> extends true
    ? DollarPackage<T, true>
    : DollarPackage<T, IsOptional>
}
