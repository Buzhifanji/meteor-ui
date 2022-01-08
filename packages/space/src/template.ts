import { getTemplate } from "utils/components";
import { SapceHostStyle } from "./interface";

export function renderSpaceTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        ${getSpaceStyle({
          display: "flex",
          justify: "flex-start",
          vertical: "row;",
          align: "stretch",
        })}
    </style>
    <slot></slot>
`;
  return template;
}

export function getSpaceStyle({
  display,
  justify,
  vertical,
  align,
}: SapceHostStyle) {
  return `
    :host {
        display: ${display};
        flex-flow: row wrap;
        justify-content: ${justify};
        flex-direction: ${vertical};
        align-items: ${align};
      }
    `;
}
