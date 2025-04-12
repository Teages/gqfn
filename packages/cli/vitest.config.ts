import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.ts'],
    coverage: {
      include: [
        'src/**/*',
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
