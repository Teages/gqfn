import type { SchemaData } from './parse'

export interface PrintOptions {
  url?: string
}

export function print(schemaData: SchemaData, { url }: PrintOptions = {}): string {
  const lines: Array<string> = []
  const push = (...str: Array<string>) => lines.push(...str, '')
  // ignores and import type utils
  push(
    `/* eslint-ignore */`,
    `import type { ArgOf, DefineSchema, EnumType, Field, InputObject, InterfaceObject, ResOf, ScalarType, TypeObject, Union} from '@teages/gqf/schema'`,
  )

  // scalars
  const scalars: Array<string> = []
  Object.entries(schemaData.scalarTypes).forEach(([name, scalar]) => {
    scalars.push(`    ${name}: ScalarType<'${name}', ${scalar.type}>`)
  })

  // enums
  const enums: Array<string> = []
  Object.entries(schemaData.enumTypes).forEach(([name, { values }]) => {
    push(
      `export type ${name} =`,
      ...values.map(val => `  | '${val}'`),
    )

    enums.push(
      `    ${name}: EnumType<'${name}', ${name}>`,
    )
  })

  // input objects
  const inputs: Array<string> = []
  Object.entries(schemaData.inputObjects).forEach(([name, { args }]) => {
    push(
      `type ${name} = InputObject<'${name}', {`,
      ...Object.entries(args).map(([field, type]) => `  ${field}: Arg<'${type}'>`),
      `}>`,
    )

    inputs.push(
      `    ${name}: ${name}`,
    )
  })

  // interfaces
  const interfaces: Array<string> = []
  Object.entries(schemaData.interfaceObjects).forEach(([name, { fields }]) => {
    const imps = new Set<string>()
    Object.entries(schemaData.typeObjects).forEach(([key, data]) => {
      if (data.implements.includes(name)) {
        imps.add(key)
      }
    })
    Object.entries(schemaData.interfaceObjects).forEach(([key, data]) => {
      if (data.implements.includes(name)) {
        imps.add(key)
      }
    })
    push(
      `type ${name} = InterfaceObject<'${name}', {`,
      ...fields.map(({ name, res }) => `  ${name}: Res<'${res}'>`),
      `}, {`,
      ...[...imps.values()].map(key => `  ${key}: ${key}`),
      `}>`,
    )

    interfaces.push(
      `    ${name}: ${name}`,
    )
  })

  // union
  const unions: Array<string> = []
  Object.entries(schemaData.unions).forEach(([name, { types }]) => {
    push(
      `type ${name} = Union<'${name}', {`,
      ...types.map(key => `  ${key}: ${key}`),
      `}>`,
    )

    unions.push(
      `    ${name}: ${name}`,
    )
  })

  // object type
  const objects: Array<string> = []
  Object.entries(schemaData.typeObjects).forEach(([name, { fields }]) => {
    push(
      `type ${name} = TypeObject<'${name}', {`,
      ...fields.map(({ name, args, res }) => {
        if (args && Object.keys(args).length > 0) {
          return [
            `  ${name}: Field<'${name}', Res<'${res}'>, {`,
            ...Object.entries(args).map(([key, val]) => `    ${key}: Arg<'${val}'>`),
            '  }>',
          ].join('\n')
        }

        return `  ${name}: Field<'${name}', Res<'${res}'>>`
      }),
      `}>`,
    )

    objects.push(
      `    ${name}: ${name}`,
    )
  })

  // schema
  push(
    `export type Schema = DefineSchema<{`,
    ...(scalars.length > 0
      ? [
          `  Scalars: {`,
          ...scalars,
          `  }`,
        ]
      : []),
    ...(enums.length > 0
      ? [
          `  Enums: {`,
          ...enums,
          `  }`,
        ]
      : []),
    ...(inputs.length > 0
      ? [
          `  Inputs: {`,
          ...inputs,
          `  }`,
        ]
      : []),
    ...(interfaces.length > 0
      ? [
          `  Interfaces: {`,
          ...interfaces,
          `  }`,
        ]
      : []),
    ...(unions.length > 0
      ? [
          `  Unions: {`,
          ...unions,
          `  }`,
        ]
      : []),
    ...(objects.length > 0
      ? [
          `  Objects: {`,
          ...objects,
          `  }`,
        ]
      : []),
    `}>`,
  )

  // utils
  push(
    `type Arg<T extends string> = ArgOf<Schema, T>`,
    `type Res<T extends string> = ResOf<Schema, T>`,
  )

  // declare
  if (url) {
    push(
      `declare module '@teages/gqf/schema' {`,
      `  interface Schemas {`,
      `    '${url}': Schema`,
      `  }`,
      `}`,
    )
  }

  return lines.join('\n')
}
