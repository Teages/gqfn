import type { DefinitionNode, DocumentNode } from 'graphql'
import type { EmptyRecord } from '../types/utils/object'

import type { DirectivesInputWithDollar } from './directive'
import type { TypeSelection } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'
import { Kind, OperationTypeNode } from 'graphql'
import { parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'
import { type OperationName, parseOperation } from './operation'
import { parseTypeSelection } from './select'
import { parseVariables } from './variable'
import type { Context } from './context'

export function gqfn(
  selection: TypeSelection<EmptyRecord>,
  directives?: Array<DirectivesInputWithDollar<EmptyRecord>>
): DocumentNode
export function gqfn(
  name: OperationName,
  selection: TypeSelection<EmptyRecord>,
  directives?: DirectivesInputWithDollar<EmptyRecord>
): DocumentNode
export function gqfn<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: OperationName,
  vars: Variables,
  selection: TypeSelection<PrepareVariables<NoInfer<Variables>>>,
  directives?: DirectivesInputWithDollar<PrepareVariables<Variables>>
): DocumentNode
export function gqfn(...args: any[]): DocumentNode {
  switch (args.length) {
    case 1:{
      const [selection] = args
      return graphQueryFunction('query', {}, selection, () => [])
    }
    case 2: {
      const [arg_0, arg_1] = args
      if (typeof arg_0 === 'string') {
        const name = arg_0 as OperationName
        const selection = arg_1
        return graphQueryFunction(name, {}, selection, () => [])
      }

      const selection = arg_0
      const directives = arg_1
      return graphQueryFunction('query', {}, selection, directives)
    }
    case 3: {
      const [name, arg_1, arg_2] = args
      if (!Array.isArray(arg_1)) {
        const vars = arg_1
        const selection = arg_2
        return graphQueryFunction(name, vars, selection, () => [])
      }
      const selection = arg_1
      const directives = arg_2
      return graphQueryFunction(name, {}, selection, directives)
    }
    case 4: {
      const [name, vars, selection, directives] = args
      return graphQueryFunction(name, vars, selection, directives)
    }
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
  directives: DirectivesInputWithDollar<PrepareVariables<Variables>>,
): DocumentNode {
  const { type: operationType, name: operationName } = parseOperation(name)

  const directivesNodes = parseDirective(directives(initDirectiveDollar()))

  const definitions: DefinitionNode[] = []
  const ctx: Context = {
    pushDefinitionNode: node => definitions.push(node),
  }

  ctx.pushDefinitionNode({
    kind: Kind.OPERATION_DEFINITION,
    directives: directivesNodes,
    operation: {
      query: OperationTypeNode.QUERY,
      mutation: OperationTypeNode.MUTATION,
      subscription: OperationTypeNode.SUBSCRIPTION,
    }[operationType],
    variableDefinitions: parseVariables(vars),
    name: operationName
      ? {
          kind: Kind.NAME,
          value: operationName,
        }
      : undefined,
    selectionSet: parseTypeSelection(selection, ctx),
  })

  return {
    kind: Kind.DOCUMENT,
    definitions,
  }
}
