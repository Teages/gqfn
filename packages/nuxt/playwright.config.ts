import type { ConfigOptions } from '@nuxt/test-utils/playwright'
import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

export default defineConfig<ConfigOptions>({
  testMatch: 'test/**/*.test.ts',
  projects: [{ name: 'chromium', use: devices['Desktop Chrome'] }],
  webServer: [
    {
      command: 'pnpm tsx ./test/servers/subscription/main.ts',
      port: 64961,
      timeout: 10 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
})
