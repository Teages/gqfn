import type { VariableIdentitySymbol } from '../internal/symbol'
import type { RelaxedOptional, Values } from '../internal/utils'
import type { Input } from './define'
import type { DollarPackage, VariablesDefinitionDollar } from './dollar'
import type { FindType, ModifiedName, RequireInput } from './utils'

export type VariableStore = Record<string, Variable<string>>

export type VariablesDefinitionDollarPackage<T extends string>
  = ($: VariablesDefinitionDollar) => DollarPackage<T>
export type VariablesDefinition<T extends string>
  = Record<string, T | VariablesDefinitionDollarPackage<T>>

export interface Variable<T extends string> {
  [VariableIdentitySymbol]?: () => T
}

export type PrepareVariables<T extends VariablesDefinition<string>> = {
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Type} = ${infer _Default}`
    ? Variable<Type>
    : Variable<UnpackDollar<T[K]>>
}

export type AcceptVariable<Modifier extends string>
  = | Variable<Modifier>
    | AcceptVariableAsNull<Modifier>
    | AcceptVariableAsSimpledList<Modifier>
type AcceptVariableAsNull<Modifier extends string>
  = Modifier extends `${string}!`
    ? never
    : Variable<`${Modifier}!`>
type AcceptVariableAsSimpledList<Modifier extends string>
  = Modifier extends `[${infer F}!]!`
    ? Variable<`${AcceptSimpledListModifier<F>}!`>
    : Modifier extends `[${infer F}]!`
      ? | Variable<`${AcceptSimpledListModifier<F>}!`>
      | Variable<`[${F}!]!`> // TODO: support multi-level nested lists
      : Modifier extends `[${infer F}!]`
        ? | Variable<`${AcceptSimpledListModifier<F>}!`>
        | Variable<AcceptSimpledListModifier<F>>
        : Modifier extends `[${infer F}]`
          ? | Variable<`[${F}!]`> | Variable<`[${F}!]!`> // TODO: support multi-level nested lists
          | Variable<`${AcceptSimpledListModifier<F>}!`>
          | Variable<`${AcceptSimpledListModifier<F>}`>
          : never
type AcceptSimpledListModifier<Modifier extends string>
  = Modifier extends `[${infer F}]`
    ? AcceptSimpledListModifier<F>
    : Modifier extends `${infer F}!`
      ? AcceptSimpledListModifier<F>
      : Modifier

export type RequireVariables<Schema, T extends VariablesDefinition<string>> = RelaxedOptional<{
  [K in keyof T]: UnpackDollar<T[K]> extends `${infer Modifier} = ${infer _Default}`
    ? RequireVariable<Schema, Modifier> extends never
      ? never
      : RequireVariable<Schema, Modifier> | undefined
    : RequireVariable<Schema, UnpackDollar<T[K]>>
}>
type RequireVariable<Schema, Modifier extends string>
  = RequireInput<Input<Modifier, FindType<Schema, ModifiedName<Modifier>>>>

type UnpackDollar<T extends Values<VariablesDefinition<string>>>
  = T extends (($: VariablesDefinitionDollar) => DollarPackage<infer U extends string, boolean>)
    ? U
    : T
