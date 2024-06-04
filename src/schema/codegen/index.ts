import type { DocumentNode } from 'graphql'
import { parseSchema } from './parse'
import { print } from './print'

import type { PrintOptions } from './print'

export function generate(
  schema: string | DocumentNode,
  options?: PrintOptions,
): string {
  return print(parseSchema(schema), options)
}
