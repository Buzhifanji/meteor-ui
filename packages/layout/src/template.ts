import { getTemplate } from "utils/components";

export function renderLayoutTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
<style>
    :host {}

    ::slotted() {}
</style>
<slot></slot>
`;
  return template;
}
