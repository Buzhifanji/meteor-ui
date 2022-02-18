export function defineComponent(component: any, name: string) {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
}
