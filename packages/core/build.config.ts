import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/index.ts',
    'src/runtime/index.ts',
    'src/types/index.ts',
    'src/cli/index.ts',
    'src/schema/index.ts',

    // cli commands
    'src/cli/main.ts',
  ],

  replace: { 'import.meta.vitest': 'undefined' },
})
