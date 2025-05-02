import type { Resolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { ConsolaInstance } from 'consola'
import type { ModuleOptions } from 'nuxt/schema'

export interface SetupContext {
  nuxt: Nuxt
  resolver: Resolver
  logger: ConsolaInstance
  options: ModuleOptions
}
