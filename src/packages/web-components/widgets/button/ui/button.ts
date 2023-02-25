import { defineWebComponent } from '../../../shared/webComponents'
import { Button, defineButtonAttributes } from '@camina/core'

defineWebComponent('camina-button', function ({ defineAttributes, onRender }) {
  defineAttributes(defineButtonAttributes())

  onRender(Button)
}, 'button')
