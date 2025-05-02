import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/index.ts',
    'src/schema.ts',
  ],

  replace: { 'import.meta.vitest': 'undefined' },
})
