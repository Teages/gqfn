import type { DollarPackageContentSymbol, DollarPackageIsOptionalSymbol } from '../internal/symbol'
import type { DeprecateFunctionPrototype, Exact } from '../internal/utils'
import type { BaseType } from './define'
import type { DirectiveInput, HasSkipDirective } from './directive'
import type { EnumFunction } from './enum'
import type { PrepareSelection } from './prepare'
import type { ParseSelection } from './result'
import type { VariableStore } from './variable'

export interface DollarPayload<Variables extends VariableStore> {
  vars: Variables
  enum: EnumFunction
}
export interface VariablesDefinitionDollar {
  <T extends string>(
    def: T
  ): DollarPackage<T>
}

export type SelectionDollar<
  Type extends BaseType<any, any>,
  Arguments,
  Variables extends VariableStore,
> = SelectionDollarFunction<Type, Arguments, Variables> & DollarPayload<Variables>
type SelectionDollarFunction<
  Type extends BaseType<any, any>,
  Arguments,
  Variables extends VariableStore,
> = Arguments extends Record<string, never>
  ? SelectionSetDollarFunctionWithoutArguments<Type, Variables>
  : Record<string, never> extends Arguments
    ? SelectionSetDollarFunctionCouldHaveArguments<Type, Arguments, Variables>
    : SelectionSetDollarFunctionWithArguments<Type, Arguments, Variables>

interface SelectionSetDollarFunctionWithArguments<
  Type extends BaseType<any, any>,
  Arguments,
  Variables extends VariableStore,
> extends DeprecateFunctionPrototype {
  <T extends PrepareSelection<Type, Variables>>(
    arg: Arguments,
    selection: Exact<PrepareSelection<Type, Variables>, T>
  ): DollarPackage<ParseSelection<Type, T>>
}
interface SelectionSetDollarFunctionWithoutArguments<
  Type extends BaseType<any, any>,
  Variables extends VariableStore,
> extends DeprecateFunctionPrototype {
  <T extends PrepareSelection<Type, Variables>>(
    selection: Exact<PrepareSelection<Type, Variables>, T>
  ): DollarPackage<ParseSelection<Type, T>>
}
interface SelectionSetDollarFunctionCouldHaveArguments<
  Type extends BaseType<any, any>,
  Arguments,
  Variables extends VariableStore,
> extends SelectionSetDollarFunctionWithArguments<Type, Arguments, Variables>, SelectionSetDollarFunctionWithoutArguments<Type, Variables> { }
export type DirectiveDollar<Variables extends VariableStore> = DollarPayload<Variables>

export interface DollarPackage<T, IsOptional extends boolean = false> {
  [DollarPackageContentSymbol]?: () => T
  [DollarPackageIsOptionalSymbol]?: () => IsOptional
  withDirective: <U extends DirectiveInput[]>(...directives: U) => HasSkipDirective<U> extends true
    ? DollarPackage<T, true>
    : DollarPackage<T, IsOptional>
}
