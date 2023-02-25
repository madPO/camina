import type { ButtonAttribute } from "../model/buttonTypes";

export const defineButtonAttributes: () => ButtonAttribute = () => ({
    label: '',
    icon: undefined,
    description: undefined,
    primary: false,
    type: "default"
});