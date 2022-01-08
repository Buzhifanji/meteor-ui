import { defineCustomElement } from "utils";
import { renderSpaceTemplate } from "./template";

export class VSpace extends HTMLElement {
  static get observedAttributes() {
    return [];
  }
  constructor() {
    super();
    this.render();
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderSpaceTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {}
  connectedCallback() {}
  disconnectedCallback() {}
}
defineCustomElement("v-space", VSpace);
