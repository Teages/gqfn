// @ts-check
import { shared } from '../../eslint.config.mjs'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  shared.append({
    // disable unnecessary rules for markdown files
    files: ['**/*.md/*.ts', '**/*.md/*.js'],
    rules: {
      'ts/no-empty-object-type': 'off',
    },
  }, {
    files: ['snippets/**/*'],
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'antfu/no-top-level-await': 'off',
    },
  }),
)
