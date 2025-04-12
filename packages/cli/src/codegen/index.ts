import type { DocumentNode } from 'graphql'
import type { PrintOptions } from './print'
import { parseSchema } from './parse'
import { print } from './print'

export function generate(
  schema: string | DocumentNode,
  options?: PrintOptions,
): string {
  return print(parseSchema(schema), options)
}
