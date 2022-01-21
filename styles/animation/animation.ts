import { CssRule } from "./interface";

/**
 * 查找 keyframes 索引位置
 * @param element dom节点
 * @param name keyframes 名字
 * @returns
 */
export function getKeyframes(element: ShadowRoot, name: string) {
  const cssRules = element.styleSheets[0].cssRules as unknown as CssRule[];
  return Array.from(cssRules).findIndex((rule) => {
    if (Reflect.has(rule, "name")) {
      const ruleName = Reflect.get(rule, "name");
      if (ruleName === name) {
        return true;
      }
    }
    return false;
  });
}

export function setCollapseKeyframes(height: number, name: string) {
  return `
  @keyframes ${name} {
    0% {
        display: none;
        height: 0;
        opacity: 0;
    }
    1% {
        display: block;
    }
    100% {
        display: block;
        height: ${height}px;
        opacity: 1;
    }
  }
  `;
}
export function setExpandeKeyframes(height: number, name: string) {
  return `
  @keyframes ${name} {
    0% {
      display: block;
      height: ${height}px;
      opacity: 1 ;
    }
    99% {
        display: block;
    }
    100% {
        height: 0;
        display: none;
        opacity: 0;
    }
  }
  `;
}
