export function defineWebComponent<TElement extends HTMLElement>(tagName: string, setup: WebComponentSetupFunction) {
    const attributes: object = {};

    const defineAttributes: (config: object) => void = (props) => {
        Object.assign(attributes, props);
    }

    let connectedHook: () => void | Promise<void> = () => {
    };
    const onConnected: (handler: () => void | Promise<void>) => void = (handler) => {
        connectedHook = handler;
    }

    let disconnectedHook: () => void | Promise<void> = () => {
    };
    const onDisconnected: (handler: () => void | Promise<void>) => void = (handler) => {
        disconnectedHook = handler;
    }

    let renderHook: (props: object | undefined) => HTMLElement | HTMLElement[] | null = () => null;
    const onRender: (handler: (props: object | undefined) => HTMLElement | HTMLElement[] | null) => void = (handler) => {
        renderHook = handler;
    }

    setup({defineAttributes, onConnected, onDisconnected, onRender});
    customElements.define(tagName, class extends HTMLElement {

        constructor() {
            for (let key in attributes) {
                this[key] = attributes[key];
            }

            super();
        }

        connectedCallback() {
            const root = this.attachShadow({mode: 'open'});
            const child = renderHook(this.attributes);

            if(!child){
                return;
            }
            
            if(Array.isArray(child)){
                child.forEach(x => !!x && root.appendChild(x));            
            }
            else {
                root.appendChild(child);
            }
            
            connectedHook();
        }

        disconnectedCallback() {
            disconnectedHook();
        }

        static get observedAttributes() {
            const attrs: string[] = [];
            Object.keys(attributes).forEach(function (key) {
                attrs.push(key);
            });
            return attrs;
        }

        attributeChangedCallback(name: string, oldValue: string, newValue: string) {
            //  todo: тут скорее всего нужен будет дебоунс
            const root: ShadowRoot = this.shadowRoot!;
            root.replaceChildren();
            const child = renderHook(this.attributes);
            
            if(!child){
                return;
            }

            if(Array.isArray(child)){
                child.forEach(x => !!x && root.appendChild(x));
            }
            else {
                root.appendChild(child);
            }
        }
    });
}

export type WebComponentSetupFunction = (configure: {
                                             defineAttributes: (config: object) => void,
                                             onConnected: (handler: () => void | Promise<void>) => void,
                                             onDisconnected: (handler: () => void | Promise<void>) => void,
                                             onRender: (handler: (props: object | undefined) => HTMLElement | HTMLElement[] | null) => void
                                         }
) => void;