import type { ButtonAttribute } from '../model/buttonTypes'
// @ts-expect-error
// todo: может быть вынести в отдельные файлы, а потом уже подключать
import style from './button.css?raw'
import { Heroicon } from '../../heroicon/ui/heroicon'
import React, { JSX } from 'jsx-dom'

export function Button (props: ButtonAttribute): JSX.Element {
  const { icon, label, description, primary } = props

  return (
    <>
      <style>
        {style}
      </style>
      <div class={{ button: true, button_default: !primary, button_primary: primary }}>
        {icon != null && icon.length > 0 && <Heroicon class='icon' type='mini' name={icon} />}
        <span class='label'>{label}</span>
        {description != null && description.length > 0 && <span class='description'>{description}</span>}
        {false && <button class='action'>action</button>}
      </div>
    </>
  )
}
