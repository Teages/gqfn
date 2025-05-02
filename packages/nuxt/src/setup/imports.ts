import type { SetupContext } from '.'
import { addImportsDir, addServerImportsDir } from '@nuxt/kit'

export function setupImports({ nuxt, resolver }: SetupContext) {
  addImportsDir(resolver.resolve('./runtime/app/utils'))
  addServerImportsDir(resolver.resolve('./runtime/server/utils'))

  // utils from '#gqfn'
  nuxt.options.alias['#gqfn'] = resolver.resolve('./runtime/app/type')
  nuxt.options.nitro.alias ??= {}
  nuxt.options.nitro.alias['#gqfn'] = resolver.resolve('./runtime/server/type')

  // allow import '@gqfn/core'
  nuxt.options.typescript.hoist.push('@gqfn/core')
  nuxt.options.typescript.hoist.push('@gqfn/core/schema')
}
