import { useSchema } from '@teages/gqf'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQF, LoadGQP } from '../internal/utils/schema'
import type { UseGqfSchema, UseGqfSchemaWithWarning } from '../internal/types/composables/schema'
import type { ModuleRuntimeConfig } from '../../module'
import { useRuntimeConfig } from '#imports'

export function useGqfSchema(): UseGqfSchema<string>
export function useGqfSchema<T extends ExactEndpoints>(endpoint: T): UseGqfSchema<T>
export function useGqfSchema(endpoint: string): UseGqfSchemaWithWarning
export function useGqfSchema<T extends Endpoints>(endpoint?: T): UseGqfSchema<T> {
  if (import.meta.dev && endpoint) {
    // Check if the schema is defined in the config
    (async () => {
      const { clientList } = (useRuntimeConfig() as unknown as ModuleRuntimeConfig).public.gqf
      if (clientList && !clientList.includes(endpoint)) {
        console.warn(`useGqfSchema: "${endpoint}" is not typed, please add it to gqf.clients in your nuxt config`)
      }
    })()
  }

  const schema = useSchema(endpoint) as {
    gqf: LoadGQF<T>
    gqp: LoadGQP<T>
    $enum: DollarEnum
  }

  return {
    ...schema,
    endpoint,
  }
}
