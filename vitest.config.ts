import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@template/core': resolve(__dirname, 'packages/core/src/index.ts'),
      '@template/utils': resolve(__dirname, 'packages/utils/src/index.ts'),
    },
  },
  test: {
    include: ['packages/*/test/**/*.test.ts'],
  },
})
