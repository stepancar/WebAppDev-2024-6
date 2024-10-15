import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    timeout: 60000,
    retries: 2,
    use: {
        baseURL: 'http://localhost:3000', // базовый URL фронтенда
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium' },
        { name: 'firefox' },
    ],
});
