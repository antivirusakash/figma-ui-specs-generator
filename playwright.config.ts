import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/ui.spec.ts',
  testIgnore: ['**/unit/**'],
  timeout: 30_000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    headless: true,
    viewport: { width: 900, height: 900 }
  }
});
