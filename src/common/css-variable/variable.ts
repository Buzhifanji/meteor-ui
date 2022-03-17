import { setCssVar } from ".";
import {
  bezierName,
  bgColorName,
  borderRadiustName,
  btnBgColorName,
  btnBorderColorName,
  btnBoxShaodowName,
  btnColorName,
  dividerColorName,
  fontFamilyName,
  fontSizeName,
  heightName,
  textColorName,
  widthName,
} from "./name";

export const fontFamily = setCssVar(fontFamilyName)(
  "Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif"
);

export const fontSize = setCssVar(fontSizeName)("14px");

export const textColor = setCssVar(textColorName)("#2c3136");

export const bgColor = setCssVar(bgColorName)("#fff");

export const dividerColor = setCssVar(dividerColorName)("#efeff5");

export const width = setCssVar(widthName)("initial");

export const height = setCssVar(heightName)("initial");

export const borderRadius = setCssVar(borderRadiustName)("00.25em");

export const bezier = setCssVar(bezierName)("cubic-bezier(0.4, 0, 0.2, 1)");

/** =================== button ===================== */

export const btnBorderColor = setCssVar(btnBorderColorName)("#d9d9d9");

export const btnBoxShaodw = setCssVar(btnBoxShaodowName)(
  "0 2px 6px rgba(0, 0, 0, 0.06)"
);

export const btnColor = setCssVar(btnColorName)("#2c3136");

export const btnBgColor = setCssVar(btnBgColorName)("#fff");
