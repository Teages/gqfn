import type { ClientConfig } from '@gqfn/cli'
import type { SetupContext } from './setup'
import { createResolver, defineNuxtModule, useLogger } from '@nuxt/kit'
import { setupImports } from './setup/imports'
import { setupSchema } from './setup/schema'

export interface ModuleOptions {
  /**
   * The list of clients to generate types for.
   */
  clients?: (ClientConfig | string)[]
  /**
   * Disable console output.
   */
  silent?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@gqfn/nuxt',
    configKey: 'gqfn',
  },
  defaults: {
    clients: [],
    silent: false,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger('@gqfn/nuxt', { level: options.silent ? 999 : undefined })
    const ctx: SetupContext = { nuxt, resolver, logger, options }

    setupImports(ctx)
    await setupSchema(ctx)
  },
})
