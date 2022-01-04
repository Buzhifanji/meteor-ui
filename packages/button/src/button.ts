import { VButtonType } from './interface';
import { buttonDefaultConfig } from './default-config'
import { renderButtonTemplate } from './template'
import { defineCustomElement } from '../../../utils/index'

function updateAttribute(elem: HTMLElement, name: string, value: string) {
    const shadow = elem.shadowRoot as ShadowRoot;
    if (name === 'attr-type') {
        shadow.querySelector('button')?.setAttribute('type', value)
    }
}

export class VButton extends HTMLElement {
    private config = buttonDefaultConfig
    static get observedAttributes() {
        return ['type', 'attr-type']
    }
    constructor() {
        super()
        this.render()
    }
    render() {
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = renderButtonTemplate({})
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('name', name, oldValue, newValue)
        updateAttribute(this, name, newValue)
    }
}

defineCustomElement('v-button', VButton)