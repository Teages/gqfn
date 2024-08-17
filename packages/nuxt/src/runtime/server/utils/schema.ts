import type { $enum } from '@gqfn/core'
import { useSchema } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../../internal/utils/schema'

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
   * @deprecated It's not really deprecated. This deprecated is just a warning to let you know that the schema is not typed.
   */
  gqfn: LoadGQFn<string>
  /**
   * @deprecated It's not really deprecated. This deprecated is just a warning to let you know that the schema is not typed.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}

export function useGQFnSchema(): ServerUseSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): ServerUseSchema<T>
/**
 * @deprecated It's not really deprecated. This deprecated is just a warning to let you know that the schema is not typed.
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
