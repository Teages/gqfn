import type { ArgumentNode, BooleanValueNode, EnumValueNode, FloatValueNode, IntValueNode, ListValueNode, NullValueNode, ObjectFieldNode, ObjectValueNode, StringValueNode, ValueNode, VariableNode } from 'graphql'
import { Kind } from 'graphql'
import { Variable } from './variable'

export type Argument = Record<string, unknown>

export function parseArgs(args: Argument): Array<ArgumentNode> {
  return Object.keys(args).map((key) => {
    const value = args[key]

    return {
      kind: Kind.ARGUMENT,
      name: {
        kind: Kind.NAME,
        value: key,
      },
      value: parseValue(value),
    } satisfies ArgumentNode
  })
}

export function parseValue(value: unknown): ValueNode {
  if (value instanceof Variable) {
    return {
      kind: Kind.VARIABLE,
      name: {
        kind: Kind.NAME,
        value: value.name,
      },
    } satisfies VariableNode
  }

  if (typeof value === 'function') {
    return {
      kind: Kind.ENUM,
      value: value(),
    } satisfies EnumValueNode
  }

  if (typeof value === 'number') {
    // is float or int?
    if (Number.isInteger(value)) {
      return {
        kind: Kind.INT,
        value: String(value),
      } satisfies IntValueNode
    }
    else {
      return {
        kind: Kind.FLOAT,
        value: String(value),
      } satisfies FloatValueNode
    }
  }

  if (typeof value === 'string') {
    return {
      kind: Kind.STRING,
      block: false,
      value,
    } satisfies StringValueNode
  }

  if (typeof value === 'boolean') {
    return {
      kind: Kind.BOOLEAN,
      value,
    } satisfies BooleanValueNode
  }

  if (value === null) {
    return {
      kind: Kind.NULL,
    } satisfies NullValueNode
  }

  if (typeof value === 'object' && value) {
    if (Array.isArray(value)) {
      return {
        kind: Kind.LIST,
        values: value.map(parseValue),
      } satisfies ListValueNode
    }
    else {
      return {
        kind: Kind.OBJECT,
        fields: Object.keys(value).map(key => ({
          kind: Kind.OBJECT_FIELD,
          name: {
            kind: Kind.NAME,
            value: key,
          },
          value: parseValue(value[key as keyof typeof value]),
        } satisfies ObjectFieldNode)),
      } satisfies ObjectValueNode
    }
  }

  throw new Error(`Invalid value: ${typeof value}`)
}
