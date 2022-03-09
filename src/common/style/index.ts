/**
 * 支持 40 40px 40em 40rem; 默认 px
 * @param value
 * @returns
 */
export function getNumberAndUnit(value: string) {
  const pureNumberRegex = /^(\d|\.)+$/;
  return pureNumberRegex.test(value) ? value + "px" : value;
}
