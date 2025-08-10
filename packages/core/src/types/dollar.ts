import type { DollarPackageContentSymbol, DollarPackageIsOptionalSymbol } from '../internal/symbol'
import type { DeprecateFunctionPrototype, Exact } from '../internal/utils'
import type { DirectiveInput, HasSkipDirective } from './directive'
import type { EnumFunction } from './enum'
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
  Shape,
  Arguments,
  Variables extends VariableStore,
> = SelectionDollarFunction<Shape, Arguments> & DollarPayload<Variables>
type SelectionDollarFunction<
  Shape,
  Arguments,
> = Arguments extends Record<string, never>
  ? SelectionSetDollarFunctionWithoutArguments<Shape>
  : Record<string, never> extends Arguments
    ? SelectionSetDollarFunctionCouldHaveArguments<Shape, Arguments>
    : SelectionSetDollarFunctionWithArguments<Shape, Arguments>

interface SelectionSetDollarFunctionWithArguments<
  Shape,
  Arguments,
> extends DeprecateFunctionPrototype {
  <T extends Shape>(
    arg: Arguments,
    selection: Exact<Shape, T>
  ): DollarPackage<T>
}
interface SelectionSetDollarFunctionWithoutArguments<
  Shape,
> extends DeprecateFunctionPrototype {
  <T extends Shape>(
    selection: Exact<Shape, T>
  ): DollarPackage<T>
}
interface SelectionSetDollarFunctionCouldHaveArguments<
  Shape,
  Arguments,
> extends SelectionSetDollarFunctionWithArguments<Shape, Arguments>, SelectionSetDollarFunctionWithoutArguments<Shape> { }
export type DirectiveDollar<Variables extends VariableStore> = DollarPayload<Variables>

export interface DollarPackage<T, IsOptional extends boolean = false> {
  [DollarPackageContentSymbol]?: () => T
  [DollarPackageIsOptionalSymbol]?: () => IsOptional
  withDirective: <U extends DirectiveInput[]>(...directives: U) => HasSkipDirective<U> extends true
    ? DollarPackage<T, true>
    : DollarPackage<T, IsOptional>
}
