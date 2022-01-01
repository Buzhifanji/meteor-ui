import { VButtonType } from './interface';
import { themeVariableName } from '../../../styles/enums';
import { getStyleVarValue } from '../../../utils/handle-components';
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
                color: ${getStyleVarValue(themeVariableName.textColor)};
                background-color: ${getStyleVarValue(themeVariableName.backgroundColor)};
                border-radius: ${getStyleVarValue(themeVariableName.borderRadius)};
                transition:color .3s ${getStyleVarValue(themeVariableName.bezier)},
                            background-color .3s ${getStyleVarValue(themeVariableName.bezier)},
                            opacity .3s ${getStyleVarValue(themeVariableName.bezier)},
                            border-color .3s ${getStyleVarValue(themeVariableName.bezier)};
            }
            // :host(:not([disabled]):active){
            //     z-index:1;
            //     transform:translateY(.1px);
            //     color: ${getStyleVarValue(themeVariableName.textColorPressed)};
            //     background-color: ${getStyleVarValue(themeVariableName.backgroundColorPressed)};
            // }
            :host([type="danger"]) {
                color: #fff;
                border-color: ${getStyleVarValue(themeVariableName.dangerBackgroundColor)};
                background-color: ${getStyleVarValue(themeVariableName.dangerBackgroundColor)};
            }
            :host([type="primary"]) {
                color: #fff;
                border-color: ${getStyleVarValue(themeVariableName.primaryBackgroundColor)};
                background-color: ${getStyleVarValue(themeVariableName.primaryBackgroundColor)};
            }
            :host([type="info"]) {
                color: #fff;
                border-color: ${getStyleVarValue(themeVariableName.infoBackgroundColor)};
                background-color: ${getStyleVarValue(themeVariableName.infoBackgroundColor)};
            }
            :host([type="warning"]) {
                color: #fff;
                border-color: ${getStyleVarValue(themeVariableName.warningBackgroundColor)};
                background-color: ${getStyleVarValue(themeVariableName.warningBackgroundColor)};
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