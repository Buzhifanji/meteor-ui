export const isNull = (value: any) => value === null;
export const isAttrFalse = (value: any) =>
  value === null || value === false || value === "false";

/**
 * 判断 组件属性 用户输入值是否属于 枚举值
 * @param value 枚举值 数组
 * @param property 输入的属性值
 * @param componentName 组件名
 * @returns
 */
export const expectProperty = (
  value: string[],
  property: string,
  componentName: string
) => {
  if (value.includes(property)) {
    return property;
  } else {
    const str = value.join("|");
    console.error(`
      The ${componentName} property expect ${str}, you are ${property}
    `);
    return null;
  }
};
