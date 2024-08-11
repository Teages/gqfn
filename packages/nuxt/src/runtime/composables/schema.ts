import { useSchema } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../internal/utils/schema'
import type { UseGQFnSchema, UseGQFnSchemaWithWarning } from '../internal/types/composables/schema'
import type { ModuleRuntimeConfig } from '../../module'
import { useRuntimeConfig } from '#imports'

export function useGQFnSchema(): UseGQFnSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): UseGQFnSchema<T>
export function useGQFnSchema(endpoint: string): UseGQFnSchemaWithWarning
export function useGQFnSchema<T extends Endpoints>(endpoint?: T): UseGQFnSchema<T> {
  if (import.meta.dev && endpoint) {
    // Check if the schema is defined in the config
    (async () => {
      const { clientList } = (useRuntimeConfig() as unknown as ModuleRuntimeConfig).public.gqfn
      if (clientList && !clientList.includes(endpoint)) {
        console.warn(`useGQFnSchema: "${endpoint}" is not typed, please add it to gqfn.clients in your nuxt config`)
      }
    })()
  }

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
