import { themeVariableName } from '../../../styles/enums';
import { getBascBackgroundColor, getStyleVarValue } from '../../../utils';

export function renderButtonTemplate(): HTMLTemplateElement {
    const template = document.createElement('template');
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
                width: ${getStyleVarValue(themeVariableName.width)};
                height: ${getStyleVarValue(themeVariableName.height)};
                padding: ${getStyleVarValue(themeVariableName.padding)};
                border:1px solid var(--borderColor,rgba(0,0,0,.2)); 
                font-size: ${getStyleVarValue(themeVariableName.fontSize)};
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.defaultBoxShadowColor)};
                color: ${getStyleVarValue(themeVariableName.textColor)};
                background-color: ${getStyleVarValue(themeVariableName.backgroundColor)};
                border-radius: ${getStyleVarValue(themeVariableName.borderRadius)};
                transition:color .3s ${getStyleVarValue(themeVariableName.bezier)},
                            background-color .3s ${getStyleVarValue(themeVariableName.bezier)},
                            opacity .3s ${getStyleVarValue(themeVariableName.bezier)},
                            border-color .3s ${getStyleVarValue(themeVariableName.bezier)};
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
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.dangerBoxShadowColor)};
                color: #fff;
                border-color: ${getBascBackgroundColor(themeVariableName.dangerBackgroundColor)};
                background-color: ${getBascBackgroundColor(themeVariableName.dangerBackgroundColor)};
            }
            :host([type="primary"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.primaryBoxShadowColor)};
                border-color: ${getBascBackgroundColor(themeVariableName.primaryBackgroundColor)};
                background-color: ${getBascBackgroundColor(themeVariableName.primaryBackgroundColor)};
            }
            :host([type="info"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.infoBoxShadowColor)};
                border-color: ${getBascBackgroundColor(themeVariableName.infoBackgroundColor)};
                background-color: ${getBascBackgroundColor(themeVariableName.infoBackgroundColor)};
            }
            :host([type="warning"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.warningBoxShadowColor)};
                border-color: ${getBascBackgroundColor(themeVariableName.warningBackgroundColor)};
                background-color: ${getBascBackgroundColor(themeVariableName.warningBackgroundColor)};
            }
            :host([type="success"]) {
                color: #fff;
                box-shadow: 0 2px 6px  ${getBascBackgroundColor(themeVariableName.successBoxShadowColor)};
                border-color: ${getBascBackgroundColor(themeVariableName.successBackgroundColor)};
                background-color: ${getBascBackgroundColor(themeVariableName.successBackgroundColor)};
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
        
    `
    return template
} 