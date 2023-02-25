import type { heroiconAttribute } from '../model/heroiconTypes'
import type { JSX } from 'jsx-dom'
import type { HTMLAttributes } from 'jsx-dom/types'

export function Heroicon (props: HTMLAttributes<HTMLElement> & heroiconAttribute): JSX.Element {
  const size = props.type === 'mini' ? 20 : 24

  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox={(`0 0 ${size} ${size}`)} stroke='currentColor' aria-hidden='true'>
      <use xlinkHref={`${props.type}.svg#${props.name}`} />
    </svg>
  )
}
