import type { GraphQueryFunction as RawGraphQueryFunction } from '@gqfn/core/runtime'
import type { Endpoints, ExactEndpoints, LoadGQFn } from '../../utils/schema'
import { createGQFn } from '@gqfn/core/runtime'

export type ServerUseSchema<
  TEndpoint extends Endpoints,
> = LoadGQFn<TEndpoint> & {
  endpoint?: TEndpoint
}

/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export interface ServerUseSchemaWithWarning extends RawGraphQueryFunction {
  endpoint?: string
}

export function useGQFnSchema(): ServerUseSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): ServerUseSchema<T>
/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export function useGQFnSchema(endpoint: string): ServerUseSchemaWithWarning
export function useGQFnSchema<T extends Endpoints | string>(endpoint?: T) {
  const gqfn = createGQFn()
  Object.assign(gqfn, { endpoint })
  return gqfn as any
}
