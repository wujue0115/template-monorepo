import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@template/core': resolve(__dirname, '../../packages/core/src/index.ts'),
      '@template/utils': resolve(__dirname, '../../packages/utils/src/index.ts'),
    },
  },
})
