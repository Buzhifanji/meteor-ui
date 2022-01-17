import { defineCustomElement } from "utils";
import { getElementLowerCaseTagName } from "utils/components";
import { renderCollapseTemplate } from "./template";

const ARROWPLACEMENT = "arrow-placement";
const ACCORDION = "accordion";

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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "collapse");
    }
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
    const panels = this.allPanels();
    panels.forEach((panel) => {
      if (getElementLowerCaseTagName(panel) !== "v-collapse-panel") {
        console.error(
          `Tab #${panel.id} is not a` + `sibling of a <v-collapse-panel>`
        );
        return;
      }
      panel.setAttribute("aria-controls", panel.id);
    });

    // 打开的折叠面板
    // const opendCollapse = panels.filter(panel => panel.open)
  }
  private allPanels() {
    return Array.from(this.querySelectorAll("v-collapse-panel"));
  }
}
defineCustomElement("v-collapse", VCollapse);
