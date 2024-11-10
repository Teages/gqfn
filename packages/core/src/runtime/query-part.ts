import type { SelectionDollar as Dollar, DollarPayload } from './dollar'
import type { SelectionField, SelectionObject } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'

/**
 * @deprecated
 */
export type LegacyTypeSelection<Vars extends DollarPayload> = Array<
  | SelectionField
  | SelectionObject<Vars>
>

/**
 * @deprecated
 */
export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  selection: LegacyTypeSelection<any>,
): ($: Dollar<any>) => SelectionObject<any>
/**
 * @deprecated
 */
export function gqp<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  vars: Variables,
  selection: LegacyTypeSelection<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<any>
/**
 * @deprecated
 */
export function gqp(
  ...args: any[]
) {
  if (args.length === 4) {
    const [name, base, vars, selection] = args
    return graphQueryPartial(name, base, vars, selection)
  }
  if (args.length === 3) {
    const [name, base, selection] = args
    return graphQueryPartial(name, base, {}, selection)
  }
  throw new Error('Invalid arguments')
}

function graphQueryPartial<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  _name: 'fragment' | `fragment ${string}`,
  _base: `on ${string}`,
  _vars: Variables,
  selection: LegacyTypeSelection<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<PrepareVariables<Variables>> {
  const last = selection[selection.length - 1]
  const items = selection.slice(0, selection.length - 1) as Array<string>

  const ret: SelectionObject<PrepareVariables<Variables>>
    = typeof last === 'string'
      ? { [last]: true }
      : { ...last }
  items.forEach(item => ret[item] = true)

  return () => ret
}
