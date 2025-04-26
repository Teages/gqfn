import type { SchemaData } from './parse'

export interface PrintOptions {
  url?: string
}

export function print(schemaData: SchemaData, { url }: PrintOptions = {}): string {
  const lines: Array<string> = []
  const push = (...str: Array<string>) => lines.push(...str)

  const helpers = new Set<string>()
  const nameMap = new Map<string, string>()

  // prepare name map
  Object.entries(schemaData.scalarTypes).forEach(([name]) => {
    nameMap.set(name, `Scalar_${name}`)
  })
  Object.entries(schemaData.enumTypes).forEach(([name]) => {
    nameMap.set(name, `Enum_${name}`)
  })
  Object.entries(schemaData.inputObjects).forEach(([name]) => {
    nameMap.set(name, `Input_${name}`)
  })
  Object.entries(schemaData.typeObjects).forEach(([name]) => {
    nameMap.set(name, `Type_${name}`)
  })
  Object.entries(schemaData.interfaceObjects).forEach(([name]) => {
    nameMap.set(name, `Interface_${name}`)
  })
  Object.entries(schemaData.unions).forEach(([name]) => {
    nameMap.set(name, `Union_${name}`)
  })

  // scalars
  Object.entries(schemaData.scalarTypes).forEach(([name, { input, output }]) => {
    push(`type ${nameMap.get(name)} = ScalarType<'${name}', ${input}, ${output}>`)
  })
  if (Object.keys(schemaData.scalarTypes).length) {
    helpers.add('ScalarType')
    push('')
  }

  // enums
  Object.entries(schemaData.enumTypes).forEach(([name, { values }]) => {
    push(
      `export type ${name} =`,
      ...values.map(val => `  | '${val}'`),
      `type ${nameMap.get(name)} = EnumType<'${name}', ${name}>`,
      '',
    )
  })
  if (Object.keys(schemaData.enumTypes).length) {
    helpers.add('EnumType')
  }

  // input objects
  Object.entries(schemaData.inputObjects).forEach(([name, { args }]) => {
    push(
      `type ${nameMap.get(name)} = InputObjectType<'${name}', {`,
      ...Object.entries(args).map(([key, val]) => `  ${key}: Input<'${val}', ${nameMap.get(removeModifier(val))}>`),
      `}>`,
      '',
    )
  })
  if (Object.keys(schemaData.inputObjects).length) {
    helpers.add('InputObjectType')
    helpers.add('Input')
  }

  // type
  Object.entries(schemaData.typeObjects).forEach(([name, { fields }]) => {
    push(`type ${nameMap.get(name)} = ObjectType<'${name}', {`)

    fields.forEach(({ name, args, res }) => {
      if (args && Object.keys(args).length > 0) {
        push(
          `  ${name}: Field<'${res}', ${nameMap.get(removeModifier(res))}, {`,
          ...Object.entries(args).map(([key, val]) =>
            `    ${key}: Input<'${val}', ${nameMap.get(removeModifier(val))}>`),
          `  }>`,
        )
        helpers.add('Field')
        helpers.add('Input')
      }
      else {
        push(`  ${name}: Field<'${res}', ${nameMap.get(removeModifier(res))}>`)
        helpers.add('Field')
      }
    })

    push(`}>`, '')
  })
  if (Object.keys(schemaData.typeObjects).length) {
    helpers.add('ObjectType')
  }

  // interfaces
  Object.entries(schemaData.interfaceObjects).forEach(([name, { fields, impl: _impl }]) => {
    const inheritedInterfaces = new Set<string>([name])
    const collectInheritedInterfaces = (interfaceName: string) => {
      const childs = Object.entries(schemaData.interfaceObjects)
        .filter(([_, { impl }]) => impl.includes(interfaceName))
      childs.forEach(([name]) => {
        if (!inheritedInterfaces.has(name)) {
          inheritedInterfaces.add(name)
          collectInheritedInterfaces(name)
        }
      })
    }
    collectInheritedInterfaces(name)

    const entities = new Set<string>()
    Object.entries(schemaData.typeObjects).forEach(([key, { impl: typeImpl }]) => {
      if (typeImpl.some(name => inheritedInterfaces.has(name))) {
        entities.add(key)
      }
    })

    push(
      `type ${nameMap.get(name)} = InterfaceType<'${name}', {`,
      ...fields.map(({ name, res }) => `  ${name}: Field<'${name}', Res<'${res}'>>`),
      `}, {`,
      ...Array.from(entities).map(key => `  ${key}: ${nameMap.get(key)}`),
      `}>`,
      '',
    )
  })
  if (Object.keys(schemaData.interfaceObjects).length) {
    helpers.add('InterfaceType')
    helpers.add('Field')
  }

  // union
  Object.entries(schemaData.unions).forEach(([name, { types }]) => {
    const inheritedUnions = new Set<string>([name])
    const collectInheritedUnions = (childs: Array<string>) => {
      childs.forEach((name) => {
        const child = schemaData.unions[name]
        if (child && !inheritedUnions.has(name)) {
          inheritedUnions.add(name)
          collectInheritedUnions(child.types)
        }
      })
    }
    collectInheritedUnions(types)

    const entities = new Set<string>()
    inheritedUnions.forEach((name) => {
      schemaData.unions[name].types.forEach((name) => {
        if (name in schemaData.typeObjects && !entities.has(name)) {
          entities.add(name)
        }
      })
    })

    push(
      `type ${nameMap.get(name)} = UnionType<'${name}', {`,
      ...Array.from(entities).map(key => `  ${key}: ${nameMap.get(key)}`),
      `}>`,
      '',
    )
  })
  if (Object.keys(schemaData.unions).length) {
    helpers.add('UnionType')
  }

  // schema
  push(
    `export type Schema = DefineSchema<{`,
    ...nameMap.entries().map(([name, typename]) => `  ${name}: ${typename}`),
    `}>`,
    '',
  )
  helpers.add('DefineSchema')

  // declare
  if (url) {
    push(
      `declare module '@gqfn/core/schema' {`,
      `  interface Schemas {`,
      `    '${url}': Schema`,
      `  }`,
      `}`,
      '',
    )
  }
  // ignores and import type utils
  lines.unshift(
    `/* eslint-ignore */`,
    `import type { ${[...helpers].join(', ')} } from '@gqfn/core/schema'`,
    '',
  )

  return lines.join('\n')
}

function removeModifier(str: string) {
  if (str.endsWith('!')) {
    return removeModifier(str.slice(0, -1))
  }

  if (str.startsWith('[') && str.endsWith(']')) {
    return removeModifier(str.slice(1, -1))
  }

  return str
}
