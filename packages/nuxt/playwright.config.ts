import process from 'node:process'
import { defineConfig } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  testMatch: 'test/**/*.test.ts',
  webServer: [
    {
      command: 'pnpm tsx ./test/servers/subscription/main.ts',
      port: 64961,
      timeout: 10 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
})
