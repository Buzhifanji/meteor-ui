import { get_current_component } from 'svelte/internal';

export function setProperty(
  element: HTMLElement,
  property: string,
  value: string | null,
) {
  element.style.setProperty(property, value);
}

export function updateStyleAttribute(property: string, value: string | null) {
  const thisComponent = get_current_component();
  if (thisComponent && thisComponent.style) {
    // '' 代表着移除样式
    const result = value ? value : '';
    setProperty(thisComponent, property, result);
  }
}

export function getCssVarKey(value: string) {
  const result = value.split(':')[0];
  return result ? result.trim() : '';
}
