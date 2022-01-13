import { defineCustomElement } from "utils";
import { renderGridTemplate } from "./template";

const XGAP = "x-gap";
const YGAP = "y-gap";
const COLS = "cols";

export class VGrid extends HTMLElement {
  static get observedAttributes() {
    return [XGAP, YGAP, COLS];
  }
  constructor() {
    super();
    this.render();
  }
  get [XGAP]() {
    return this.getGap(XGAP);
  }
  get [YGAP]() {
    return this.getGap(YGAP);
  }
  /**
   * 范围 1-24
   */
  get cols() {
    return this.getAttribute(COLS) || 0;
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case XGAP:
        this.updateXGap();
        break;
      case YGAP:
        this.updateYGap();
        break;
      case COLS:
        this.updateCols();
        break;
    }
  }

  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderGridTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private getGap(key: "y-gap" | "x-gap") {
    let gap = this.getAttribute(key);
    if (gap) {
      gap += "px";
    } else {
      gap = "0px";
    }
    return gap;
  }
  private updateYGap() {
    this.style.setProperty("row-gap", this[YGAP]);
  }
  private updateXGap() {
    this.style.setProperty("column-gap", this[XGAP]);
  }
  private updateCols() {
    this.style.setProperty(
      "grid-template-columns",
      `repeat(${this.cols}, minmax(0px, 1fr))`
    );
  }
}

defineCustomElement("v-grid", VGrid);
