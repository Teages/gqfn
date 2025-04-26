import type { DocumentNode, EnumTypeDefinitionNode, FieldDefinitionNode, InputObjectTypeDefinitionNode, InterfaceTypeDefinitionNode, NameNode, ObjectTypeDefinitionNode, ScalarTypeDefinitionNode, UnionTypeDefinitionNode } from 'graphql'
import { Kind, parse, print } from 'graphql'

export interface ItemData { name: string }

export interface ScalarTypeData extends ItemData {
  input: string
  output: string
}
export interface EnumTypeData extends ItemData {
  values: string[]
}
export interface InputObjectData extends ItemData {
  args: Record<string, string>
}

export interface InterfaceObjectData extends TypeObjectData {}
export interface TypeObjectData extends ItemData {
  fields: FieldData[]
  impl: string[]
}
export interface UnionData extends ItemData {
  types: string[]
}

export interface FieldData extends ItemData {
  res: string
  args?: Record<string, string>
}

const DEFAULT_SCALARS: Record<string, { input: string, output: string }> = {
  Int: {
    input: 'number',
    output: 'number',
  },
  Float: {
    input: 'number',
    output: 'number',
  },
  String: {
    input: 'string',
    output: 'string',
  },
  Boolean: {
    input: 'boolean',
    output: 'boolean',
  },
  ID: {
    input: 'string | number',
    output: 'string | number',
  },
}

export class SchemaData {
  scalarTypes: Record<string, ScalarTypeData> = {}
  enumTypes: Record<string, EnumTypeData> = {}
  inputObjects: Record<string, InputObjectData> = {}
  interfaceObjects: Record<string, InterfaceObjectData> = {}
  typeObjects: Record<string, TypeObjectData> = {}
  unions: Record<string, UnionData> = {}

  constructor(schema: DocumentNode) {
    if (schema.kind !== Kind.DOCUMENT) {
      throw new Error('Invalid schema, require DocumentNode')
    }

    schema.definitions.forEach((def) => {
      switch (def.kind) {
        case Kind.ENUM_TYPE_DEFINITION: {
          const node = parseEnumNode(def)
          if (this.enumTypes[node.name]) {
            throw new Error(`Duplicate enum type: ${node.name}`)
          }
          this.enumTypes[node.name] = node
          break
        }
        case Kind.SCALAR_TYPE_DEFINITION: {
          const node = parseScalarNode(def)
          if (this.scalarTypes[node.name]) {
            throw new Error(`Duplicate scalar type: ${node.name}`)
          }
          this.scalarTypes[node.name] = node
          break
        }
        case Kind.INPUT_OBJECT_TYPE_DEFINITION: {
          const node = parseInputObjectNode(def)
          if (this.inputObjects[node.name]) {
            throw new Error(`Duplicate input object type: ${node.name}`)
          }
          this.inputObjects[node.name] = node
          break
        }
        case Kind.INTERFACE_TYPE_DEFINITION: {
          const node = parseInterfaceNode(def)
          if (this.interfaceObjects[node.name]) {
            throw new Error(`Duplicate interface object type: ${node.name}`)
          }
          this.interfaceObjects[node.name] = node
          break
        }
        case Kind.OBJECT_TYPE_DEFINITION: {
          const node = parseTypeObjectNode(def)
          if (this.typeObjects[node.name]) {
            throw new Error(`Duplicate type object type: ${node.name}`)
          }
          this.typeObjects[node.name] = node
          break
        }
        case Kind.UNION_TYPE_DEFINITION: {
          const node = parseUnion(def)
          if (this.unions[node.name]) {
            throw new Error(`Duplicate union type: ${node.name}`)
          }
          this.unions[node.name] = node
          break
        }
        default: {
          // ignore
        }
      }
    })

    // add default scalars if not exist
    Object.entries(DEFAULT_SCALARS).forEach(([name, { input, output }]) => {
      if (!this.scalarTypes[name]) {
        this.scalarTypes[name] = { name, input, output }
      }
    })
  }
}

function parseEnumNode(def: EnumTypeDefinitionNode): EnumTypeData {
  const name = parseName(def.name)
  const values: Array<string> = def.values?.map(val => parseName(val.name)) ?? []

  return { name, values }
}

function parseScalarNode(def: ScalarTypeDefinitionNode): ScalarTypeData {
  const name = parseName(def.name)

  return { name, input: 'unknown', output: 'unknown' }
}

function parseInputObjectNode(def: InputObjectTypeDefinitionNode): InputObjectData {
  const name = parseName(def.name)
  const args: Record<string, string> = {}

  def.fields?.forEach((field) => {
    const name = parseName(field.name)
    const type = print(field.type)
    args[name] = type
  })

  return { name, args }
}

function parseInterfaceNode(def: InterfaceTypeDefinitionNode): InterfaceObjectData {
  const name = parseName(def.name)
  const fields: FieldData[] = def.fields?.map(field => parseFieldNode(field)) ?? []
  const imps: string[] = def.interfaces?.map(node => parseName(node.name)) ?? []

  return { name, fields, impl: imps }
}

function parseTypeObjectNode(def: ObjectTypeDefinitionNode): TypeObjectData {
  const name = parseName(def.name)
  const fields: FieldData[] = def.fields?.map(field => parseFieldNode(field)) ?? []
  const imps: string[] = def.interfaces?.map(node => parseName(node.name)) ?? []

  return { name, fields, impl: imps }
}

function parseUnion(def: UnionTypeDefinitionNode): UnionData {
  const name = parseName(def.name)
  const types = def.types?.map(node => parseName(node.name)) ?? []

  return { name, types }
}

function parseFieldNode(def: FieldDefinitionNode): FieldData {
  const name = parseName(def.name)
  const res = print(def.type)
  const args: Record<string, string> = {}

  def.arguments?.forEach((arg) => {
    const name = parseName(arg.name)
    const type = print(arg.type)
    args[name] = type
  })

  return { name, res, args }
}

function parseName(node: NameNode): string {
  return node.value
}

export function parseSchema(schema: string | DocumentNode): SchemaData {
  let documentNode: DocumentNode | undefined
  if (typeof schema === 'string') {
    try {
      documentNode = parse(schema, { noLocation: true })
    }
    catch {
      try {
        documentNode = parse(print(JSON.parse(schema)), { noLocation: true })
      }
      catch { /* ignore */ }
    }
  }
  else {
    try {
      documentNode = parse(print(schema), { noLocation: true })
    }
    catch { /* ignore */ }
  }

  if (!documentNode) {
    throw new Error('Invalid schema, require DocumentNode, Schema AST(JSON) or Schema SDL')
  }

  return new SchemaData(documentNode)
}
