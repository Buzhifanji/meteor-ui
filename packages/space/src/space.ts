import { defineCustomElement } from "utils";
import { isAttrFalse } from "utils/judgment";
import { getNumberAndUnit } from "utils/style";
import { Align, Justify, SapceHostStyle } from "./interface";
import { getSpaceStyle, renderSpaceTemplate } from "./template";

const INLINE = "inline";
const JUSTIFY = "justify";
const SIZE = "size";
const VERTICAL = "vertical";
const ALIGN = "align";
const WARP = "wrap";

export class VSpace extends HTMLElement {
  static get observedAttributes() {
    return [INLINE, JUSTIFY, SIZE, VERTICAL, ALIGN, WARP];
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
    if (isAttrFalse(value)) {
      this.removeAttribute(INLINE);
    } else {
      this.setAttribute(INLINE, "");
    }
  }
  get justify() {
    return (this.getAttribute(JUSTIFY) as Justify) || "flex-start";
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
  get vertical() {
    return this.getAttribute(VERTICAL) !== null;
  }
  set vertical(value) {
    if (isAttrFalse(value)) {
      this.removeAttribute(VERTICAL);
    } else {
      this.setAttribute(VERTICAL, "");
    }
  }
  get align() {
    return (this.getAttribute(ALIGN) as Align) || "stretch";
  }
  get wrap() {
    return this.getAttribute(WARP) !== null;
  }
  set wrap(value) {
    if (isAttrFalse(value)) {
      this.removeAttribute(WARP);
    } else {
      this.setAttribute(WARP, "");
    }
  }
  attributeChangedCallback(name: string) {
    switch (name) {
      case INLINE:
      case VERTICAL:
      case ALIGN:
      case JUSTIFY:
      case WARP:
        this.updateStyle();
        break;
      case SIZE:
        this.onSlotChange();
        break;
    }
  }
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
          // 是否垂直布局
          const style = this.vertical
            ? `margin-bottom: ${value}`
            : `margin-right: ${value}`;
          // 设置间距
          // 注意：每个 element 需要标签包裹，不然间距不生效
          element.setAttribute("style", style);
        }
      });
    });
  }
  private updateInline() {
    return this.inline ? "inline-flex" : "flex";
  }
  private updateVertical() {
    return this.vertical ? "column" : "row";
  }
  private updateWrap() {
    return !this.wrap || this.vertical ? "nowrap" : "wrap";
  }
  private updateStyle() {
    const result: SapceHostStyle = {
      display: this.updateInline(),
      justify: this.justify,
      vertical: this.updateVertical(),
      align: this.align,
      wrap: this.updateWrap(),
    };
    const style = this.shadowRoot!.querySelector("style")!;
    style.textContent = getSpaceStyle(result);
  }
}
defineCustomElement("v-space", VSpace);
