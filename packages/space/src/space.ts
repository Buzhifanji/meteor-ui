import { defineCustomElement } from "utils";
import { getNumberAndUnit } from "utils/style";
import { SapceHostStyle } from "./interface";
import { getSpaceStyle, renderSpaceTemplate } from "./template";

const INLINE = "inline";
const JUSTIFY = "justify";
const SIZE = "size";

export class VSpace extends HTMLElement {
  static get observedAttributes() {
    return [INLINE, JUSTIFY];
  }
  constructor() {
    super();
    this.render();
    this.onSlotChange();
  }
  get inline() {
    return this.getAttribute(INLINE) !== null;
  }
  set inline(value) {
    if (value === null || value === false) {
      this.removeAttribute(INLINE);
    } else {
      this.setAttribute(INLINE, "");
    }
  }
  get justify() {
    return this.getAttribute(JUSTIFY) || "flex-start";
  }
  get size() {
    let size = this.getAttribute(SIZE);
    if (size) {
      if (size === "small") {
        size = "12px";
      } else if (size === "middle") {
        size = "24px";
      } else if (size === "large") {
        size = "36px";
      }
    } else {
      size = "12px";
    }
    return size;
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case INLINE:
      case JUSTIFY:
        this.updateStyle();
        break;
      case SIZE:
        this.onSlotChange();
        break;
    }
  }
  connectedCallback() {}
  disconnectedCallback() {}
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderSpaceTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private onSlotChange() {
    const slot = this.shadowRoot!.querySelector("slot")!;
    slot.addEventListener("slotchange", () => {
      const children = slot.assignedElements();
      children.forEach((element, index) => {
        if (index !== children.length - 1) {
          const value = getNumberAndUnit(this.size);
          // 设置间距
          // 注意：每个 element 需要标签包裹，不然间距不生效
          element.setAttribute("style", `margin-right: ${value}`);
        }
      });
    });
  }
  private updateInline() {
    return this.inline ? "inline-flex" : "flex";
  }
  private updateJustify() {
    let result = "flex-start";
    switch (this.justify) {
      case "start":
        break;
      case "end":
        result = "flex-end";
        break;
      case "center":
        result = "center";
        break;
      case "space-around":
        result = "space-around";
        break;
      case "space-between":
        result = "space-between";
        break;
    }
    return result;
  }
  private updateStyle() {
    const result: SapceHostStyle = {
      display: this.updateInline(),
      justify: this.updateJustify(),
    };
    const style = this.shadowRoot!.querySelector("style")!;
    style.textContent = getSpaceStyle(result);
  }
}
defineCustomElement("v-space", VSpace);
