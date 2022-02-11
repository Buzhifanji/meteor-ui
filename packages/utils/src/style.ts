import { get_current_component } from 'svelte/internal';
import { onMount } from 'svelte';
import { CssVarItem } from './interface';

export function setProperty(
  element: HTMLElement,
  property: string,
  value: string | null,
) {
  element.style.setProperty(property, value);
}

export function updateStyleAttribute(property: string, value: string | null) {
  const thisComponent = get_current_component();
  // console.log('thisComponent', thisComponent);
  if (thisComponent && thisComponent.style) {
    // '' 代表着移除样式
    const result = value ? value : '';
    setProperty(thisComponent, property, result);
  }
}

export function initCssVaraible(arr: CssVarItem[]) {
  const thisComponent = get_current_component();
  onMount(() => {
    arr.forEach((item) => {
      const keys = Object.keys(item);
      if (keys.length === 1) {
        const key = keys[0];
        setProperty(thisComponent, key, item[key]);
      }
    });
  });
}

// export function updateCssVaraible(arr: CssVarItem[]) {
//   const thisComponent = get_current_component();
//   arr.forEach(({ key, value }) => {
//     setProperty(thisComponent, key, value);
//   });
// }
