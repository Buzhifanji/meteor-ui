import { Attrs, MinzeElement } from "minze";
import {
  fontFamily,
  fontSize,
  setCssVar,
  textColor,
  textColorName,
} from "../../../common/css-variable";
import { TextColor } from "./interface";

const setColor = setCssVar(textColorName); // 设置按钮颜色

export interface MeText {
  color: TextColor | null; // 类型颜色
  row: number; // 多少行才会换行
}

export class MeText extends MinzeElement {
  attrs: Attrs = ["color", ["row", 0]];

  static observedAttributes = ["color", "row"];

  onAttributeChange(
    name?: string,
    oldValue?: string | null,
    newValue?: string | null
  ) {
    if (newValue === oldValue) {
      return;
    }
    switch (name) {
      case "row":
        this.style.setProperty("-webkit-line-clamp", newValue!);
        break;
    }
  }
  html = () => /* html */ `
    <slot></slot>
  `;

  css = () => /* css */ `
    :host {
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${textColor};
    }
    slot {
      display: contents;
    }
    :host([row]) {
      display: -webkit-inline-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host([color='primary']) {
      color: ${setColor("#6777ef")};
    }
    :host([color='success']) {
      color: ${setColor("#63ed7a")};
    }
    :host([color='info']) {
      color: ${setColor("#2196f3")};
    }
    :host([color='warning']) {
      color: ${setColor("#ffc107")};
    }
    :host([color='danger']) {
      color: ${setColor("#e91e63")};
    }
  `;
}
