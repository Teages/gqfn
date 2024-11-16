import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.ts'],
    coverage: {
      include: [
        'src/runtime/**/*',
        'src/cli/codegen/**/*',
      ],
    },
    typecheck: {
      enabled: true,
      tsconfig: 'test/tsconfig.json',
    },
  },
  resolve: {
    alias: {
      graphql: 'graphql/index.js',
    },
  },
})
