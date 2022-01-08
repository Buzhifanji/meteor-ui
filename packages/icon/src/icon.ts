import { defineCustomElement } from "utils";
import { renderIconTemplate } from "./template";

const pureNumberRegex = /^(\d|\.)+$/;

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
      // 支持 40 40px 40em 40rem
      // 默认 px
      const result = pureNumberRegex.test(value) ? value + "px" : value;
      slot.style.fontSize = result;
    }
  }
}
defineCustomElement("v-icon", VIcon);
