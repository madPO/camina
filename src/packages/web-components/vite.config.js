import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true,
    exclude: ['dist'],
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'app/index.ts'),
      name: '@camina/web-components',
      fileName: '@camina-web-components',
      formats: ['cjs', 'umd', 'es'],
    },
    esbuild: {
      jsx: 'transform',
    },
    rollupOptions: {
      external: ['@camina/core'],
      output: {
        globals: {
          vue: '@camina/core',
        },
      },
    },
  },
})
