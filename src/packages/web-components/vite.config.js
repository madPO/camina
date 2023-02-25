import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true,
    exclude: ['dist']
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'app/index.ts'),
      name: '@camina/web-components',
      fileName: '@web-components',
      formats: ['cjs', 'umd', 'es']
    },
    esbuild: {
      jsx: 'transform',
      jsxInject: 'import React from "jsx-dom";'
    },
    rollupOptions: {
      external: ['@camina/core'],
      output: {
        globals: {
          vue: '@camina/core'
        }
      }
    }
  }
})
