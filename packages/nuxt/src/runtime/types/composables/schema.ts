import type { GraphQueryFunction as RawGraphQueryFunction } from '@gqfn/core/runtime'
import type { Endpoints, LoadGQFn } from '../../utils/schema'

export type UseGQFnSchema<
  TEndpoint extends Endpoints,
> = LoadGQFn<TEndpoint> & {
  endpoint?: TEndpoint
}

/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export interface UseGQFnSchemaWithWarning extends RawGraphQueryFunction {
  endpoint?: string
}
