import { renderButtonTemplate } from "./template";
import { defineCustomElement, isNull } from "../../../utils/index";

export class VButton extends HTMLElement {
  btn: Element | null = null;
  static get observedAttributes() {
    return ["type", "attr-type", "disabled", "shape"];
  }
  constructor() {
    super();
    this.render();
  }
  private render() {
    this.attachShadow({ mode: "open" });
    // fetch('./index.css').then(res => res.text()).then(data => {
    //     const node = document.createElement('style')
    //     node.innerHTML = data
    //     this.shadowRoot!.appendChild(node)
    // })
    const template = renderButtonTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
    this.btn = this.shadowRoot!.getElementById("btn");
    // 设置 button dom type 类型
    this.updateAttrType("button");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "attr-type":
        this.updateAttrType(newValue);
        break;
      case "disabled":
        this.updateDisabled(newValue);
        break;
    }
  }
  connectedCallback() {
    this.addEventListener("click", this.onClick);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.onClick);
  }
  get disabled() {
    return this.getAttribute("disabled") !== null;
  }
  set disabled(value) {
    if (value === null || value === false) {
      this.removeAttribute("disabled");
    } else {
      this.setAttribute("disabled", "");
    }
  }
  get attrType() {
    return this.getAttribute("disabled");
  }
  private updateDisabled(newValue: string) {
    if (this.btn) {
      if (isNull(newValue)) {
        // this.shadowRoot.removeChild(this.load);
        this.btn.removeAttribute("disabled");
      } else {
        this.btn.setAttribute("disabled", "disabled");
      }
    }
  }
  private updateAttrType(value: string) {
    if (this.btn) {
      this.btn.setAttribute("type", value);
    }
  }
  private onClick() {
    console.log("click", "clickdfsfsf");
  }
}
defineCustomElement("v-button", VButton);
