import { Attrs, MinzeElement } from "minze";
import { ariaDisabled } from "../../../common/aria/aria-statue";
import { roleButton } from "../../../common/aria/role-value";
import {
  fontFamily,
  height,
  width,
  btnBorderColor,
  fontSize,
  btnBoxShaodw,
  btnColor,
  btnBgColor,
  borderRadius,
  bezier,
  setCssVar,
} from "../../../common/css-variable";
import { ButtonAttrType, ButtonSize, ButtonType } from "./interface";

const setBtnColor = setCssVar("--one-button-color"); // 设置按钮颜色
const setBtnBoxShadow = setCssVar("--one-button-box-shadow"); // boxshadow
const setBtnBg = setCssVar("--one-button-background-color"); // 背景色
const setBtnBorder = setCssVar("--one-button-border-color"); // 边框色

export interface MeButton {
  type: ButtonType; // 类型
  attrType: ButtonAttrType;
  size: ButtonSize; // 尺寸大小
  color: string | null; // 自定义颜色
  ghost: boolean; // 是否透明背景
  disabled: boolean; // 是否禁用
  loading: boolean; // 是否禁用
  circle: boolean; // 是否圆角
}

export class MeButton extends MinzeElement {
  btnColor = setBtnColor("#63ed7a");

  attrs: Attrs = [
    "type",
    ["attr-type", "button"],
    ["size", "medium"],
    "color",
    "ghost",
    "disabled",
    "loading",
  ];

  static observedAttributes = [
    "type",
    "attrType",
    "size",
    "color",
    "disabled",
    "loading",
  ];

  // 自定义颜色
  dryColor(value: string) {
    if (this.ghost) {
      // 透明色
      this.style.setProperty("--one-button-border-color", value);
      this.style.setProperty("--one-button-color", value);
      this.style.setProperty("--one-button-color-pressed", value);
      this.style.setProperty("--one-button-border-color-pressed", value);
    } else {
      this.style.setProperty("--one-button-border-color", value);
      this.style.setProperty("--one-button-color", value);
      this.style.setProperty("--one-button-color-pressed", value);
      this.style.setProperty("--one-button-border-color-pressed", value);
    }
  }
  setDisabled() {
    const result = this.disable ? "true" : "false";
    this.setAttribute(ariaDisabled, result);
  }
  onReady() {
    this.setAttribute("role", roleButton);
    this.setDisabled();
  }
  onAttributeChange(
    name?: string,
    oldValue?: string | null,
    newValue?: string | null
  ) {
    if (newValue === oldValue) {
      return;
    }
    console.log(name, newValue);
    switch (name) {
      case "color":
        this.btnColor = setBtnColor(newValue!);
        this.dryColor(newValue!);
        break;
      case "disabled":
        this.setDisabled();
        break;
    }
  }

  html = () => /* html */ `
    <button class="button"></button>
    <slot></slot>
  `;

