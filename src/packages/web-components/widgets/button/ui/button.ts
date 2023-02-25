import { defineWebComponent } from '../../../shared/webComponents'
import { Button } from '@camina/core/widgets/button/ui/button'
import { defineButtonAttributes } from '@camina/core/widgets/button/api/buttonInterface'

defineWebComponent<HTMLElement>('camina-button', function ({ defineAttributes, onRender }) {
  defineAttributes(defineButtonAttributes())

  onRender(Button)
}, 'button')
