/* eslint-disable no-restricted-globals */
export function Selector(value: string, host?: Element) {
  return host ? host.querySelector(value) : document.querySelector(value);
}

export function SelectorAll(value: string, host?: Element) {
  return host ? host.querySelectorAll(value) : document.querySelectorAll(value);
}
