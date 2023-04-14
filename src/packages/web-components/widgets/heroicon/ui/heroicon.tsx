import { Heroicon, defineHeroiconAttributes } from '@camina/core'
import type { JSX } from 'jsx-dom'
import React from 'jsx-dom'
import type { heroiconAttribute } from '@camina/core/widgets/heroicon/model/heroiconTypes'
import css from '@camina/core/style/heroicon.css?raw'
import { defineWebComponent } from '../../../shared/webComponents'

defineWebComponent('camina-heroicon', ({ defineAttributes, onRender }) => {
  defineAttributes(defineHeroiconAttributes())

  const component = (props: heroiconAttribute): JSX.Element =>
    <>
      <style>
        {css}
      </style>
      <Heroicon {...props} />
    </>

  onRender(component)
})
