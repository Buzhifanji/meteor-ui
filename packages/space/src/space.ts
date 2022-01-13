import { defineCustomElement } from "utils";
import { isAttrFalse } from "utils/judgment";
import { getNumberAndUnit } from "utils/style";
import { Align, Justify } from "./interface";
import { renderSpaceTemplate } from "./template";

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
    return !isAttrFalse(this.getAttribute(INLINE));
  }
  get justify() {
    return (this.getAttribute(JUSTIFY) as Justify) || "flex-start";
  }
  get size() {
    let size = this.getAttribute(SIZE);
    const base = 12;
    if (size) {
      if (size === "small") {
        size = base + "px";
      } else if (size === "middle") {
        size = base * 2 + "px";
      } else if (size === "large") {
        size = base * 3 + "px";
      }
    } else {
      size = base + "px";
    }
    return size;
  }
  get vertical() {
    return !isAttrFalse(this.getAttribute(VERTICAL));
  }
  get align() {
    return (this.getAttribute(ALIGN) as Align) || "stretch";
  }
  get wrap() {
    return !isAttrFalse(this.getAttribute(WARP));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case INLINE:
        this.updateInline();
        break;
      case VERTICAL:
        this.updateVertical();
        break;
      case ALIGN:
        this.updateAlign();
        break;
      case JUSTIFY:
        this.updateJustify();
        break;
      case WARP:
        this.updateWrap();
        break;
      case SIZE:
        this.sizeUpdate();
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
      this.sizeUpdate();
    });
  }
  private sizeUpdate() {
    const slot = this.shadowRoot!.querySelector("slot")!;
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
  }
  private updateInline() {
    const value = this.inline ? "inline-flex" : "flex";
    this.style.setProperty("display", value);
  }
  private updateVertical() {
    const value = this.vertical ? "column" : "row";
    this.style.setProperty("flex-direction", value);
  }
  private updateAlign() {
    this.style.setProperty("align-items", this.align);
  }
  private updateJustify() {
    this.style.setProperty("justify-content", this.justify);
  }
  private updateWrap() {
    const value = this.wrap || this.vertical ? "nowrap" : "wrap";
    this.style.setProperty("flex-wrap", value);
  }
}
defineCustomElement("v-space", VSpace);
