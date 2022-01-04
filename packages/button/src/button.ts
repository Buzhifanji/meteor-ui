import { VButtonType } from './interface';
import { buttonDefaultConfig } from './default-config'
import { renderButtonTemplate } from './template'
import { defineCustomElement, isNull } from '../../../utils/index'

function updateAttribute(elem: HTMLElement, name: string, value: string) {
    const shadow = elem.shadowRoot as ShadowRoot;
    if (name === 'attr-type') {
        shadow.querySelector('button')?.setAttribute('type', value)
    }
}

export class VButton extends HTMLElement {
    private config = buttonDefaultConfig
    btn: Element | null = null;
    static get observedAttributes() {
        return ['type', 'attr-type', 'disabled']
    }
    constructor() {
        super()
        this.render()
    }
    private render() {
        this.attachShadow({ mode: 'open' })
        const template = renderButtonTemplate({})
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    //     console.log('name', name, oldValue, newValue)
    //     if (name === 'disabled') {
    //         this.updateDisabled(newValue)
    //     }
    //     updateAttribute(this, name, newValue)
    // }
    // connectedCallback() {
    //     // this.btn = this.shadowRoot!.querySelector('#v-button')
    //     this.addEventListener('click', function (ev) {
    //         console.log('click', 'clickdfsfsf')
    //     })
    // }
    get disabled() {
        return this.getAttribute('disabled') !== null;
    }
    set disabled(value) {
        if (value === null || value === false) {
            this.removeAttribute('disabled');
        } else {
            this.setAttribute('disabled', '');
        }
    }
    private updateDisabled(newValue: string) {
        if (this.btn) {
            if (isNull(newValue)) {
                // this.shadowRoot.removeChild(this.load);
                this.btn.removeAttribute('disabled');
            } else {
                this.btn.setAttribute('disabled', 'disabled');
            }
        }
    }

}
defineCustomElement('v-button', VButton)
// customElements.define('v-button', VButton, { extends: 'button' });