import { basicBackgroundColor, commonStyleConfig } from "styles/common/common";
import { themeVariableName } from "styles/enums";

/**
 * 获取 颜色
 * @param variableName 
 * @returns 
 */
export function getBascBackgroundColor(variableName: themeVariableName) {
    return `var(${variableName},${basicBackgroundColor[variableName]})`
}

export function getStyleVarValue(variableName: themeVariableName) {
    return `var(${variableName},${commonStyleConfig[variableName]})`
}