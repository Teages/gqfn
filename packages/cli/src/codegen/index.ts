import type { DocumentNode } from 'graphql'
import { parseSchema } from './parse'
import { print } from './print'

export interface CodegenOptions {
  url?: string
  scalars?: Record<string, string | { input: string, output: string }>
}

export function generate(
  schema: string | DocumentNode,
  options?: CodegenOptions,
): string {
  return print(parseSchema(schema, options), options)
}
