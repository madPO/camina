import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'app/index.ts'),
      name: '@camina/core',
      fileName: '@camina-core',
      formats: ['cjs', 'umd', 'es']
    }
  },
  esbuild: {
    jsx: 'transform',
    jsxInject: 'import React from "jsx-dom";'
  }
})
