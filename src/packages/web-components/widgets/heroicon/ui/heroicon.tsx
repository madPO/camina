import { defineWebComponent } from '../../../shared/webComponents'
import { Button, defineButtonAttributes } from '@camina/core'
import React, { JSX } from 'jsx-dom'
import type { ButtonAttribute } from '@camina/core/widgets/button/model/buttonTypes'
import css from '@camina/core/style/button.css?raw'

defineWebComponent('camina-button', function ({ defineAttributes, onRender }) {
  defineAttributes(defineButtonAttributes())

  const component = (props: ButtonAttribute): JSX.Element =>
    <>
      <style>{css}</style>
      <Button {...props} />
    </>

  onRender(component)
})
