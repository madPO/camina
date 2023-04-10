import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true,
    exclude: ['dist', 'node_modules']
  })],
  build: {
    lib: {
      entry: ['app/index.ts'],
      formats: ['es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'rollup-plugin-camina-svg-sprite.[format].js'
      }
    }
  }
})
