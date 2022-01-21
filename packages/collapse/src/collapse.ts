import { defineCustomElement, getElementLowerCaseTagName } from "utils";
import { ACCORDION, EXPANDED, PANELNAME } from "./attributesName";
import { renderCollapseTemplate } from "./template";

export class VCollapse extends HTMLElement {
  private panelSlot: Element | null = null;
  static get observedAttributes() {
    return [ACCORDION];
  }
  constructor() {
    super();
    this.render();
    this.onPanelSlot();
  }

  get accordion() {
    return this.hasAttribute(ACCORDION);
  }
  set accordion(value: any) {
    Boolean(value)
      ? this.setAttribute(ACCORDION, "")
      : this.removeAttribute(ACCORDION);
  }
  // get [ARROWPLACEMENT]() {
  //   return this.getAttribute(ARROWPLACEMENT);
  // }
  // set [ARROWPLACEMENT](value: any) {
  //   if (value) {
  //     const placeEnums = ["left", "right"];
  //     const result = expectProperty(placeEnums, value, "v-collapse");
  //     if (result) {
  //       this.setAttribute(ARROWPLACEMENT, result);
  //     } else {
  //       // 输入不符合枚举值
  //       this.removeAttribute(ARROWPLACEMENT);
  //     }
  //   }
  // }

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
    let accordionFlag = false;
    panels.forEach((panel, index: number) => {
      if (getElementLowerCaseTagName(panel) !== PANELNAME) {
        console.error(
          `collapse #${panel.id} is not a` + `sibling of a <v-collapse-panel>`
        );
        return;
      } else {
        // 处理只展开一个的情况
        if (this.accordion) {
          if (panel.hasAttribute(EXPANDED)) {
            if (accordionFlag) {
              panel.removeAttribute(EXPANDED);
            } else {
              accordionFlag = true;
            }
          }
        }
      }
      if (index === 0) {
        panel.style.marginTop = "0px";
        panel.style.borderTop = "0";
      }
    });
  }
}
defineCustomElement("v-collapse", VCollapse);
