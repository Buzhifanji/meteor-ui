import { ariaControls } from "aria/aria-attribute";
import { roleButton, roleRegionn } from "aria/role-value";
import { getCssVariable } from "styles/cssVariable";
import {
  bezier,
  dividerColor,
  fontSize,
  textColor,
} from "styles/cssVariable/variable";
import { getTemplate } from "utils/components";

export function renderCollapseTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {
            display: block;
        }

        ::slotted() {}
    </style>
    <slot name="panel"></slot>
    `;
  return template;
}

export function renderCollapsePanelTemplate(id: number): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
    <style>
        :host {
            display: block;
            font-size: ${getCssVariable(fontSize)};
            color: ${getCssVariable(textColor)};
            transition:margin .3s ${getCssVariable(bezier)},
              color .3s ${getCssVariable(bezier)},
              border-color .3s ${getCssVariable(bezier)};
            padding: 16px 0 0 0;
            border-top: 1px solid ${getCssVariable(dividerColor)};
        }
        :host([disabled]) {
          cursor:not-allowed;
        }
        :host([expanded]:not([disabled])) .v-collaspe-panel-content {
          display: block;
          margin-top: 16px;
          padding-bottom: 16px;
        }
        :host([expanded][disabled]) .v-collaspe-panel-content {
          display: none;
        }
        :host(:not([expanded])) .v-collaspe-panel-content {
          display: none;
        }
        .v-collaspe-panel-title {
          cursor: pointer;
          margin-bottom: 16px;
        }
    </style>
    <div role="${roleButton}" ${ariaControls}="v-collapse-panel-content-${id}" class="v-collaspe-panel-title">
      <slot name="title"></slot> 
    </div>
    <div role="${roleRegionn}" id="v-collapse-panel-content-${id}" class="v-collaspe-panel-content">
      <slot></slot>
    </div>
    `;
  return template;
}
