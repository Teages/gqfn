import type { Field } from '../schema'
import type { EmptyRecord, Exact } from '../utils/object'
import type { Argument, ProvideSelectionArgument } from './argument'
import type { DirectiveInput, IsSkipDirective } from './directive'
import type { ProvideSelectionFieldContext } from './select'

const DollarContextWithSkipSymbol = Symbol('')

export interface DollarContext<T, WithSkip extends boolean = false> {
  content: T
  args: Argument
  directives: Array<DirectiveInput>

  // The method is never actually implemented
  [DollarContextWithSkipSymbol]?: () => WithSkip
}

export type DollarPayload = Record<string, unknown>
export interface DollarEnum<T extends string> {
  readonly value: T
}

type SelectionDollarFunction<
  T extends Field<string, any, any>,
  Vars extends DollarPayload,
> = ProvideSelectionArgument<T['Argument']> extends EmptyRecord
  ? SelectionDollarFunctionWithoutArgs<T, Vars>
  : EmptyRecord extends ProvideSelectionArgument<T['Argument']>
    ? SelectionDollarFunctionWithArgs<T, Vars>
    : SelectionDollarFunctionReqArgs<T, Vars>

export interface SelectionDollarFunctionWithoutArgs<
  F extends Field<string, any, any>,
  Vars extends DollarPayload,
> {
  <T extends string>(enumValue: T): DollarEnum<T>

  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
    directive: U,
  ): DollarContext<T, IsSkipDirective<U>>
}
export interface SelectionDollarFunctionWithArgs<
  F extends Field<string, any, any>,
  Vars extends DollarPayload,
> {
  <T extends string>(enumValue: T): DollarEnum<T>

  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
    directive: U,
  ): DollarContext<T, IsSkipDirective<U>>

  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    arg: ProvideSelectionArgument<F['Argument']>,
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
    directive?: U,
  ): DollarContext<T, IsSkipDirective<U>>
}
export interface SelectionDollarFunctionReqArgs<
  F extends Field<string, any, any>,
  Vars extends DollarPayload,
> {
  <T extends string>(enumValue: T): DollarEnum<T>

  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    arg: ProvideSelectionArgument<F['Argument']>,
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
    directive?: U,
  ): DollarContext<T, IsSkipDirective<U>>
}

interface VariableDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>

  <T extends string>(
    args: T,
    directive: Array<DirectiveInput>
  ): DollarContext<T>
}

interface DirectiveDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>
}

export type SelectionDollar<
  T extends Field<string, any, any>,
  Vars extends DollarPayload,
> = SelectionDollarFunction<T, Vars> & Vars
export type VariableDollar = VariableDollarFunction
export type DirectiveDollar<Var extends DollarPayload> = DirectiveDollarFunction & Var
