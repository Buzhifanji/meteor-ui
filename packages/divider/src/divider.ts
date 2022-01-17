import { defineCustomElement, expectProperty, isAttrFalse } from "utils";
import { renderDividerTemplate } from "./template";

const DASHED = "dashed";
const PALCE = "place";
const VERTICAL = "vertical";

export class VDivider extends HTMLElement {
  static get observedAttributes() {
    return [DASHED, PALCE, VERTICAL];
  }
  constructor() {
    super();
    this.render();
  }
  get dashed() {
    return !isAttrFalse(this.getAttribute(DASHED));
  }
  get place() {
    const value = this.getAttribute("place");
    if (value) {
      const placeEnums = ["left", "center", "right"];
      return expectProperty(placeEnums, value, "v-divider");
    } else {
      return null;
    }
  }
  get vertical() {
    return !isAttrFalse(this.getAttribute(VERTICAL));
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case PALCE:
        this.updatePlace();
        break;
    }
  }
  connectedCallback() {}
  disconnectedCallback() {}
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderDividerTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private updatePlace() {
    const value = this.place;
    if (value) {
    }
  }
}
defineCustomElement("v-divider", VDivider);
