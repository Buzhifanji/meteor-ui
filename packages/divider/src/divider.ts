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
    this.chaneAttribute(value, DASHED);
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
    this.chaneAttribute(value, VERTICAL);
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderDividerTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private chaneAttribute(value: any, name: string) {
    Boolean(value) ? this.setAttribute(name, "") : this.removeAttribute(name);
  }
}
defineCustomElement("v-divider", VDivider);
