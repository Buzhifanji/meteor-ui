import {
  defineCustomElement,
  expectProperty,
  getElementLowerCaseTagName,
} from "utils";
import { ACCORDION, ARROWPLACEMENT, PANELNAME } from "./attributesName";
import { renderCollapseTemplate } from "./template";

export class VCollapse extends HTMLElement {
  private panelSlot: Element | null = null;
  static get observedAttributes() {
    return [ARROWPLACEMENT, ACCORDION];
  }
  constructor() {
    super();
    this.render();
    this.onPanelSlot();
  }

  get [ARROWPLACEMENT]() {
    return this.getAttribute(ARROWPLACEMENT);
  }
  set [ARROWPLACEMENT](value: any) {
    if (value) {
      const placeEnums = ["left", "right"];
      const result = expectProperty(placeEnums, value, "v-collapse");
      if (result) {
        this.setAttribute(ARROWPLACEMENT, result);
      } else {
        // 输入不符合枚举值
        this.removeAttribute(ARROWPLACEMENT);
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
  connectedCallback() {
    customElements.whenDefined(PANELNAME).then(() => this.linkPanels());
  }
  disconnectedCallback() {
    this.removeEventListener("slotchange", this.linkPanels);
  }
  private render() {
    this.attachShadow({ mode: "open" });
    const template = renderCollapseTemplate();
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
  private onPanelSlot() {
    this.panelSlot = this.shadowRoot!.querySelector("slot[name=panel]");
    this.panelSlot?.addEventListener("slotchange", this.linkPanels);
  }
  private linkPanels() {
    const panels = Array.from(this.children) as HTMLElement[];
    panels.forEach((panel, index: number) => {
      if (getElementLowerCaseTagName(panel) !== PANELNAME) {
        console.error(
          `collapse #${panel.id} is not a` + `sibling of a <v-collapse-panel>`
        );
        return;
      } else {
        // 给子元素 添加箭头方法属性
        const arrowPlace = this[ARROWPLACEMENT];
        if (arrowPlace) {
          panel.setAttribute(ARROWPLACEMENT, arrowPlace);
        } else {
          panel.removeAttribute(ARROWPLACEMENT);
        }
      }
      if (index === 0) {
        panel.style.marginTop = "0px";
        panel.style.borderTop = "0";
      }
    });

    // 打开的折叠面板
    // const opendCollapse = panels.filter(panel => panel.open)
  }
}
defineCustomElement("v-collapse", VCollapse);
