import { getTemplate } from "utils/components";
import { SapceHostStyle } from "./interface";

export function renderSpaceTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        ${getSpaceStyle({ display: "flex", justify: "flex-start" })}
      ::slotted() {
          
      }
    </style>
    <slot></slot>
`;
  return template;
}

export function getSpaceStyle({ display, justify }: SapceHostStyle) {
  return `
    :host {
        display: ${display};
        flex-flow: row wrap;
        justify-content: ${justify};
        // margin-top: -4px;
        // margin-bottom: -4px;
      }
    `;
}
