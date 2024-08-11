import type { $enum } from '@gqfn/core'
import { useSchema } from '@gqfn/core'
import type { DollarEnum, Endpoints, ExactEndpoints, LoadGQFn, LoadGQP } from '../../internal/utils/schema'
import type { ModuleRuntimeConfig } from '../../../module'
import { useRuntimeConfig } from '#build/types/nitro-imports'

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
   * @deprecated The schema is not typed.
   */
  gqfn: LoadGQFn<string>
  /**
   * @deprecated The schema is not typed.
   */
  gqp: LoadGQP<string>
  $enum: typeof $enum
}

export function useGQFnSchema(): ServerUseSchema<string>
export function useGQFnSchema<T extends ExactEndpoints>(endpoint: T): ServerUseSchema<T>
/**
 * @deprecated The schema is not typed.
 */
export function useGQFnSchema(endpoint: string): ServerUseSchemaWithWarning
export function useGQFnSchema<T extends Endpoints>(endpoint?: T): ServerUseSchema<T> {
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
