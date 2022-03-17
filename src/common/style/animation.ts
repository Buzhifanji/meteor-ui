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

/**
 * 往向cssRules里设置 keyframes,如果存在，会先删除再添加keyframe，
 * @param root dom节点
 * @param name keyframes 名字
 * @param keyframes
 */
export function setKeyframes(
  root: ShadowRoot,
  name: string,
  keyframes: string
) {
  const index = getKeyframes(root, name);
  const styleSheet = root.styleSheets[0];
  const len = styleSheet.cssRules.length - 1;
  if (index !== -1) {
    styleSheet.deleteRule(index);
  }
  styleSheet.insertRule(keyframes, len);
}

/**
 * 打开动画
 * @param height
 * @param name
 * @returns
 */
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

/**
 * 折叠动画
 * @param height
 * @param name
 * @returns
 */
export function setExpandeKeyframes(height: number, name: string) {
  return `
  @keyframes ${name} {
    0% {
      display: block;
      height: ${height}px;
      opacity: 1 ;
    }
    99.99% {
        display: block;
    }
    100% {
        height: 0;
        opacity: 0;
        display: none;
    }
  }
  `;
}

/**
 * 添加 class名
 * @param ele
 * @param name
 */
export function addClassName(ele: Element, name: string) {
  ele.classList.add(name);
}

/**
 * 删除class名
 * @param ele
 * @param name
 */
export function removeClassName(ele: Element, name: string) {
  if (ele.classList.contains(name)) {
    ele.classList.remove(name);
  }
}

export function replaceClassName(
  ele: Element,
  oldName: string,
  newName: string
) {
  if (ele.classList.contains(oldName)) {
    ele.classList.replace(oldName, newName);
  } else {
    addClassName(ele, newName);
  }
}

export function slideToggleTrans(element: HTMLElement, display: boolean) {
  const height = element.scrollHeight;
  if (element.style.display === "none") {
  } else {
  }
}
