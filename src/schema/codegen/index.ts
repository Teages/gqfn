import type { DocumentNode } from 'graphql'
import { parseSchema } from './parse'
import { print } from './print'

export function generate(schema: string | DocumentNode): string {
  return print(parseSchema(schema))
}
