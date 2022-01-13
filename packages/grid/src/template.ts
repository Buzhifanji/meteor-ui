import { getTemplate } from "utils/components";

export function renderGridTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
        <style>
            :host {
                display:grid;
                grid-template-columns:repeat(auto-fill ,1fr);
                grid-gap: 0;
            }
        </style>
        <slot></slot>
    `;
  return template;
}

export function renderGridItemTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
        <style>
            :host {
                display:grid;
                grid-template-columns:repeat(24,1fr);
                grid-gap: 0;
            }
        </style>
        <slot></slot>
    `;
  return template;
}