  css = () => /* css */ `
    :host {
      font-family: ${fontFamily};
      display: inline-flex;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      user-select: none;
      padding: 0.6em 1em;
      width: ${width};
      height: ${height};
      border: 1px solid ${btnBorderColor};
      font-size: ${fontSize};
      box-shadow: ${btnBoxShaodw};
      color: ${btnColor};
      background-color: ${btnBgColor};;
      border-radius: ${borderRadius};
      transition: color 0.3s ${bezier},
        background-color 0.3s ${bezier},
        opacity 0.3s ${bezier},
        border-color 0.3s ${bezier};
    }
    slot {
      display: contents;
    }  
    button {
      background: none;
      outline: 0;
      border: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      user-select: none;
      cursor: unset;
    }
    /* .button {
      background: linear-gradient(45deg, var(--color-primary, rgb(55 245 220)) 0%,  var(--color-secondary, rgb(50 255 160)) 100%);
      color: var(--color-dark, rgb(45 80 60));
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 0.25rem;
      box-shadow: 0 10px 15px -3px var(--shadow-primary-50, rgb(55 245 220 / 50%)), 0 4px 6px -4px var(--shadow-primary-50, rgb(55 245 220 / 50%));
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: filter 0.1s ease-in-out;
    } */

    /* .button:hover {
      filter: hue-rotate(5deg) brightness(110%);
    } */
    :host([disabled]),
    :host([loading]) {
      pointer-events: none;
      cursor: default;
      opacity: 0.6;
    }
    :host([disabled]) button,
    :host([loading]) button {
      /* pointer-events: all; */
      cursor: not-allowed;
      /* pointer-events: auto; */
    }
    /* :host([disabled]) span,
    :host([loading]) span {
      cursor: not-allowed;
    } */
    :host(:not([disabled]):active),
    :host(:not([disabled]):hover) {
      filter: hue-rotate(5deg) brightness(110%);
      /* transform: translateY(0.06em); */
      /* box-shadow: none; */
      /* box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px; */
    }
    :host(:not([disabled]):not([type]):active),
    :host(:not([disabled]):not([type]):hover) {
      border-color: ${setBtnBorder("#6777ef")};
    }
    :host(:not([disabled]):hover) {
      opacity: 0.8;
    }

    :host([type='primary']) {
      box-shadow: ${setBtnBoxShadow("#acb5f6")};
      color: ${setBtnColor("#fff")};
      background-color: ${setBtnBg("#6777ef")};
      border-color: ${setBtnBorder("#6777ef")};
    }
    :host([type='danger']) {
      box-shadow: ${setBtnBoxShadow("#fd9b96")};
      color: ${setBtnColor("#fff")};
      background-color: ${setBtnBg("#e91e63")};
      border-color: ${setBtnBorder("#e91e63")};
    }
    :host([type='info']) {
      box-shadow:  ${setBtnBoxShadow("#82d3f8")};
      color: ${setBtnColor("#fff")};
      background-color: ${setBtnBg("#2196f3")}; 
      border-color: ${setBtnBorder("#2196f3")};
    }
    :host([type='warning']) {
      box-shadow: ${setBtnBoxShadow("#ffc473")};
      color: ${setBtnColor("#fff")};
      background-color: ${setBtnBg("#ffc107")};
      border-color: ${setBtnBorder("#ffc107")};
    }
    :host([type='success']) {
      box-shadow: ${setBtnBoxShadow("#a8f5b4")};
      color: ${setBtnColor("#fff")};
      background-color: ${setBtnBg("#63ed7a")};
      border-color: ${setBtnBorder("#63ed7a")};
    }

    :host([ghost]) {
      background-color: ${setBtnBg("#fff")};
    }
    :host([ghost][type='danger']),
    :host([dashed][type='danger']) {
      color: ${setBtnColor("#e91e63")};
    }
    :host([ghost][type='primary']),
    :host([dashed][type='primary']) {
      color: ${setBtnColor("#6777ef")};
    }
    :host([ghost][type='info']),
    :host([dashed][type='info']) {
      color: ${setBtnColor("#2196f3")};
    }
    :host([ghost][type='warning']),
    :host([dashed][type='warning']) {
      color: ${setBtnColor("#ffc107")};
    }
    :host([ghost][type='success']),
    :host([dashed][type='success']) {
      color: ${setBtnColor("#63ed7a")};
    }

    :host([dashed]) {
      border-style: dashed;
      background-color: ${setBtnBg("#fff")};
    }

    :host([color][type]) {
      color: ${this.btnColor};
    }

    :host([circle]) {
      border-radius: 3em;
    }

    :host([size='mini']) {
      padding: 0.2em 0.6em;
      font-size: 12px;
    }
    :host([size='small']) {
      padding: 0.4em 0.8em;
      font-size: 14px;
    }
    :host([size='medium']) {
      padding: 0.6em 1em;
      font-size: 14px;
    }
    :host([size='big']) {
      padding: 1em 2em;
      font-size: 1.2em;
    }
  `;
}
