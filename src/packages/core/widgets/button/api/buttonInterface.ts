import type { ButtonAttribute } from '../model/buttonTypes'
import type { HTMLAttributes } from 'jsx-dom/types'
import type { defaultState } from '../../../shared/components/model/defaultState'

export const defineButtonAttributes: () => HTMLAttributes<HTMLButtonElement> & ButtonAttribute & defaultState = () => ({
  label: '',
  description: undefined,
  primary: false,
  type: 'default'
})
