import type { $enum } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../../utils/schema'
import { useSchema } from '@gqfn/core'

export interface ServerUseSchema<
  TEndpoint extends Endpoints,
> {
  endpoint?: TEndpoint
  gqfn: LoadGQFn<TEndpoint>
  gqp: LoadGQP<TEndpoint>
  $enum: typeof $enum
}

export interface ServerUseSchemaWithWarning {
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

export function useGQFnSchema(): ServerUseSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): ServerUseSchema<T>
/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export function useGQFnSchema(endpoint: string): ServerUseSchemaWithWarning
export function useGQFnSchema<T extends Endpoints>(endpoint?: T): ServerUseSchema<T> {
  const schema = useSchema(endpoint) as {
    gqfn: LoadGQFn<T>
    gqp: LoadGQP<T>
    $enum: DollarEnum
  }

  return {
    ...schema,
    endpoint,
  }
}
