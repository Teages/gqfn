import type { DollarPackageContentSymbol, DollarPackageIsOptionalSymbol } from '../internal/symbol'
import type { DeprecateFunctionPrototype, Exact } from '../internal/utils'
import type { BaseType } from './define'
import type { DirectiveInput, HasSkipDirective } from './directive'
import type { EnumFunction } from './enum'
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
  Shape,
  Arguments,
  Variables extends VariableStore,
  Type extends BaseType<any, any> | undefined,
> = SelectionDollarFunction<Shape, Arguments, Type> & DollarPayload<Variables>
type SelectionDollarFunction<
  Shape,
  Arguments,
  Type extends BaseType<any, any> | undefined,
> = Arguments extends Record<string, never>
  ? SelectionSetDollarFunctionWithoutArguments<Shape, Type>
  : Record<string, never> extends Arguments
    ? SelectionSetDollarFunctionCouldHaveArguments<Shape, Arguments, Type>
    : SelectionSetDollarFunctionWithArguments<Shape, Arguments, Type>

interface SelectionSetDollarFunctionWithArguments<
  Shape,
  Arguments,
  Type extends BaseType<any, any> | undefined,
> extends DeprecateFunctionPrototype {
  <T extends Shape>(
    arg: Arguments,
    selection: Exact<Shape, T>
  ): DollarPackage<ParseSelection<Type, T>>
}
interface SelectionSetDollarFunctionWithoutArguments<
  Shape,
  Type extends BaseType<any, any> | undefined,
> extends DeprecateFunctionPrototype {
  <T extends Shape>(
    selection: Exact<Shape, T>
  ): DollarPackage<ParseSelection<Type, T>>
}
interface SelectionSetDollarFunctionCouldHaveArguments<
  Shape,
  Arguments,
  Type extends BaseType<any, any> | undefined,
> extends SelectionSetDollarFunctionWithArguments<Shape, Arguments, Type>, SelectionSetDollarFunctionWithoutArguments<Shape, Type> { }
export type DirectiveDollar<Variables extends VariableStore> = DollarPayload<Variables>

export interface DollarPackage<T, IsOptional extends boolean = false> {
  [DollarPackageContentSymbol]?: () => T
  [DollarPackageIsOptionalSymbol]?: () => IsOptional
  withDirective: <U extends DirectiveInput[]>(...directives: U) => HasSkipDirective<U> extends true
    ? DollarPackage<T, true>
    : DollarPackage<T, IsOptional>
}
