import { getCssVariable } from "styles/cssVariable";
import {
  backgroundColor,
  bezier,
  borderRadius,
  boxShadowColor,
  dangerBackgroundColor,
  dangerBoxShadowColor,
  fontSize,
  height,
  infoBackgroundColor,
  infoBoxShadowColor,
  padding,
  primaryBackgroundColor,
  primaryBoxShadowColor,
  successBackgroundColor,
  successBoxShadowColor,
  textColor,
  warningBackgroundColor,
  warningBoxShadowColor,
  width,
} from "styles/cssVariable/variable";
import { getTemplate } from "utils/components";

export function renderButtonTemplate(): HTMLTemplateElement {
  const template = getTemplate();
  template.innerHTML = `
        <style>
            :host{ 
                position:relative; 
                display:inline-flex; 
                flex-wrap: nowrap;
                flex-shrink: 0;
                align-items:center;
                justify-content: center;
                cursor: pointer;
                line-height: 1;
                width: ${getCssVariable(width)};
                height: ${getCssVariable(height)};
                padding: ${getCssVariable(padding)};
                border:1px solid var(--borderColor,rgba(0,0,0,.2)); 
                font-size: ${getCssVariable(fontSize)};
                box-shadow: 0 2px 6px  ${getCssVariable(boxShadowColor)};
                color: ${getCssVariable(textColor)};
                background-color: ${getCssVariable(backgroundColor)};
                border-radius: ${getCssVariable(borderRadius)};
                transition:color .3s ${getCssVariable(bezier)},
                            background-color .3s ${getCssVariable(bezier)},
                            opacity .3s ${getCssVariable(bezier)},
                            border-color .3s ${getCssVariable(bezier)};
            }
            :host([disabled]),
            :host([loading]){
                pointer-events: none; 
                opacity:.6; 
            }
            :host([disabled]:not([type])){ 
                background:rgba(0,0,0,.1); 
            }
            :host(:not([disabled]):hover), 
            :host(:not([disabled]):focus ){
                border-color: rgba(0, 0, 0, 0.25);
                box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
            }
            :host(:not([disabled]):active){
                border-color: rgba(0, 0, 0, 0.15);
                box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
                transform: translateY(0em);
            }

            :host(:not([disabled]):hover){
                border-color:transparent;
                transform: translateY(-0.25px);
            }
            :host([type="danger"]) {
                box-shadow: 0 2px 6px  ${getCssVariable(dangerBoxShadowColor)};
                color: #fff;
                border-color: ${getCssVariable(dangerBackgroundColor)};
                background-color: ${getCssVariable(dangerBackgroundColor)};
            }
            :host([type="primary"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getCssVariable(primaryBoxShadowColor)};
                border-color: ${getCssVariable(primaryBackgroundColor)};
                background-color: ${getCssVariable(primaryBackgroundColor)};
            }
            :host([type="info"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getCssVariable(infoBoxShadowColor)};
                border-color: ${getCssVariable(infoBackgroundColor)};
                background-color: ${getCssVariable(infoBackgroundColor)};
            }
            :host([type="warning"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getCssVariable(warningBoxShadowColor)};
                border-color: ${getCssVariable(warningBackgroundColor)};
                background-color: ${getCssVariable(warningBackgroundColor)};
            }
            :host([type="success"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getCssVariable(successBoxShadowColor)};
                border-color: ${getCssVariable(successBackgroundColor)};
                background-color: ${getCssVariable(successBackgroundColor)};
            }
            :host([shape="circle"]) {
                border-radius: 50%;
            }
            :host([shape="round"]) {
                border-radius: 34px;
            }
            .v-button {
                background:none; 
                outline:0; 
                border:0; 
                position: 
                absolute; 
                left:0; 
                top:0;
                width:100%;
                height:100%;
                padding:0;
                user-select: none;
                cursor: unset;
            }
            :host([disabled]) .v-button {
                cursor: not-allowed;
                pointer-events: all;
            }
        </style>
        <button class="v-button" id="btn">
        </button>
        <slot></slot>
    `;
  return template;
}
