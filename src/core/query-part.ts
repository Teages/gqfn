import type { SelectionDollar as Dollar } from './dollar'
import type { SelectionObject, TypeSelection } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'

export function gqp(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  selection: TypeSelection<any>,
): ($: Dollar<any>) => SelectionObject<any>
export function gqp<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: 'fragment' | `fragment ${string}`,
  base: `on ${string}`,
  vars: Variables,
  selection: TypeSelection<PrepareVariables<Variables>>,
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
  selection: TypeSelection<PrepareVariables<Variables>>,
): <TVars extends PrepareVariables<Variables>>($: Dollar<TVars>) => SelectionObject<PrepareVariables<Variables>> {
  const last = selection[selection.length - 1]
  const items = selection.slice(0, selection.length - 1) as Array<string>

  const ret: SelectionObject<PrepareVariables<Variables>>
    = typeof last === 'string'
      ? { last: true }
      : { ...last }
  items.forEach(item => ret[item] = true)

  return () => ret
}
