import { Attrs, MinzeElement } from "minze";
import {
  bezier,
  bgColor,
  dashedColorName,
  textColor,
} from "../../../common/css-variable";

export interface MeDivider {
  dashed: boolean;
  vertical: boolean;
  placement: string | null;
}

export class MeDivider extends MinzeElement {
  attrs: Attrs = ["dashed", "vertical", "placement"];

  static observedAttributes = ["dashed", "vertical", "placement"];

  html = () => /* html */ `
    <span class="v-divider-line-content">
      <slot></slot>
    </span>
  `;

  css = () => /* css */ `
     :host {
        display: flex;
        font-size: 16px;
        border: none;
        margin: 1.5em 0;
        color:  ${textColor};
        box-sizing: border-box;
        transition: color .3s ${bezier},
        background-color .3s ${bezier};
    }
    slot {
      display: contents;
    }  
    :host(:not([placement])){
        align-items: center;
        position: relative;
        width: 100%;
        height: 1px;
    }
    :host([placement]) {
        background-color: ${bgColor};
    }
    :host([placement])::before,
    :host([placement])::after {
        position: relative;
        top: 50%;
        border-top: 1px solid transparent;
        border-top-color: ${textColor};
        border-bottom: 0;
        transform: translateY(50%);
        content: "";
    }
    :host([placement][dashed])::before,
    :host([placement][dashed])::after {
        border-top-style: dashed;
        border-width: 1px 0 0;
        border-top-color: ${dashedColorName};
    }
    :host([placement="center"])::before {
        width: 50%;
    }
    :host([placement="center"])::after {
        width: 50%;
    }
    :host([placement="left"])::before {
        width: 5%;
    }
    :host([placement="left"])::after {
        width: 95%;
    }
    :host([placement="right"])::before {
        width: 95%;
    }
    :host([placement="right"])::after {
        width: 5%;
    }
  
    :host([dashed]:not([placement])) {
        border-style: dashed;
        border-width: 1px 0 0;
    }
    :host(:not(dashed))  {
        background-color: ${textColor};
    }
    :host([vertical]) {
        display: inline-flex;
        vertical-align: middle;
        top: -.06em;
        height: 0.9em;
        width: 1px;
        margin: 0 1em;
    }
    :host([vertical][dashed]) {
        border-width: 0 0 0 1px;
    }
    .v-divider-line-content {
        display: inline-flex;
        padding: 0 1em;
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
    }
  `;
}
