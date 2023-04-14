import { Button, defineButtonAttributes } from '@camina/core'
import type { JSX } from 'jsx-dom'
import React from 'jsx-dom'
import type { ButtonAttribute } from '@camina/core/widgets/button/model/buttonTypes'
import css from '@camina/core/style/button.css?raw'
import { defineWebComponent } from '../../../shared/webComponents'

defineWebComponent('camina-button', ({ defineAttributes, onRender }) => {
  defineAttributes(defineButtonAttributes())

  const component = (props: ButtonAttribute): JSX.Element =>
    <>
      <style>{css}</style>
      <Button {...props} />
    </>

  onRender(component)
})
