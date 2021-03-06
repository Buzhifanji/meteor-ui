import { MinzeElement } from "minze";

export class Attribute extends MinzeElement {
  /**
   * 判断组件上某个属性是否true
   * example: <my-element disabled></my-element> => disabled为null
   * <my-element disabled="true"></my-element> => disabled为true
   * @param attributeName 属性名
   * @returns
   */
  hasAttr(attributeName: string) {
    let result = false;
    if (this.hasAttribute(attributeName)) {
      const attr = this.getAttribute(attributeName) as unknown;
      // url: https://minze.dev/guide/components-data.html#attribute-properties-attributes
      // With the exception of undefined, null, false or true, all attribute properties will always be from type string, no matter the provided value type.
      if (attr === "" || attr === true || attr === "true") {
        result = true;
      }
    }
    return result;
  }
  /**
   * 更改属性，存在则设置为空，不存在则删除
   * @param value
   * @param name
   */
  chaneAttr(value: any, name: string) {
    Boolean(value)
      ? this.setAttribute(name, "true")
      : this.removeAttribute(name);
  }
}
