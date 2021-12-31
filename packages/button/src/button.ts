import { VButtonType } from './interface';
import { buttonDefaultConfig } from './default-config'
import { renderButtonTemplate } from './template'

function setStyle() {
    return `
    <style>
        :host > .my-image {/*  */
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

function setHtml({ attrType }: VButtonType) {
    return `
    <button class="v-button" type="${attrType}">
        <slot></slot>
    </button>
    `
}

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
        const htmlParam: VButtonType = {
            attrType: 'button'
        }
        shadowRoot.innerHTML = setStyle() + setHtml(htmlParam)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('name', name, oldValue, newValue)
        updateAttribute(this, name, newValue)
    }
}
