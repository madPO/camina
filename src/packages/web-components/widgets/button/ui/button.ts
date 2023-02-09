import { defineWebComponent} from "../../../shared/webComponents";
import { Button } from "@camina/core/widgets/button/ui/button";

defineWebComponent<HTMLElement>('camina-button', function ({defineAttributes, onRender}) {
    onRender(Button);     
});