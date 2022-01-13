import { defineCustomElement } from "utils"
import { renderGridTemplate } from "./template"


export class VGrid extends HTMLElement {
static get observedAttributes() { return [] }
constructor() {
super()
this.render()
}
private render() {
this.attachShadow({ mode: 'open' })
const template = renderGridTemplate()
this.shadowRoot!.appendChild(template.content.cloneNode(true));
}

attributeChangedCallback(name: string, oldValue: string, newValue: string) {

}
connectedCallback() {

}
disconnectedCallback() {
}
}
defineCustomElement('v-grid', VGrid )