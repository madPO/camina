# Типографика

Типографика позволяет задавать стили для разных уровней текстов. Параметры текста задаются через css классы или css переменные.

## Использование

```html
<span class="camina-text">The quick brown fox jumps over the lazy dog</span>
```

## Опции

### Тип шрифта

Ожидается, что тип шрифта будет задан в переменной `--camina-font-family`.

### Начертание шрифта

Начертание может быть 3 видов
* regular - с значением 400
* semibold - с значением 600
* bold - с значением 700

Тип начертания можно поменять комбинируя `camina-text-bold` или `camina-text-semibold`. По умолчанию шрифты размеров от `xxxxs` до `m` имеют нормальное начертание. Размеры `l` и `xl` используют тип `semibold` по умолчанию. `xxl` и `xxxl` используют тип `bold` по умолчанию.

### Размеры
Доступны следующие размеры

* `camina-text-xxxl`  = 68px
* `camina-text-xxl`   = 42px
* `camina-text-xl`    = 32px
* `camina-text-l`     = 28px
* `camina-text-m`     = 24px
* `camina-text-s`     = 18px
* `camina-text-xs`    = 16px
* `camina-text-xxs`   = 14px
* `camina-text-xxxs`  = 12px
* `camina-text-xxxxs` = 10px

## Заголовки

Для заголовков готовы отдельные стили, которые можно добавить классом `camina-text-heading`. Этот класс можоно комбинировать с размерами и начертаниями.

```html
<h1 class="camina-text camina-text-xl camina-text-heading">The quick brown fox jumps over the lazy dog</h1>
```
