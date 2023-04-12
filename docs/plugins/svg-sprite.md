# svg-sprite плагин

Плагин собирает спрайты svg иконок из отдельных svg изображений.

## Использование
Установить плагин

```shell
npm -D install @camina/svg-sprite
```

Добавить в `vite.config.js`

```js
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
})
```

## Опции

|         | Тип               | Значение по умолчанию | Описание                                   |
|---------|-------------------|-----------------------|--------------------------------------------|
| `entry` | SvgSpriteEntry    |                       | Перечисление всех исходных наборов иконок  |
| `optimisation`   | конфигурация svgo |                       | Конфигурация svgo для оптимизации спрайтов |