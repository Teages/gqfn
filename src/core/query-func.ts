import { type DocumentNode, Kind, OperationTypeNode } from 'graphql'
import type { EmptyRecord } from '../utils/object'
import { type OperationName, parseOperation } from './operation'
import { parseTypeSelection } from './select'
import type { TypeSelection } from './select'
import { type PrepareVariables, parseVariables } from './variable'
import type { AcceptDirective } from './directive'
import { parseDirective } from './directive'

export function gqf(
  selection: TypeSelection<EmptyRecord>
): DocumentNode
export function gqf(
  name: OperationName,
  selection: TypeSelection<EmptyRecord>
): DocumentNode
export function gqf<
  Variables extends Record<string, AcceptDirective<VariablesInputs>>,
  VariablesInputs extends string,
>(
  name: OperationName,
  vars: Variables,
  selection: TypeSelection<PrepareVariables<Variables>>
): DocumentNode
export function gqf(...args: any[]): DocumentNode {
  if (args.length === 3) {
    const [name, vars, selection] = args
    return graphQueryFunction(name, vars, selection)
  }
  else if (args.length === 2) {
    const [name, selection] = args
    return graphQueryFunction(name, {}, selection)
  }
  else if (args.length === 1) {
    const [selection] = args
    return graphQueryFunction('query', {}, selection)
  }
  throw new Error('Invalid arguments')
}

function graphQueryFunction<
  Variables extends Record<string, AcceptDirective<VariablesInputs>>,
  VariablesInputs extends string,
>(
  name: OperationName,
  vars: Variables,
  selection: AcceptDirective<TypeSelection<PrepareVariables<Variables>>>,
): DocumentNode {
  const { type: operationType, name: operationName } = parseOperation(name)

  const { value, directives } = parseDirective(selection)

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
      selectionSet: parseTypeSelection(value),
    }],
  }
}
