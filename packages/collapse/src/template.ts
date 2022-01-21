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
import { COLLAPSE, DISABLED, EXPANDED } from "./attributesName";

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
            padding: 16px 0 0 0;
            margin-top: 16px;
            border-top: 1px solid ${getCssVariable(dividerColor)};
        }
        :host([${DISABLED}]) {
          cursor:not-allowed;
        }

        :host([${DISABLED}]) .v-collaspe-panel-content {
          display: none;
        }

        .v-collaspe-panel-content.${EXPANDED} {
          animation:${EXPANDED} 300ms ${getCssVariable(bezier)};
          animation-iteration-count:1;
          animation-fill-mode: forwards;
        }
        .v-collaspe-panel-content.${COLLAPSE} {
          animation:${COLLAPSE} 300ms ${getCssVariable(bezier)};;
          animation-iteration-count:1;
          animation-fill-mode: forwards;
        }
        .v-collaspe-panel-content.expened-once {
          display：block;
        }
        .v-collaspe-panel-content.collapse-once {
          display: none;
        }
        .v-collaspe-panel-content {
          width:100%;
          height:100%;
          margin-top: 16px;
          // padding-bottom: 16px;
          display: block;
        }
        .v-collaspe-panel-title {
          display: flex;
          cursor: pointer;
          margin-bottom: 16px;
          transition:box-shadow 0.2s ${getCssVariable(bezier)};
        }
    </style>
    <div role="${roleButton}" ${ariaControls}="v-collapse-panel-content-${id}" class="v-collaspe-panel-title">
      <slot name="title"></slot>
    </div>
    <div role="${roleRegionn}" id="v-collapse-panel-content-${id}" class="v-collaspe-panel-content once-dispaly">
        <slot></slot>
    </div>
    `;
  return template;
}
