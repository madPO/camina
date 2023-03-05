# Иконка

Компонент для отображения иконки из svg бандла.

```
<camina-heroicon src="./solid.svg" name="square-2-stack" />
```

## Опции

|        | Тип                   | Значение по умолчанию | Описание                      |
|--------|-----------------------|-----------------------|-------------------------------|
| `name` | string                |                       | Идентификатор иконки в бандле |
| `src`  | string                |                       | Ссылка на бандл с иконками    |
| `size` | `default` или `mini`  | `default`             | Размер иконки                 |

## Поведение

Цвет иконки можно задавать через стили `color` и `fill`.
```
<style>
    .icon {
        fill: red;
        color: pink; 
    }   
</style>
<camina-heroicon class="icon" src="./solid.svg" name="heart" />
```