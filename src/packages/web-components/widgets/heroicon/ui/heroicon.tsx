import { defineWebComponent } from '../../../shared/webComponents'
import { Heroicon, defineHeroiconAttributes } from '@camina/core'
import React, { JSX } from 'jsx-dom'
import type { heroiconAttribute } from '@camina/core/widgets/heroicon/model/heroiconTypes'

defineWebComponent('camina-heroicon', function ({ defineAttributes, onRender }) {
  defineAttributes(defineHeroiconAttributes())

  const component = (props: heroiconAttribute): JSX.Element =>
    <>
      <Heroicon {...props} />
    </>

  onRender(component)
})
