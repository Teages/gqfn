import type { SetupContext } from '.'
import { syncSchema } from '../utils/sync'
import { useTypeVfs } from '../utils/vfs'

export async function setupSchema({ nuxt, resolver, logger, options }: SetupContext) {
  const vfs = useTypeVfs('types/gqfn-schema')

  // add schema types
  nuxt.options.nitro.typescript ??= {}
  nuxt.options.nitro.typescript.tsConfig ??= {}
  nuxt.options.nitro.typescript.tsConfig.include ??= []
  nuxt.options.nitro.typescript.tsConfig.include.push('./types/gqfn-schema')

  nuxt.options.nitro.typescript.tsConfig.compilerOptions ??= {}
  nuxt.options.nitro.typescript.tsConfig.compilerOptions.paths ??= {}
  nuxt.options.nitro.typescript.tsConfig.compilerOptions.paths['#gqfn'] = [resolver.resolve('./runtime')]

  // sync schema
  if (options.clients && options.clients.length > 0) {
    logger.start('Syncing GraphQL schema')
    const result = await syncSchema(options.clients)

    await Promise.allSettled(
      result.output.map(o => vfs.update(
        o.filename as `${string}.d.ts`,
        o.content,
      )),
    )

    result.failed.forEach(url => logger.error(`Failed to sync Schema from ${url}`))
    if (result.success.length > 0) {
      logger.success(`Synced GraphQL schema from ${result.success.length} ${result.success.length > 1 ? 'clients' : 'client'}`)
    }
  }
  else {
    logger.warn('@gqfn/nuxt is installed but no clients were configured.')
  }
}
