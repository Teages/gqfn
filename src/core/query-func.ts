import { type DocumentNode, Kind, OperationTypeNode } from 'graphql'
import type { EmptyRecord } from '../utils/object'
import { type OperationName, parseOperation } from './operation'
import { parseTypeSelection } from './select'
import type { TypeSelection } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'
import { parseVariables } from './variable'
import type { DirectiveInputWithDollar } from './directive'
import { parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'

export function gqf(
  selection: TypeSelection<EmptyRecord>,
  directives?: Array<DirectiveInputWithDollar<EmptyRecord>>
): DocumentNode
export function gqf(
  name: OperationName,
  selection: TypeSelection<EmptyRecord>,
  directives?: Array<DirectiveInputWithDollar<EmptyRecord>>
): DocumentNode
export function gqf<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: OperationName,
  vars: Variables,
  selection: TypeSelection<PrepareVariables<NoInfer<Variables>>>,
  directives?: Array<DirectiveInputWithDollar<PrepareVariables<Variables>>>
): DocumentNode
export function gqf(...args: any[]): DocumentNode {
  if (args.length === 4) {
    const [name, vars, selection, directives] = args
    return graphQueryFunction(name, vars, selection, directives)
  }
  else if (args.length === 3) {
    const [name, arg_1, arg_2] = args
    if (!Array.isArray(arg_1)) {
      const vars = arg_1
      const selection = arg_2
      return graphQueryFunction(name, vars, selection, [])
    }
    const selection = arg_1
    const directives = arg_2
    return graphQueryFunction(name, {}, selection, directives)
  }
  else if (args.length === 2) {
    const [arg_0, arg_1] = args
    if (typeof arg_0 === 'string') {
      const name = arg_0 as OperationName
      const selection = arg_1
      return graphQueryFunction(name, {}, selection, [])
    }

    const selection = arg_0
    const directives = arg_1
    return graphQueryFunction('query', {}, selection, directives)
  }
  else if (args.length === 1) {
    const [selection] = args
    return graphQueryFunction('query', {}, selection, [])
  }
  throw new Error('Invalid arguments')
}

function graphQueryFunction<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: OperationName,
  vars: Variables,
  selection: TypeSelection<PrepareVariables<Variables>>,
  directivesInput: Array<DirectiveInputWithDollar<PrepareVariables<Variables>>>,
): DocumentNode {
  const { type: operationType, name: operationName } = parseOperation(name)

  const directives = parseDirective(directivesInput.map(([name, value]) => {
    if (typeof value === 'function') {
      return [name, value(initDirectiveDollar())]
    }
    else {
      return [name, value]
    }
  }))

  return {
    kind: Kind.DOCUMENT,
    definitions: [{
      kind: Kind.OPERATION_DEFINITION,
      directives,
      operation: {
        query: OperationTypeNode.QUERY,
        mutation: OperationTypeNode.MUTATION,
        subscription: OperationTypeNode.SUBSCRIPTION,
      }[operationType],
      variableDefinitions: parseVariables(vars),
      name: operationName === ''
        ? undefined
        : {
            kind: Kind.NAME,
            value: operationName,
          },
      selectionSet: parseTypeSelection(selection),
    }],
  }
}
