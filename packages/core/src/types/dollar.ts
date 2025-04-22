import type { DollarPackageContentSymbol, DollarPackageIsOptionalSymbol } from '../internal/symbol'
import type { Exact } from '../internal/utils'
import type { DirectiveInput, HasSkipDirective } from './directive'

export type DollarPayload = Record<string, unknown>

export interface VariablesDefinitionDollar {
  <T extends string>(
    def: T
  ): DollarPackage<T>
}

export type SelectionDollar<
  Shape,
  Arguments,
  Variables extends DollarPayload,
> = SelectionDollarFunction<Shape, Arguments> & Variables
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
> {
  <U extends Shape>(
    arg: Arguments,
    selection: Exact<Shape, U>
  ): DollarPackage<U>
}
interface SelectionSetDollarFunctionWithoutArguments<
  Shape,
> {
  <U extends Shape>(
    selection: Exact<Shape, U>
  ): DollarPackage<U>
}
interface SelectionSetDollarFunctionCouldHaveArguments<
  Shape,
  Arguments,
> extends SelectionSetDollarFunctionWithArguments<Shape, Arguments>, SelectionSetDollarFunctionWithoutArguments<Shape> { }
export type DirectiveDollar<Variables extends DollarPayload> = DirectiveDollarFunction & Variables
interface DirectiveDollarFunction {
  (): void
}

export interface DollarPackage<T, IsOptional extends boolean = false> {
  [DollarPackageContentSymbol]?: () => T
  [DollarPackageIsOptionalSymbol]?: () => IsOptional
  withDirective: <U extends DirectiveInput[]>(...directives: U) => HasSkipDirective<U> extends true
    ? DollarPackage<T, true>
    : DollarPackage<T, IsOptional>
}
