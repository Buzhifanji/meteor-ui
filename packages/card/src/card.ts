import { defineCustomElement } from "utils";
import { renderCardTemplate } from "./template";

export class VCard extends HTMLElement {
  static get observedAttributes() {
    return [];
  }
  constructor() {
    super();
    this.render();
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderCardTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {}
  connectedCallback() {}
  disconnectedCallback() {}
}
defineCustomElement("v-card", VCard);
