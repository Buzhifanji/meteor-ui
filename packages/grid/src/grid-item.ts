import { defineCustomElement } from "utils";
import { renderGridItemTemplate } from "./template";

const AREA = "area";
const SPAN = "span";

export class VGridItem extends HTMLElement {
  static get observedAttributes() {
    return [AREA, SPAN];
  }
  constructor() {
    super();
    this.render();
  }
  // 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-area
  // grid-area属性教程：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
  get area() {
    return this.getAttribute(AREA);
  }
  get span() {
    return this.getAttribute(SPAN);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case AREA:
        this.updateArea();
        break;
      case SPAN:
        this.updateSpan();
        break;
    }
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderGridItemTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private updateArea() {
    if (this.area) {
      this.style.setProperty("grid-area", this.area);
    }
  }
  private updateSpan() {
    if (!this.area) {
      this.style.setProperty("grid-column", `span ${this.span}`);
    } else {
      console.warn(
        "you have set 【area】 propery，if you want use sapn propery, please delete area!"
      );
    }
  }
}

defineCustomElement("v-grid-item", VGridItem);
