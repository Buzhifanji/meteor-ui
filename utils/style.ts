import { basicBackgroundColor, commonStyleConfig } from "styles/common/common";
import { themeVariableName } from "styles/enums";

/**
 * 获取 颜色
 * @param variableName
 * @returns
 */
export function getBascBackgroundColor(variableName: themeVariableName) {
  return `var(${variableName},${basicBackgroundColor[variableName]})`;
}

export function getStyleVarValue(variableName: themeVariableName) {
  return `var(${variableName},${commonStyleConfig[variableName]})`;
}

/**
 * 支持 40 40px 40em 40rem; 默认 px
 * @param value
 * @returns
 */
export function getNumberAndUnit(value: string) {
  const pureNumberRegex = /^(\d|\.)+$/;
  return pureNumberRegex.test(value) ? value + "px" : value;
}
