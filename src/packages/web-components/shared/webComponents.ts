﻿export function defineWebComponent<TElement extends HTMLElement>(tagName: string, setup: WebComponentSetupFunction, extend?: string) {
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
            super();
            
            for (let key in attributes) {
                this[key] = attributes[key];
            }
        }

        connectedCallback() {
            const root = this.attachShadow({mode: 'open'});
            this._render(root);
            
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
            const root: ShadowRoot | null = this.shadowRoot;
            
            this._render(root);
        }
        
        private _render(root: ShadowRoot | null){
            if(!root){
                return;
            }

            root.replaceChildren();
            const props = {};
            for (let i = 0; i < this.attributes.length; i++) {
                const attribute =  this.attributes[i];
                props[attribute.name] = attribute.value;                
            }
            
            const child = renderHook(props);

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