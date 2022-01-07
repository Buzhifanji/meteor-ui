import { defineCustomElement } from "utils"
import { renderLayoutTemplate } from "./template"


export class VLayout extends HTMLElement {
    static get observedAttributes() { return [] }
    constructor() {
        super()
        this.render()
    }
    private render() {
        this.attachShadow({ mode: 'open' })
        const template = renderLayoutTemplate()
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {

    }
    connectedCallback() {

    }
    disconnectedCallback() {
    }
}
defineCustomElement('v-layout', VLayout)