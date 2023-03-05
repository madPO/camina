import { defineWebComponent } from '../../../shared/webComponents'
import { Heroicon, defineHeroiconAttributes } from '@camina/core'
import React, { JSX } from 'jsx-dom'
import type { heroiconAttribute } from '@camina/core/widgets/heroicon/model/heroiconTypes'
import css from '@camina/core/style/heroicon.css?raw'

defineWebComponent('camina-heroicon', function ({ defineAttributes, onRender }) {
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
