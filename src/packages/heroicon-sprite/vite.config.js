import { defineConfig } from 'vite'
import createSvgSprite from '@camina/svg-sprite'

export default defineConfig({
  plugins: [createSvgSprite({
      entry: {
        'heroicon-mini': { input: 'shared/heroicon/optimized/20/solid/*.svg' },
        'heroicon-outline': { input: 'shared/heroicon/optimized/24/outline/*.svg' },
        'heroicon-solid': { input: 'shared/heroicon/optimized/24/solid/*.svg' }
      },
      optimisation: {
          disable: false
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
