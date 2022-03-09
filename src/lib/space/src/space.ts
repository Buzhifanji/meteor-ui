import { Attrs, MinzeElement } from "minze";
import { getNumberAndUnit } from "../../../common/style";
import { Align, Justify, Wrap } from "./interface";

export interface MeSpace {
  inline: boolean; // 是否为行内元素
  justify: Justify; // 水平排列方式
  size: string | number;
  vertical: boolean; // 是否垂直布局
  align: Align; // 对齐方式
  wrap: Wrap; // 是否超出换行
}

export class MeSpace extends MinzeElement {
  attrs: Attrs = [
    ["inline", false],
    ["justify", "flex-start"],
    ["size", "12px"],
    ["vertical", false],
    ["align", "stretch"],
    ["wrap", "wrap"],
  ];

  static observedAttributes = [
    "inline",
    "justify",
    "size",
    "vertical",
    "align",
    "wrap",
  ];
  slotElements: HTMLSlotElement | null = null; // 插槽
  onRender() {
    this.slotElements = this.select("slot");
    this.slotElements?.addEventListener("slotchange", () => {
      this.sizeUpdate();
    });
  }
  onAttributeChange(
    name?: string,
    oldValue?: string | null,
    newValue?: string | null
  ) {
    if (newValue === oldValue) {
      return;
    }
    switch (name) {
      case "size":
        this.sizeUpdate();
        break;
    }
  }

  html = () => /* html */ `
    <slot></slot>
  `;

  css = () => /* css */ `
    :host {
      display: ${this.inline ? "inline-flex" : "flex"};
        flex-flow: row wrap;
        justify-content: ${this.justify};
        flex-direction: ${this.vertical ? "column" : "row"};
        align-items: ${this.align};
        flex-wrap: ${this.wrap || this.vertical ? "nowrap" : "wrap"};
    }
    /* slot {
      display: contents;
    } */
  `;
  private sizeUpdate() {
    if (this.slotElements) {
      const children = this.slotElements.assignedElements();
      children.forEach((element, index) => {
        if (index !== children.length - 1) {
          const value = getNumberAndUnit(this.size as string);
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
  }
}
