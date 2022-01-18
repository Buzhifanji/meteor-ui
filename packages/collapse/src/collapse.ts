import { defineCustomElement, getElementLowerCaseTagName } from "utils";
import { renderCollapseTemplate } from "./template";

const ARROWPLACEMENT = "arrow-placement"; // 箭头方向
const ACCORDION = "accordion"; //
const PANELNAME = "v-collapse-panel"; // 子元素名 折叠面板
export class VCollapse extends HTMLElement {
  private panelSlot: Element | null = null;
  static get observedAttributes() {
    return [ARROWPLACEMENT, ACCORDION];
  }
  constructor() {
    super();
    // this.linkPanels = this.linkPanels.bind(this);
    this.render();
    this.onPanelSlot();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
  connectedCallback() {
    // if (!this.hasAttribute("role")) {
    //   this.setAttribute("role", "collapse");
    // }
    customElements.whenDefined(PANELNAME).then(() => this.linkPanels());
  }
  disconnectedCallback() {}
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
