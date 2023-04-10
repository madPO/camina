import { defineConfig } from 'vite'
import createSvgSprite from '@camina/svg-sprite'

export default defineConfig({
  plugins: [createSvgSprite({
      entry: {
        'heroicon-mini': { input: './shared/heroicon/src/20/solid' },
        'heroicon-outline': { input: './shared/heroicon/src/24/outline' },
        'heroicon-solid': { input: './shared/heroicon/src/24/solid' }
      }
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: ['app/index.ts'],
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'rollup-plugin-camina-heroicon-sprite.[format].js'
      }
    }
  }
})
