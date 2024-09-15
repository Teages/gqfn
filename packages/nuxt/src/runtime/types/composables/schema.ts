import type { $enum } from '@gqfn/core'
import type { Endpoints, LoadGQFn, LoadGQP } from '../../utils/schema'

export interface UseGQFnSchema<
  TEndpoint extends Endpoints,
> {
  endpoint?: TEndpoint
  gqfn: LoadGQFn<TEndpoint>
  gqp: LoadGQP<TEndpoint>
  $enum: typeof $enum
}

export interface UseGQFnSchemaWithWarning {
  endpoint?: string
  /**
   * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
   */
  gqfn: LoadGQFn<string>
  /**
   * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}
