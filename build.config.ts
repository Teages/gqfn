import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  entries: [
    'src/index.ts',
    'src/core/index.ts',
    'src/typed/index.ts',
    'src/cli/index.ts',
    'src/schema/index.ts',
    'src/schema/codegen/index.ts',

    // cli commands
    'src/cli/main.ts',
  ],
})
