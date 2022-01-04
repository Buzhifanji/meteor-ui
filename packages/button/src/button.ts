import { renderButtonTemplate } from './template'
import { defineCustomElement, isNull } from '../../../utils/index'

function updateAttribute(elem: HTMLElement, name: string, value: string) {
    const shadow = elem.shadowRoot as ShadowRoot;
    if (name === 'attr-type') {
        shadow.querySelector('button')?.setAttribute('type', value)
    }
}

export class VButton extends HTMLElement {
    btn: Element | null = null;
    static get observedAttributes() {
        return ['type', 'attr-type', 'disabled', 'shape']
    }
    constructor() {
        super()
        this.render()
    }
    private render() {
        this.attachShadow({ mode: 'open' })
        const template = renderButtonTemplate()
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
        this.btn = this.shadowRoot!.getElementById('btn')
        // 设置 button dom type 类型
        this.updateAttrType('button')
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('name', name, oldValue, newValue)
        const hasValue = newValue !== null;
        switch (name) {
            case 'attr-type':
                this.updateAttrType(newValue);
                break;
            case 'disabled':
                this.updateDisabled(newValue);
                break;

        }
        // updateAttribute(this, name, newValue)
    }
    connectedCallback() {
        this.addEventListener('click', this.onClick)

    }
    disconnectedCallback() {
        this.removeEventListener('click', this.onClick);
    }
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
    get attrType() {
        return this.getAttribute('disabled')
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
    private updateAttrType(value: string) {
        if (this.btn) {
            this.btn.setAttribute('type', value)
        }
    }
    private onClick() {
        console.log('click', 'clickdfsfsf')
    }
}
defineCustomElement('v-button', VButton)