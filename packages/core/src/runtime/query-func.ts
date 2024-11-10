import type { DocumentNode, FragmentDefinitionNode } from 'graphql'
import type { EmptyRecord } from '../types/utils/object'
import type { DirectivesInputWithDollar } from './directive'
import type { FragmentName, OperationName } from './operation'
import type { TypeSelection } from './select'
import type { PrepareVariables, ProvideVariable } from './variable'
import { Kind, OperationTypeNode } from 'graphql'
import { createContext } from './context'
import { parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'
import { $enum, type DollarEnumFunction } from './enum'
import { parseFragmentName, parseOperationName } from './operation'
import { parseTypeSelection } from './select'
import { parseVariables } from './variable'

export interface GraphQueryFunctionCore {
  (
    selection: TypeSelection<EmptyRecord>,
    directives?: Array<DirectivesInputWithDollar<EmptyRecord>>
  ): DocumentNode
  (
    name: OperationName,
    selection: TypeSelection<EmptyRecord>,
    directives?: DirectivesInputWithDollar<EmptyRecord>
  ): DocumentNode
  <
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
  >(
    name: OperationName,
    vars: Variables,
    selection: TypeSelection<PrepareVariables<NoInfer<Variables>>>,
    directives?: DirectivesInputWithDollar<PrepareVariables<Variables>>
  ): DocumentNode

  fragment: GraphQueryFunctionFragmentCore
  enum: DollarEnumFunction
}

export interface GraphQueryFunctionFragmentCore {
  (
    name: FragmentName,
    base: `on ${string}`,
    selection: TypeSelection<EmptyRecord>,
    directives?: DirectivesInputWithDollar<EmptyRecord>
  ): DocumentNode
  <
    Variables extends ProvideVariable<VariablesInputs>,
    VariablesInputs extends string,
  >(
    name: FragmentName,
    base: `on ${string}`,
    vars: Variables,
    selection: TypeSelection<PrepareVariables<NoInfer<Variables>>>,
    directives?: DirectivesInputWithDollar<PrepareVariables<Variables>>
  ): DocumentNode
}

export const gqfn: GraphQueryFunctionCore = init()

function init() {
  const gqfn = (...args: any[]) => {
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

  const fragment: GraphQueryFunctionFragmentCore = (...args: any[]) => {
    switch (args.length) {
      case 3: {
        const [name, base, selection] = args
        return graphQueryFunctionFragment(name, base, {}, selection, () => [])
      }
      case 4: {
        const [name, base, arg_2, arg_3] = args
        if (!Array.isArray(arg_2)) {
          const vars = arg_2
          const selection = arg_3
          return graphQueryFunctionFragment(name, base, vars, selection, () => [])
        }

        const selection = arg_2
        const directives = arg_3
        return graphQueryFunctionFragment(name, base, {}, selection, directives)
      }
      case 5: {
        const [name, base, vars, selection, directives] = args
        return graphQueryFunctionFragment(name, base, vars, selection, directives)
      }
    }

    throw new Error('Invalid arguments')
  }

  Object.assign(gqfn, { fragment, enum: $enum })

  return gqfn as GraphQueryFunctionCore
}

function graphQueryFunctionFragment<
  Variables extends ProvideVariable<VariablesInputs>,
  VariablesInputs extends string,
>(
  name: FragmentName,
  base: `on ${string}`,
  _vars: Variables,
  selection: TypeSelection<PrepareVariables<Variables>>,
  directives: DirectivesInputWithDollar<PrepareVariables<Variables>>,
): DocumentNode {
  const { name: operationName, typeCondition } = parseFragmentName(name, base)

  const directivesNodes = parseDirective(directives(initDirectiveDollar()))

  const ctx = createContext()

  ctx.pushDefinitionNode({
    kind: Kind.FRAGMENT_DEFINITION,
    directives: directivesNodes,
    name: {
      kind: Kind.NAME,
      value: operationName,
    },
    typeCondition: {
      kind: Kind.NAMED_TYPE,
      name: {
        kind: Kind.NAME,
        value: typeCondition,
      },
    },
    selectionSet: parseTypeSelection(selection, ctx),
  } satisfies FragmentDefinitionNode)

  return {
    kind: Kind.DOCUMENT,
    definitions: ctx.definitions.reverse(),
  }
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
  const { type: operationType, name: operationName } = parseOperationName(name)

  const directivesNodes = parseDirective(directives(initDirectiveDollar()))

  const ctx = createContext()

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
    definitions: ctx.definitions.reverse(),
  }
}
