import { VButtonType } from './interface';
import { themeVariableName } from '../../../styles/enums';
import { getBascBackgroundColor, getStyleVarValue } from '../../../utils';

export function renderButtonTemplate({ type, attrType }: VButtonType): string {
    return `
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
            .v-button::before{
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                left:0;
                top:0;
                transition:.2s;
                background:#fff;
                opacity:0;
            }
            .v-button::after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                left: var(--x,0); 
                top: var(--y,0);
                pointer-events: none;
                background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: translate(-50%,-50%) scale(10);
                opacity: 0;
                transition: transform .3s, opacity .8s;
            }
        </style>
        <button class="v-button">
        </button>
        <slot></slot>
    `
} 