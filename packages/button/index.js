function setStyle() {
    return `
    <style>
        :host > .my-image {
            position: relative;
            display: inline-block;
            overflow: hidden;
            width: 100px;
            height: 100px;
        }
        :host .my-image_inner {
            vertical-align: top;
            width: 100%;
            height: 100%;
        }
    </style>
    `
}

function setHtml({ type }) {
    return `
    <button class="v-button" type="${type}">
        <slot></slot>
    </button>
    `
}

function updateAttribute(elem, name, value) {
    const shadow = elem.shadowRoot;
    if (name === 'attr-type') {
        shadow.querySelector('button').setAttribute('type', value)
    }
}

class VButton extends HTMLElement {
    static get observedAttributes() {
        return ['type', 'attr-type']
    }
    constructor() {
        super()
        this.setShadowRoot()
    }
    setShadowRoot() {
        const shadowRoot = this.attachShadow({ mode: 'open' })
        const htmlParam = {
            type: 'button'
        }
        shadowRoot.innerHTML = setStyle() + setHtml(htmlParam)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('name', name, oldValue, newValue)
        updateAttribute(this, name, newValue)
    }
}

customElements.define('v-button', VButton)