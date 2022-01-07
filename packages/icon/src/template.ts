import { getTemplate } from "utils/components";

export function renderIconTemplate(): HTMLTemplateElement {
    const template = getTemplate();
    template.innerHTML = `
    <style>
    :host{
        display: contents;
    }
    ::slotted(svg) {
        width: 1em;
        height: 1em;
    }
   
    </style>
    <slot></slot>
    `
    return template
} 