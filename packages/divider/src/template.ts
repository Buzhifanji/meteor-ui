import { getCssVariable } from "styles/cssVariable";
import {
  backgroundColor,
  bezier,
  color,
  dashedColor,
  textColor,
} from "styles/cssVariable/variable";
import { getTemplate } from "utils/components";
import { DASHED, PALCE, VERTICAL } from "./attributesName";

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
        :host(:not([${PALCE}])){
            align-items: center;
            position: relative;
            width: 100%;
            height: 1px;
        }
        :host([${PALCE}]) {
            background-color: ${getCssVariable(backgroundColor)};
        }
        :host([${PALCE}])::before,
        :host([${PALCE}])::after {
            position: relative;
            top: 50%;
            border-top: 1px solid transparent;
            border-top-color: ${getCssVariable(color)};
            border-bottom: 0;
            transform: translateY(50%);
            content: "";
        }
        :host([${PALCE}][${DASHED}])::before,
        :host([${PALCE}][${DASHED}])::after {
            border-top-style: dashed;
            border-width: 1px 0 0;
            border-top-color: ${getCssVariable(dashedColor)};
        }
        :host([${PALCE}="center"])::before {
            width: 50%;
        }
        :host([${PALCE}="center"])::after {
            width: 50%;
        }
        :host([${PALCE}="left"])::before {
            width: 5%;
        }
        :host([${PALCE}="left"])::after {
            width: 95%;
        }
        :host([${PALCE}="right"])::before {
            width: 95%;
        }
        :host([${PALCE}="right"])::after {
            width: 5%;
        }
      
        :host([${DASHED}]:not([${PALCE}])) {
            border-style: dashed;
            border-width: 1px 0 0;
        }
        :host(:not(${DASHED}))  {
            background-color: ${getCssVariable(color)};
        }
        :host([${VERTICAL}]) {
            display: inline-flex;
            vertical-align: middle;
            top: -.06em;
            height: 0.9em;
            width: 1px;
            margin: 0 1em;
        }
        :host([${VERTICAL}][${DASHED}]) {
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
