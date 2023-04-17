import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['dist'],
    })],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: ['app/index.ts'],
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '@camina-core.[format].js',
        assetFileNames: 'assert/[name].[ext]',
        chunkFileNames: '[name].[format].js',
        manualChunks: (id) => {
          if (id.includes('node_modules'))
            return '@camina-core/utils'

          const matches = /widgets\/([\w\d]+)\//.exec(id)
          if (!matches || matches.length <= 0)
            return '@camina-core/utils'

          const widgetName = matches[1]
          return `components/${widgetName}`
        },
      },
    },
  },
  esbuild: {
    jsx: 'transform',
  },
})
