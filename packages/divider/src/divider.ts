import { defineCustomElement } from "utils"
import { renderDividerTemplate } from "./template"


export class VDivider extends HTMLElement {
static get observedAttributes() { return [] }
constructor() {
super()
this.render()
}


attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  if(oldValue === newValue) {
    return
  }
}
connectedCallback() {

}
disconnectedCallback() {
}
private render() {
this.attachShadow({ mode: 'open' })
const template = renderDividerTemplate()
this.shadowRoot!.appendChild(template.content.cloneNode(true));
}
}
defineCustomElement('v-divider', VDivider )