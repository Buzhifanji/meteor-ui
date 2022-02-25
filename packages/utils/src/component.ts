import { get_current_component } from 'svelte/internal';
import { StringObject } from './interface';
export function defineComponent(component: any, name: string) {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
}

export function updateAttribute(value: StringObject, attribute: string) {
  const root = get_current_component();

  if (attribute) {
    for (const key in value) {
      root.style.setProperty(key, value[key]);
    }
  } else {
    for (const key in value) {
      if (root.style.getPropertyValue(key)) {
        root.style.removeProperty(key);
      }
    }
  }
}
