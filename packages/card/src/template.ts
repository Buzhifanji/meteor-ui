import { getTemplate } from "utils/components";

export function renderCardTemplate(): HTMLTemplateElement {
const template = getTemplate();
template.innerHTML = `
<style>
    :host {}

    ::slotted() {}
</style>
<slot></slot>
`
return template
}