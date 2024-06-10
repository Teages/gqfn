import type { Field, TypeObject } from '../schema'
import type { EmptyRecord, Exact, HiddenSymbol } from '../utils/object'
import type { Argument, ProvideSelectionArgument } from './argument'
import type { DirectiveInput, IsSkipDirective } from './directive'
import type { ProvideSelectionFieldContext, ProvideTypeSelection } from './select'

export interface DollarContext<T, WithSkip extends boolean = false> {
  content: T
  args: Argument
  directives: Array<DirectiveInput>

  // The method is never actually implemented
  [HiddenSymbol]?: () => WithSkip
}

export type DollarPayload = Record<string, unknown>
export type DollarEnum<T extends string> = () => T

type SelectionDollarFunction<
  T extends Field<string, any, any>,
  Vars extends DollarPayload,
> = ProvideSelectionArgument<T['Argument']> extends EmptyRecord
  ? SelectionDollarFunctionWithoutArgs<T, Vars>
  : SelectionDollarFunctionWithArgs<T, Vars>

interface InlineFragmentDollarFunction<
  TO extends TypeObject<string, any, any>,
  Vars extends DollarPayload,
> {
  <
    T extends ProvideTypeSelection<TO, Vars>,
    U extends Array<DirectiveInput>,
  >(
    selection: Exact<ProvideTypeSelection<TO, Vars>, T>,
    directive?: U,
  ): DollarContext<T, IsSkipDirective<U>>
}

export interface SelectionDollarFunctionWithoutArgs<
  F extends Field<string, any, any>,
  Vars extends DollarPayload,
> {
  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
  ): DollarContext<T, IsSkipDirective<U>>

  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    args: EmptyRecord,
    selection: Exact<ProvideSelectionFieldContext<F, Vars>, T>,
    directive?: U,
  ): DollarContext<T, IsSkipDirective<U>>
}
export interface SelectionDollarFunctionWithArgs<
  F extends Field<string, any, any>,
  Vars extends DollarPayload,
> {
  <
    T extends ProvideSelectionFieldContext<F, Vars>,
    U extends Array<DirectiveInput>,
  >(
    args: ProvideSelectionArgument<F['Argument']>,
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
export type InlineFragmentDollar<
  T extends TypeObject<string, any, any>,
  Vars extends DollarPayload,
> = InlineFragmentDollarFunction<T, Vars> & Vars
export type VariableDollar = VariableDollarFunction
export type DirectiveDollar<Var extends DollarPayload> = DirectiveDollarFunction & Var
