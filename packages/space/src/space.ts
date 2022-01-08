import { defineCustomElement } from "utils";
import { SapceHostStyle } from "./interface";
import { getSpaceStyle, renderSpaceTemplate } from "./template";

const INLINE = "inline";
const JUSTIFY = "justify";

export class VSpace extends HTMLElement {
  static get observedAttributes() {
    return [INLINE, JUSTIFY];
  }
  constructor() {
    super();
    this.render();
    this.onSlotChange();
  }
  get inline() {
    return this.getAttribute(INLINE) !== null;
  }
  set inline(value) {
    if (value === null || value === false) {
      this.removeAttribute(INLINE);
    } else {
      this.setAttribute(INLINE, "");
    }
  }
  get justify() {
    return this.getAttribute(JUSTIFY) || "flex-start";
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case INLINE:
      case JUSTIFY:
        this.updateStyle();
        break;
    }
  }
  connectedCallback() {}
  disconnectedCallback() {}
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderSpaceTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private onSlotChange() {
    const slot = this.shadowRoot!.querySelector("slot")!;
    slot.addEventListener("slotchange", () => {
      slot.assignedElements().forEach((element) => {
        // console.log(element);
        element.setAttribute("style", "margin-right: 12px");
      });
      // const children = slot.assignedNodes().filter(node => node.nodeType === 1)
      // console.log("slot", slot.assignedElements());
    });
  }
  private updateInline() {
    return this.inline ? "inline-flex" : "flex";
  }
  private updateJustify() {
    let result = "flex-start";
    switch (this.justify) {
      case "start":
        break;
      case "end":
        result = "flex-end";
        break;
      case "center":
        result = "center";
        break;
      case "space-around":
        result = "space-around";
        break;
      case "space-between":
        result = "space-between";
        break;
    }
    return result;
  }
  private updateStyle() {
    const result: SapceHostStyle = {
      display: this.updateInline(),
      justify: this.updateJustify(),
    };
    const style = this.shadowRoot!.querySelector("style")!;
    style.textContent = getSpaceStyle(result);
  }
}
defineCustomElement("v-space", VSpace);
