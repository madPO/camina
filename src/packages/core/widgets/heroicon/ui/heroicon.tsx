import type { JSX } from 'jsx-dom'
import React from 'jsx-dom'
import type { HTMLAttributes } from 'jsx-dom/types'
import type { heroiconAttribute } from '../model/heroiconTypes'
import type { defaultState } from '../../../shared/components/model/defaultState'

export function Heroicon(props: HTMLAttributes<HTMLElement> & heroiconAttribute & defaultState): JSX.Element {
  const classList = {
    'camina-icon': true,
    'camina-icon_disabled': props.disabled ?? false,
    'camina-icon_readonly': props.readonly ?? false,
    'camina-icon_error': props.error ?? false,
    'camina-icon_progress': props.progress ?? false,
    'camina-icon_required': props.required ?? false,
    'camina-icon_mini': props.size === 'mini',
  }

  return (
    <svg class={classList} xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' aria-hidden='true'>
      <use xlinkHref={`${props.src}#${props.name}`} />
    </svg>
  )
}
