import { defineCustomElement, expectProperty } from "utils";
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
    return this.hasAttribute(DASHED);
  }
  set dashed(value: any) {
    Boolean(value)
      ? this.setAttribute(DASHED, "")
      : this.removeAttribute(DASHED);
  }

  get place() {
    return this.getAttribute(PALCE) || "";
  }
  set place(value: any) {
    if (value) {
      const placeEnums = ["left", "center", "right"];
      const result = expectProperty(placeEnums, value, "v-divider");
      if (result) {
        this.setAttribute(PALCE, result);
      } else {
        // 输入不符合枚举值，设置为"center"
        this.setAttribute(PALCE, "center");
      }
    }
  }
  get vertical() {
    return this.hasAttribute(VERTICAL);
  }
  set vertical(value: any) {
    Boolean(value)
      ? this.setAttribute(VERTICAL, "")
      : this.removeAttribute(VERTICAL);
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderDividerTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}
defineCustomElement("v-divider", VDivider);
