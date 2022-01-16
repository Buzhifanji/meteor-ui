interface Param {
  [key: string]: string | number;
}

export function getCssVariable(param: Param) {
  let key = "";
  Object.keys(param).forEach((item) => {
    key = item;
  });
  if (key) {
    return `var(${key},${param[key]})`;
  } else {
    console.warn(`css varaible ${param} don't set any attritube`);
    return key;
  }
}
