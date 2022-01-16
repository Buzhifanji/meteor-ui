import { getCssVariable } from "styles/cssVariable";
import {
  dangerTextColor,
  fontSize,
  infoTextColor,
  primaryTextColor,
  successTextColor,
  textColor,
  warningTextColor,
} from "styles/cssVariable/variable";
import { getTemplate } from "utils/components";

export function renderTextTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {
            font-size:${getCssVariable(fontSize)};
            color: ${getCssVariable(textColor)};
        }
        :host([line-clamp]) {
            display: -webkit-inline-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        :host([color="primary"]) {
          color: ${getCssVariable(primaryTextColor)};
        }
        :host([color="success"]) {
          color: ${getCssVariable(successTextColor)};
        }
        :host([color="info"]) {
          color: ${getCssVariable(infoTextColor)};
        }
        :host([color="warning"]) {
          color: ${getCssVariable(warningTextColor)};
        }
        :host([color="danger"]) {
          color: ${getCssVariable(dangerTextColor)};
        }
    </style>
    <slot></slot>
    `;
  return template;
}
