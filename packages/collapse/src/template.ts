import { getTemplate } from "utils/components";

export function renderCollapseTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {}

        ::slotted() {}
    </style>
    <slot name="panel"></slot>
    `;
  return template;
}

export function renderCollapsePanelTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {}

        ::slotted() {}
    </style>
    <div class="v-collasp-panel-title"></div>
    <slot></slot>
    `;
  return template;
}
