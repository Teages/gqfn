import type { Empty } from '../utils/object'
import type { Dollar } from './dollar'
import type { SelectionObject } from './select'
import type { PrepareVariables } from './variable'

export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  selection: () => SelectionObject<Empty>,
): <TVars extends Empty>($: Dollar<TVars>) => SelectionObject<Empty>
export function gqp<
  Variables extends Record<string, VariablesInputs>,
  VariablesInputs extends string,
>(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  vars: Variables,
  selection: () => SelectionObject<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<PrepareVariables<Variables>>
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
  Variables extends Record<string, VariablesInputs>,
  VariablesInputs extends string,
>(
  _name: 'fragment' | `fragment ${string}`,
  _base: `on ${string}`,
  _vars: Variables,
  selection: () => SelectionObject<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<PrepareVariables<Variables>> {
  return () => selection()
}
