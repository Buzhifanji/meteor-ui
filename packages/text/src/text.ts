import { defineCustomElement } from "utils"
import { renderTextTemplate } from "./template"


export class VText extends HTMLElement {
static get observedAttributes() { return [] }
constructor() {
super()
this.render()
}
private render() {
this.attachShadow({ mode: 'open' })
const template = renderTextTemplate()
this.shadowRoot!.appendChild(template.content.cloneNode(true));
}

attributeChangedCallback(name: string, oldValue: string, newValue: string) {

}
connectedCallback() {

}
disconnectedCallback() {
}
}
defineCustomElement('v-text', VText )