import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/index.ts',
    'src/runtime/index.ts',
    'src/types/index.ts',
    'src/schema/index.ts',
  ],

  replace: { 'import.meta.vitest': 'undefined' },
})
