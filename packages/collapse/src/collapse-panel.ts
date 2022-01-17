import { defineCustomElement } from "utils";
import { renderCollapsePanelTemplate } from "./template";

const TITLE = "title";
const NAME = "name";

export class VCollapsePanel extends HTMLElement {
  static get observedAttributes() {
    return [TITLE, NAME];
  }
  constructor() {
    super();
    this.render();
  }
  get title() {
    return this.getAttribute(TITLE) || "";
  }
  get name() {
    return this.getAttribute(NAME);
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case TITLE:
        this.updateTitle();
        break;
    }
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderCollapsePanelTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private updateTitle() {
    const ele = this.querySelector(".v-collasp-panel-title");
    ele!.textContent = this.title;
  }
  private updateName() {}
}

defineCustomElement("v-collapse-panel", VCollapsePanel);
