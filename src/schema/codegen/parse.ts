import { type DocumentNode, parse, print } from 'graphql'

export interface ScalarTypeData {

}
export interface EnumTypeData {

}
export interface InputObjectData {

}

export interface InterfaceObjectData {
  name: string
  fields: FieldData[]
}
export interface TypeObjectData {
  name: string
  fields: FieldData[]
}
export interface UnionData {
  name: string
  types: TypeObjectData[]
}

export interface FieldData {
  name: string
  res: string
  arg?: string
}

export class SchemaData {
  constructor(schema: DocumentNode) {

  }

  print(): string {
    return 'SchemaData'
  }
}

export function parseSchema(schema: string | DocumentNode): string {
  let documentNode: DocumentNode | undefined
  if (typeof schema === 'string') {
    try {
      documentNode = parse(schema)
    }
    catch (e) {
      try {
        documentNode = parse(print(JSON.parse(schema)))
      }
      catch (e) { /* ignore */ }
    }
  }
  else {
    try {
      documentNode = parse(print(schema))
    }
    catch (e) { /* ignore */ }
  }

  if (!documentNode) {
    throw new Error('Invalid schema, require DocumentNode, Schema AST(JSON) or Schema SDL')
  }

  const schemaData = new SchemaData(documentNode)
  return schemaData.print()
}
