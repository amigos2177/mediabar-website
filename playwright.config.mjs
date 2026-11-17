import { defineConfig } from '@playwright/test'

const baseURL = 'http://127.0.0.1:3187'

export default defineConfig({
  testDir: './tests/navigation',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3187',
    url: baseURL,
    reuseExistingServer: false,
  },
})
