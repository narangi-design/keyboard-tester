/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
  base: '/keyboard-tester/',
  server: {
    host: "0.0.0.0",
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:2]'
    }
  }
})
