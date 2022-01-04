
export function defineCustomElement(elementName: string, constructor: CustomElementConstructor) {
    if (!customElements.get(elementName)) {
        customElements.define(elementName, constructor);
    }
}
