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
        i {
          height: 1em;
          width: 1em;
          line-height: 1em;
          text-align: center;
          display: inline-block;
          position: relative;
          fill: currentColor;
          transform: translateZ(0);
        }
    </style>
    <div role="${roleButton}" ${ariaControls}="v-collapse-panel-content-${id}" class="v-collaspe-panel-title">
      <slot name="title"></slot>
      <i class="v-arrow-right">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
            fill="currentColor">
          </path>
        </svg>
      </i>
    </div>
    <div role="${roleRegionn}" id="v-collapse-panel-content-${id}" class="v-collaspe-panel-content">
      <slot></slot>
    </div>
    `;
  return template;
}

export function arrowRightTemplate() {
  const template = getTemplate();
  template.innerHTML = `
    <i class="v-arrow-right">
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
        fill="currentColor">
      </path>
    </svg>
  </i>
  `;
  return template;
}
