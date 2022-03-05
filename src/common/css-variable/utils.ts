/**
 * 设置css 变量名和值的闭包函数
 * @param variable
 * @returns
 */
export function setCssVar(variable: string) {
  return (value: string) => {
    return `var(${variable}, ${value})`;
  };
}
