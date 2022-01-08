import { getTemplate } from "utils/components";

export function renderLayoutTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
      :host {
        
      }
      .v-space {
        display: flex;
      }
      ::slotted() {}
    </style>
    <div class="v-space">
      <slot></slot>
    </div>
`;
  return template;
}
