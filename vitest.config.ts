import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*'],
    },
    typecheck: {
      enabled: true,
      tsconfig: 'test/tsconfig.json',
    },
  },
})
