import type { ArgumentNode, BooleanValueNode, EnumValueNode, FloatValueNode, IntValueNode, ListValueNode, NullValueNode, ObjectFieldNode, ObjectValueNode, StringValueNode, ValueNode, VariableNode } from 'graphql'
import { Kind } from 'graphql'
import { Variable } from './variable'

export type Argument = Record<string, unknown>

export function parseArgument(args: Argument): Array<ArgumentNode> {
  return Object.keys(args).map((key) => {
    const value = args[key]

    return {
      kind: Kind.ARGUMENT,
      name: { kind: Kind.NAME, value: key },
      value: parseValue(value),
    } satisfies ArgumentNode
  })
}

export function parseValue(value: unknown): ValueNode {
  if (value instanceof Variable) {
    return {
      kind: Kind.VARIABLE,
      name: { kind: Kind.NAME, value: value.name },
    } satisfies VariableNode
  }

  if (typeof value === 'function') {
    return { kind: Kind.ENUM, value: value() } satisfies EnumValueNode
  }

  if (typeof value === 'number') {
    // is float or int?
    if (Number.isInteger(value)) {
      return { kind: Kind.INT, value: String(value) } satisfies IntValueNode
    }
    else {
      return { kind: Kind.FLOAT, value: String(value) } satisfies FloatValueNode
    }
  }

  if (typeof value === 'string') {
    return { kind: Kind.STRING, block: false, value } satisfies StringValueNode
  }

  if (typeof value === 'boolean') {
    return { kind: Kind.BOOLEAN, value } satisfies BooleanValueNode
  }

  if (value === null) {
    return { kind: Kind.NULL } satisfies NullValueNode
  }

  if (typeof value === 'object' && value) {
    if (Array.isArray(value)) {
      return { kind: Kind.LIST, values: value.map(parseValue) } satisfies ListValueNode
    }
    else {
      return {
        kind: Kind.OBJECT,
        fields: Object.keys(value).map(key => ({
          kind: Kind.OBJECT_FIELD,
          name: { kind: Kind.NAME, value: key },
          value: parseValue(value[key as keyof typeof value]),
        } satisfies ObjectFieldNode)),
      } satisfies ObjectValueNode
    }
  }

  throw new Error(`Invalid value: ${typeof value}`)
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('parseArgs', () => {
    expect(parseArgument({
      int: 42,
      float: 3.14,
    })).toMatchObject([
      {
        name: 'int',
        value: { kind: Kind.INT, value: '42' },
      },
      {
        name: 'float',
        value: { kind: Kind.FLOAT, value: '3.14' },
      },
    ].map(({ name, value }) => ({
      kind: 'Argument',
      name: { kind: Kind.NAME, value: name },
      value,
    })))
  })

  it('parseValue', () => {
    expect(parseValue(new Variable('user'))).toMatchObject({
      kind: Kind.VARIABLE,
      name: { kind: Kind.NAME, value: 'user' },
    })
    expect(parseValue(() => 'hello')).toMatchObject({
      kind: Kind.ENUM,
      value: 'hello',
    })
    expect(parseValue(42)).toMatchObject({
      kind: Kind.INT,
      value: '42',
    })
    expect(parseValue(3.14)).toMatchObject({
      kind: Kind.FLOAT,
      value: '3.14',
    })
    expect(parseValue('hello')).toMatchObject({
      kind: Kind.STRING,
      block: false,
      value: 'hello',
    })
    expect(parseValue(true)).toMatchObject({
      kind: Kind.BOOLEAN,
      value: true,
    })
    expect(parseValue(null)).toMatchObject({
      kind: Kind.NULL,
    })
    expect(parseValue([1, 2, 3])).toMatchObject({
      kind: Kind.LIST,
      values: [
        { kind: Kind.INT, value: '1' },
        { kind: Kind.INT, value: '2' },
        { kind: Kind.INT, value: '3' },
      ],
    })
    expect(parseValue({ a: 1, b: 2 })).toMatchObject({
      kind: Kind.OBJECT,
      fields: [
        {
          kind: Kind.OBJECT_FIELD,
          name: { kind: Kind.NAME, value: 'a' },
          value: { kind: Kind.INT, value: '1' },
        },
        {
          kind: Kind.OBJECT_FIELD,
          name: { kind: Kind.NAME, value: 'b' },
          value: { kind: Kind.INT, value: '2' },
        },
      ],
    })
    expect(() => parseValue(undefined)).toThrow('Invalid value: undefined')
  })
}
