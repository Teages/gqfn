import { useSchema } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../../utils/schema'
import type { UseGQFnSchema, UseGQFnSchemaWithWarning } from '../../types/composables/schema'

export function useGQFnSchema(): UseGQFnSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): UseGQFnSchema<T>
/**
 * @deprecated It's not really deprecated. The schema is not typed, maybe you input a wrong endpoint or forget to add it to nuxt config.
 */
export function useGQFnSchema(endpoint: string): UseGQFnSchemaWithWarning
export function useGQFnSchema<T extends Endpoints>(endpoint?: T): UseGQFnSchema<T> {
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
