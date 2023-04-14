import type { JSX } from 'jsx-dom'
import React from 'jsx-dom'
import type { HTMLAttributes } from 'jsx-dom/types'
import type { ButtonAttribute } from '../model/buttonTypes'
import { Heroicon } from '../../heroicon/ui/heroicon'
import type { defaultState } from '../../../shared/components/model/defaultState'

export function Button(props: HTMLAttributes<HTMLButtonElement> & ButtonAttribute & defaultState): JSX.Element {
  const { iconSrc, iconName, label, description, primary } = props

  return (
    <div class={{ button: true, button_default: !primary, button_primary: primary }}>
      {iconName != null && iconName.length > 0 && <Heroicon size='default' class='icon' src={iconSrc ?? ''} name={iconName} />}
      <span class='label'>{label}</span>
      {description != null && description.length > 0 && <span class='description'>{description}</span>}
      {false && <button class='action'>action</button>}
    </div>
  )
}
