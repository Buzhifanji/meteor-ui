import { commonStyleConfig } from "../styles/common/common";
import { themeVariableName } from "../styles/enums";

export function defineCustomElement(elementName: string, constructor: CustomElementConstructor) {
    if (!customElements.get(elementName)) {
        customElements.define(elementName, constructor);
    }
}

export function getStyleVarValue(variableName: themeVariableName, styleConfig = commonStyleConfig) {
    return `var(${variableName},${styleConfig[variableName]})`
}