/**
 *
 * @param elementName 自定义组件名
 * @param constructor 自定义组件 类
 */
export function defineCustomElement(
  elementName: string,
  constructor: CustomElementConstructor
) {
  if (!customElements.get(elementName)) {
    // eslint-disable-next-line no-restricted-globals
    window.customElements.define(elementName, constructor);
  }
}

export function getTemplate(): HTMLTemplateElement {
  // eslint-disable-next-line no-restricted-globals
  return document.createElement("template");
}

export function getElementLowerCaseTagName(element: Element) {
  return element.tagName.toLowerCase();
}
