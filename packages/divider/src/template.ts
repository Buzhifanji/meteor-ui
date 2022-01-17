import { getCssVariable } from "styles/cssVariable";
import {
  backgroundColor,
  bezier,
  color,
  dashedColor,
  textColor,
} from "styles/cssVariable/variable";
import { getTemplate } from "utils/components";

export function renderDividerTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {
            display: flex;
            font-size: 16px;
            border: none;
            margin: 1.5em 0;
            color:  ${getCssVariable(textColor)};
            box-sizing: border-box;
            transition: color .3s ${getCssVariable(
              bezier
            )}, background-color .3s ${getCssVariable(bezier)};
        }
        :host(:not([place])){
            align-items: center;
            position: relative;
            width: 100%;
            height: 1px;
        }
        :host([place]) {
            background-color: ${getCssVariable(backgroundColor)};
        }
        :host([place])::before,
        :host([place])::after {
            position: relative;
            top: 50%;
            border-top: 1px solid transparent;
            border-top-color: ${getCssVariable(color)};
            border-bottom: 0;
            transform: translateY(50%);
            content: "";
        }
        :host([place][dashed])::before,
        :host([place][dashed])::after {
            border-top-style: dashed;
            border-width: 1px 0 0;
            border-top-color: ${getCssVariable(dashedColor)};
        }
        :host([place="center"])::before {
            width: 50%;
        }
        :host([place="center"])::after {
            width: 50%;
        }
        :host([place="left"])::before {
            width: 5%;
        }
        :host([place="left"])::after {
            width: 95%;
        }
        :host([place="right"])::before {
            width: 95%;
        }
        :host([place="right"])::after {
            width: 5%;
        }
      
        :host([dashed]:not([place])) {
            border-style: dashed;
            border-width: 1px 0 0;
        }
        :host(:not(dashed))  {
            background-color: ${getCssVariable(color)};
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
    </style>
    <span class="v-divider-line-content"><slot></slot></span>
    `;
  return template;
}
