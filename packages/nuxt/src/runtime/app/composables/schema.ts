import type { UseGQFnSchema, UseGQFnSchemaWithWarning } from '../../types/composables/schema'
import type { Endpoints, ExactEndpoints } from '../../utils/schema'
import { createGQFn } from '@gqfn/core/runtime'

export function useGQFnSchema(): UseGQFnSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): UseGQFnSchema<T>
/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export function useGQFnSchema(endpoint: string): UseGQFnSchemaWithWarning
export function useGQFnSchema<T extends Endpoints>(endpoint?: T) {
  const gqfn = createGQFn()
  Object.assign(gqfn, { endpoint })
  return gqfn as any
}
