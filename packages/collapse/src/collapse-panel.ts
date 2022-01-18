import { ariaDisabled, ariaExpanded } from "aria/aria-statue";
import { defineCustomElement } from "utils";
import { renderCollapsePanelTemplate } from "./template";

let id = 0; // for make sure aria-controls id

const TITLE = "title";
const NAME = "name";
const EXPANDED = "expanded";
const DISABLED = "disabled";

export class VCollapsePanel extends HTMLElement {
  private panelTitle: Element | null = null;
  static get observedAttributes() {
    return [TITLE, NAME, EXPANDED, DISABLED];
  }
  constructor() {
    super();
    id += 1;
    this.render(id);
  }
  get title() {
    return this.getAttribute(TITLE) || "";
  }
  set title(value: any) {
    if (value) {
      this.updateTitle();
    }
  }

  get name() {
    return this.getAttribute(NAME);
  }
  set name(value: any) {
    this.setAttribute(NAME, value);
  }

  get expanded() {
    return this.hasAttribute(EXPANDED);
  }
  set expanded(value: any) {
    this.chaneAttribute(value, EXPANDED);
  }

  get disabled() {
    return this.hasAttribute(DISABLED);
  }
  set disabled(value: any) {
    this.chaneAttribute(value, DISABLED);
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case TITLE:
        this.updateTitle();
        break;
      case DISABLED:
        this.updateDisabled();
        break;
      case EXPANDED:
        this.updateExpanded();
        break;
    }
  }
  connectedCallback() {
    if (!this.hasAttribute(ariaDisabled)) {
      this.updateDisabled();
    }
    if (!this.hasAttribute(ariaExpanded)) {
      this.updateExpanded();
    }
  }
  private render(id: number) {
    this.attachShadow({ mode: "open" });
    const template = renderCollapsePanelTemplate(id);
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
    this.panelTitle = this.shadowRoot!.querySelector(".v-collaspe-panel-title");
  }
  private updateTitle() {
    if (this.panelTitle) {
      this.panelTitle.textContent = this.title;
    }
  }
  private updateDisabled() {
    const value = this.disabled ? true : false;
    this.setAttribute(ariaDisabled, value.toString());
  }
  private updateExpanded() {
    const value = this.expanded ? true : false;
    this.setAttribute(ariaExpanded, value.toString());
  }
  private chaneAttribute(value: any, name: string) {
    Boolean(value) ? this.setAttribute(name, "") : this.removeAttribute(name);
  }
  private updateName() {}
}

defineCustomElement("v-collapse-panel", VCollapsePanel);
