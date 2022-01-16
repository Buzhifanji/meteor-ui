import { defineCustomElement } from "utils";
import { renderTextTemplate } from "./template";

const COLOR = "color";
const ROW = "line-clamp";

export class VText extends HTMLElement {
  static get observedAttributes() {
    return [COLOR, ROW];
  }
  constructor() {
    super();
    this.render();
  }
  get color() {
    return this.getAttribute(COLOR);
  }
  get [ROW]() {
    return this.getAttribute(ROW);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case ROW:
        this.updateRow();
        break;
      case COLOR:
        this.updateColor();
        break;
    }
  }
  connectedCallback() {}
  disconnectedCallback() {}
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderTextTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private updateRow() {
    if (this[ROW]) {
      this.style.setProperty("-webkit-line-clamp", this[ROW]);
    }
  }
  private updateColor() {
    const value = this.color;
    const typeList = ["primary", "success", "info", "warning", "danger"];
    if (value && !typeList.includes(value)) {
      this.style.setProperty("color", value);
    }
  }
}
defineCustomElement("v-text", VText);
