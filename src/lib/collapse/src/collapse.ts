import { Attrs, EventListeners, MinzeElement } from "minze";
import { getElementLowerCaseTagName } from "../../../common/component";
import { fontFamily, fontSize, textColor } from "../../../common/css-variable";

const PANELNAME = "me-collapse-panel"; // 子元素名 折叠面板

export interface MeCollapse {
  accordion: boolean; // 是否只打开一个
}

export class MeCollapse extends MinzeElement {
  attrs: Attrs = [["accordion", false]];

  static observedAttributes = ["coaccordionlor"];

  html = () => /* html */ `
    <slot name="panel"></slot>
  `;

  css = () => /* css */ `
    :host {
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${textColor};
    }
    /* slot {
      display: contents;
    } */
  `;
  onReady() {
    customElements.whenDefined(PANELNAME).then(() => this.linkPanels());
  }

  onDestroy() {
    this.removeEventListener("slotchange", this.linkPanels);
  }

  private linkPanels = () => {
    const panels = Array.from(this.children) as HTMLElement[];
    let accordionFlag = false;
    panels.forEach((panel, index: number) => {
      if (getElementLowerCaseTagName(panel) !== PANELNAME) {
        console.error(
          `collapse #${panel.id} is not a` + `sibling of a <me-collapse-panel>`
        );
        return;
      } else {
        // 处理只展开一个的情况
        if (this.accordion) {
          if (panel.hasAttribute("expanded")) {
            if (accordionFlag) {
              panel.removeAttribute("expanded");
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
  };

  eventListeners: EventListeners = [
    ["slot[name=panel]", "slotchange", this.linkPanels],
  ];
}
