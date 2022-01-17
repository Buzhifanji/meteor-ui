import { defineCustomElement, getNumberAndUnit } from "utils";
import { renderIconTemplate } from "./template";

export class VIcon extends HTMLElement {
  static get observedAttributes() {
    return ["size"];
  }
  constructor() {
    super();
    this.render();
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderIconTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get size() {
    return this.getAttribute("size") || "";
  }
  set size(value: string) {
    this.setAttribute("size", value);
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "size":
        this.updateSize(newValue);
        break;
    }
  }
  private updateSize(value: string) {
    const slot = this.shadowRoot!.querySelector("slot");
    if (slot) {
      slot.style.fontSize = getNumberAndUnit(value);
    }
  }
}
defineCustomElement("v-icon", VIcon);
