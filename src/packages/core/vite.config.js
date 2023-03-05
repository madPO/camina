import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgBundle from './shared/heroicon/svgBundlePlugin'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true,
    exclude: ['dist']
  }),
  svgBundle({
    entry: {
      mini: './shared/heroicon/20/solid',
      outline: './shared/heroicon/24/outline',
      solid: './shared/heroicon/24/solid'
    },
    svgo: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              collapseGroups: false,
              cleanupIds: false
            }
          }
        }
      ]
    }
  })],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: ['app/index.ts'],
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      output: {
        entryFileNames: '@camina-core.[format].js',
        assetFileNames: '@camina-core/[name].[ext]',
        chunkFileNames: '[name].[format].js',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return '@camina-core/utils'
          }

          const matches = /widgets\/([\w\d]+)\//.exec(id)
          if (!matches || matches.length <= 0) {
            return '@camina-core/utils'
          }

          const widgetName = matches[1]
          return `@camina-core/${widgetName}`
        }
      }
    }
  },
  esbuild: {
    jsx: 'transform'
  }
})
