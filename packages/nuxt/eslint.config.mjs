// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import antfu from '@antfu/eslint-config'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    standalone: false,
    tooling: false, // managed by antfu's config
  },
  dirs: {
    src: ['./playground'],
  },
})
  .append(await antfu({}, {
    rules: {
      curly: ['error', 'all'],
    },
  }))
