import { addImportsDir, addServerImportsDir, createResolver, defineNuxtModule, useLogger } from '@nuxt/kit'
import type { ClientConfig } from '@gqfn/core/cli'
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

    addImportsDir(resolver.resolve('./runtime/app/composables'))
    // addImportsDir(resolver.resolve('./runtime/app/utils'))

    addServerImportsDir(resolver.resolve('./runtime/server/utils'))

    const vfs = useTypeVfs('types/gqfn-schema')
    // add type imports for server
    nuxt.options.nitro.typescript = nuxt.options.nitro.typescript ?? {}
    nuxt.options.nitro.typescript.tsConfig = nuxt.options.nitro.typescript.tsConfig ?? {}
    nuxt.options.nitro.typescript.tsConfig.include = [
      ...nuxt.options.nitro.typescript.tsConfig.include ?? [],
      './types/gqfn-schema/**/*',
    ]

    nuxt.options.alias['#gqfn'] = resolver.resolve('./runtime')

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
      logger.warn('@gqfn/nuxt is installed but no clients were configured.')
    }
  },
})
