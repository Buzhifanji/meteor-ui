import { ariaDisabled, ariaExpanded } from "aria/aria-statue";
import {
  getKeyframes,
  setCollapseKeyframes,
  setExpandeKeyframes,
} from "styles/animation";
import { defineCustomElement, getElementLowerCaseTagName } from "utils";
import {
  ACCORDION,
  ARROWPLACEMENT,
  COLLAPSE,
  DISABLED,
  EXPANDED,
  NAME,
  PANELNAME,
} from "./attributesName";
import { renderCollapsePanelTemplate } from "./template";

let id = 0; // for make sure aria-controls id

export class VCollapsePanel extends HTMLElement {
  private panelTitle: HTMLElement | null = null;
  private panelContent: HTMLElement | null = null;
  static get observedAttributes() {
    return [NAME, EXPANDED, DISABLED, ARROWPLACEMENT];
  }
  constructor() {
    super();
    id += 1;
    this.clickTitle = this.clickTitle.bind(this);
    this.updateAanimationClassName = this.updateAanimationClassName.bind(this);
    this.render(id);

    this.getPanelTitleAndContentDom();
    this.panelTitelAndContentAddEvent();
  }

  get [ARROWPLACEMENT]() {
    return this.getAttribute(ARROWPLACEMENT) || "";
  }
  set [ARROWPLACEMENT](value: any) {
    this.chaneAttribute(value, ARROWPLACEMENT);
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
      case DISABLED:
        this.updateDisabled();
        break;
      case EXPANDED:
        this.updateExpanded();
        this.updateClassName(this.expanded);
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

    // 第一次 加载的时候确保折叠面板是否显示
    this.updateClassName(this.expanded);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.clickTitle);
    this.removeEventListener("animationend", this.updateAanimationClassName);
  }
  private render(id: number) {
    this.attachShadow({ mode: "open" });
    const template = renderCollapsePanelTemplate(id);
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private updateDisabled() {
    const value = this.disabled ? true : false;
    this.panelTitle?.setAttribute(ariaDisabled, value.toString());
  }
  private updateExpanded() {
    const value = this.expanded ? true : false;
    this.panelTitle?.setAttribute(ariaExpanded, value.toString());
  }
  private chaneAttribute(value: any, name: string) {
    Boolean(value) ? this.setAttribute(name, "") : this.removeAttribute(name);
  }

  private clickTitle() {
    if (!this.disabled) {
      const value = !this.expanded;
      const el = this.panelContent!;

      const setKeyframes = (name: string, keyframes: string) => {
        const index = getKeyframes(this.shadowRoot!, name);
        const styleSheet = this.shadowRoot!.styleSheets[0];
        const len = styleSheet.cssRules.length - 1;
        if (index !== -1) {
          styleSheet.deleteRule(index);
        }
        styleSheet.insertRule(keyframes, len);
      };

      this.chaneAttribute(value, EXPANDED);

      if (value) {
        // 展开
        el.className = `v-collaspe-panel-content ${EXPANDED}`;
        const height = el.scrollHeight;
        const keyframes = setCollapseKeyframes(height, EXPANDED);
        setKeyframes(EXPANDED, keyframes);
      } else {
        // 折叠
        el.className = `v-collaspe-panel-content ${COLLAPSE}`;
        const height = el.scrollHeight;
        const keyframes = setExpandeKeyframes(height, COLLAPSE);
        setKeyframes(COLLAPSE, keyframes);
      }

      // 只有一个展开的情况
      const parentElement = this.parentElement!;
      if (parentElement.hasAttribute(ACCORDION)) {
        Array.from(parentElement.children).forEach((item) => {
          if (getElementLowerCaseTagName(item) === PANELNAME && item !== this) {
            if (item.hasAttribute(EXPANDED)) {
              item.removeAttribute(EXPANDED);
            }
          }
        });
      }
    }
  }
  private getPanelTitleAndContentDom() {
    this.panelTitle = this.shadowRoot!.querySelector(
      ".v-collaspe-panel-title"
    ) as HTMLElement;
    this.panelContent = this.shadowRoot!.querySelector(
      ".v-collaspe-panel-content"
    )! as HTMLElement;
  }
  private panelTitelAndContentAddEvent() {
    this.panelTitle!.addEventListener("click", this.clickTitle);
    this.panelContent!.addEventListener(
      "animationend",
      this.updateAanimationClassName
    );
  }
  private updateAanimationClassName(event: AnimationEvent) {
    const bool = event.animationName === EXPANDED;
    this.updateClassName(bool);
  }
  private updateClassName(value: boolean) {
    const className = value ? "expened-once" : "collapse-once";
    this.panelContent!.className = `v-collaspe-panel-content ${className}`;
  }
}

defineCustomElement(PANELNAME, VCollapsePanel);
