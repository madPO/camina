import { defineConfig } from 'vite'
import createSvgSprite from '@camina/svg-sprite'

export default defineConfig({
  plugins: [createSvgSprite({
      entry: {
        'heroicon-mini': { input: 'shared/heroicon/src/20/solid/*.svg' },
        'heroicon-outline': { input: 'shared/heroicon/src/24/outline/*.svg' },
        'heroicon-solid': { input: 'shared/heroicon/src/24/solid/*.svg' }
      }
    })
  ],
  build: {
    lib: {
      entry: ['app/index.ts'],
      formats: ['es']
    }
  }
})
