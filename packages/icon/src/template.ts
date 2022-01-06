import { getTemplate } from "utils/components";

export function renderIconTemplate({ view, path }): HTMLTemplateElement {
    const template = getTemplate();
    template.innerHTML = `
    <style>
    :host{
        font-size:inherit;
        display:inline-block;
        transition:.3s;
    }
    .icon {
        display:block;
        width: 1em;
        height: 1em;
        margin: auto;
        fill: currentColor;
        overflow: hidden;
        /*transition:inherit;*/
    }
    :host([spin]){
        animation: rotate 1.4s linear infinite;
    }
    @keyframes rotate{
        to{
            transform: rotate(360deg); 
        }
    }
    </style>
    <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 ${view} ${view}">
        ${path ? `<path d="${path}"></path>` : '<use id="use"></use>'}
    </svg>             
    `
    return template
} 