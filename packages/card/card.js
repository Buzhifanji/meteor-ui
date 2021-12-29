function setStyle() {
    return `
    <style>
        :host .v-card {
            font-size: 14px;
            border: 1px solid rgb(239, 239, 245);
            display: flex;
            flex-direction: column;
            border-radius: 3px;
            width: 100%;
        }
        :host .v-card-header {
            display: flex;
            padding: 19px 24px 20px;
        }
    </style>
    `
}

function setHtml({ type }) {
    return `
    <div class="v-card">
        <div class="v-card-header"></div>
        <div class="v-card-content">
            <slot></slot>
        </div>
    </div>
    `
}

function updateAttribute(elem, name, value) {
    const shadow = elem.shadowRoot;
    if (name === 'attr-type') {
        shadow.querySelector('button').setAttribute('type', value)
    }
}

class VCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'attr-type']
    }
    constructor() {
        super()
        this.setShadowRoot()
    }
    get title() {
        return this.getAttribute('title') || ''
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

customElements.define('v-card', VCard)