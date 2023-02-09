/// <reference lib="DOM" />

declare namespace JSX {
    // The return type of our JSX Factory: this could be anything
    type Element = HTMLElement;

    // IntrinsicElementMap grabs all the standard HTML tags in the TS DOM lib.
    interface IntrinsicElements extends IntrinsicElementMap { }


    // The following are custom types, not part of TS's known JSX namespace:
    type IntrinsicElementMap = {
        [K in keyof HTMLElementTagNameMap]: {
            [k: string]: any
        }
    }

    interface Component {
        (properties?: { [key: string]: any }, children?: Node[]): Node
    }
}

export function createElement(tag, props, ...children) {
    if (typeof tag === "function") return tag(props, ...children);
    const element = document.createElement(tag);

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith("on") && name.toLowerCase() in window)
            element.addEventListener(name.toLowerCase().substr(2), value);
        else element.setAttribute(name, value.toString());
    });

    children.forEach(child => {
        appendChild(element, child);
    });

    return element;
};

function appendChild (parent, child) {
    if (Array.isArray(child))
        child.forEach(nestedChild => appendChild(parent, nestedChild));
    else
        parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export function createFragment (props, ...children) {
    return children;
};
