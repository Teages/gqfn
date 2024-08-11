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
   * @deprecated The schema is not typed.
   */
  gqfn: LoadGQFn<string>
  /**
   * @deprecated The schema is not typed.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}
