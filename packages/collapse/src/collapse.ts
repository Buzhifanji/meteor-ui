import { defineCustomElement } from "utils"
import { renderCollapseTemplate } from "./template"


export class VCollapse extends HTMLElement {
static get observedAttributes() { return [] }
constructor() {
super()
this.render()
}


attributeChangedCallback(name: string, oldValue: string, newValue: string) {

}
connectedCallback() {

}
disconnectedCallback() {
}
private render() {
this.attachShadow({ mode: 'open' })
const template = renderCollapseTemplate()
this.shadowRoot!.appendChild(template.content.cloneNode(true));
}
}
defineCustomElement('v-collapse', VCollapse )