import type { HTMLAttributes } from 'jsx-dom/types'
import type { heroiconAttribute } from '../model/heroiconTypes'
import type { defaultState } from '../../../shared/components/model/defaultState'

export const defineHeroiconAttributes: () => HTMLAttributes<HTMLElement> & heroiconAttribute & defaultState = () => ({
  src: '',
  name: '',
  size: 'default',
})
