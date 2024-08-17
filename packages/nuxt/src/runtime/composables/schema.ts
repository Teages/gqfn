import { useSchema } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../internal/utils/schema'
import type { UseGQFnSchema, UseGQFnSchemaWithWarning } from '../internal/types/composables/schema'

export function useGQFnSchema(): UseGQFnSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): UseGQFnSchema<T>
/**
 * @deprecated It's not really deprecated. This deprecated is just a warning to let you know that the schema is not typed.
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
