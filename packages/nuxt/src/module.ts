import { addImportsDir, addServerImportsDir, createResolver, defineNuxtModule, updateRuntimeConfig, useLogger } from '@nuxt/kit'
import type { ClientConfig } from '@teages/gqf/cli'
import { useTypeVfs } from './utils/vfs'
import { syncSchema } from './utils/sync'

export interface ModuleOptions {
  /**
   * The list of clients to generate types for.
   */
  clients?: ClientConfig[]
  /**
   * Disable console output.
   */
  silent?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@teages/nuxt-gqf',
    configKey: 'gqf',
  },
  defaults: {
    clients: [],
    silent: false,
    // autoLoad: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger('nuxt-gqf', { level: options.silent ? 999 : undefined })

    addImportsDir(resolver.resolve('./runtime/composables'))
    // addImportsDir(resolver.resolve('./runtime/utils'))
    addServerImportsDir(resolver.resolve('./runtime/server/utils'))

    const vfs = useTypeVfs('types/gqf-schema')
    // add type imports for server
    nuxt.options.nitro.typescript = nuxt.options.nitro.typescript ?? {}
    nuxt.options.nitro.typescript.tsConfig = nuxt.options.nitro.typescript.tsConfig ?? {}
    nuxt.options.nitro.typescript.tsConfig.include = [
      ...nuxt.options.nitro.typescript.tsConfig.include ?? [],
      './types/gqf-schema/**/*',
    ]

    nuxt.options.alias['#gqf'] = resolver.resolve('./runtime')

    if (options.clients && options.clients.length > 0) {
      logger.start('Syncing GraphQL schema')
      const result = await syncSchema(options.clients)

      result.output.forEach(o => vfs.update(
        o.filename as `${string}.d.ts`,
        o.content,
      ))

      result.failed.forEach(url => logger.error(`Failed to sync Schema from ${url}`))
      if (result.success.length > 0) {
        logger.success(`Synced GraphQL schema from ${result.success.length} ${result.success.length > 1 ? 'clients' : 'client'}`)
      }
    }
    else {
      logger.warn('nuxt-gqf is installed but no clients were configured.')
    }

    updateRuntimeConfig({
      public: {
        gqf: {
          clientList: nuxt.options.dev
            ? options.clients?.map(c => typeof c === 'object' ? c.url : c) ?? []
            : undefined,
        },
      },
    } satisfies ModuleRuntimeConfig)
  },
})

export interface ModuleRuntimeConfig {
  public: {
    gqf: {
      clientList?: string[]
    }
  }
}
