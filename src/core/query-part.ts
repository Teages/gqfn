import type { SelectionDollar as Dollar } from './dollar'
import type { SelectionObject } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'

export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  selection: () => SelectionObject<any>,
): ($: Dollar<any>) => SelectionObject<any>
export function gqp<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  vars: Variables,
  selection: () => SelectionObject<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<any>
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
  selection: () => SelectionObject<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<PrepareVariables<Variables>> {
  return () => selection()
}
