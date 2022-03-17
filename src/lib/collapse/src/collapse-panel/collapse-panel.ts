import { Attrs, EventListeners, Reactive } from "minze";
import { ariaControls } from "../../../../common/aria/aria-attribute";
import {
  ariaDisabled,
  ariaExpanded,
} from "../../../../common/aria/aria-statue";
import { roleButton, roleRegionn } from "../../../../common/aria/role-value";
import { Attribute } from "../../../../common/extending";
import {
  addClassName,
  removeClassName,
  setCollapseKeyframes,
  setExpandeKeyframes,
  setKeyframes,
} from "../../../../common/style";
import { isNull } from "../../../../common/utils";
import css from "./collapse-panel.css";
import { COLLAPSE, EXPANDED } from "./variable";

/**
 * 定义每个collapse-panel的组件的唯一id
 */
let id = 0; // for make sure aria-controls id

const titleClassName = "me-collaspe-panel-title";
const contentClassName = "me-collaspe-panel-content";

export interface MeCollapsePanel {
  name: string; //
  expanded: boolean; //
  disabled: boolean | undefined; //
  ["arrow-placement"]: string; // 箭头方向
  contentElement: HTMLElement | null;
  transitionFlag: boolean;
}

export class MeCollapsePanel extends Attribute {
  attrs: Attrs = ["name", "expanded", "disabled", ["arrow-placement", ""]];
  reactive: Reactive = [
    ["contentElement", null],
    ["transitionFlag", true], // 解决 display none 动画问题
  ];
  static observedAttributes = [
    "name",
    "expanded",
    "disabled",
    "arrow-placement",
  ];

  html = () => /* html */ `
    <div role="${roleButton}" 
      ${ariaControls}="${contentClassName}-${id}"
      class="${titleClassName}">
      <slot name="title"></slot>
    </div>
    <div role="${roleRegionn}" 
      id="${contentClassName}-${id}"
      class="${contentClassName}">
        <slot></slot>
    </div>
  `;
  css = css;

  private updateDisabled = () => {
    const value = isNull(this.disabled) ? false : true;
    this.setAttribute(ariaDisabled, value.toString());
  };
  private updateExpanded = () => {
    const value = isNull(this.expanded) ? false : true;
    this.setAttribute(ariaExpanded, value.toString());
  };
  async onStart() {
    id++;
  }
  onReady = () => {
    this.contentElement = this.select(`.${contentClassName}`);
  };

  private attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case "disabled":
        this.updateDisabled();
        break;
      case "expanded":
        this.updateExpanded();
        break;
    }
  }

  private clickTitle = () => {
    // disabled
    if (!isNull(this.disabled)) return;

    const isActive = super.hasAttr(EXPANDED);
    console.log("isActive", isActive);
    super.chaneAttr(!isActive, EXPANDED);

    if (isActive) {
      // 折叠
      removeClassName(this.contentElement!, EXPANDED);
      addClassName(this.contentElement!, COLLAPSE);
      const height = this.contentElement!.scrollHeight;
      const keyframes = setExpandeKeyframes(height, COLLAPSE);
      setKeyframes(this.shadowRoot!, COLLAPSE, keyframes);
      this.transitionFlag = true;
    } else {
      // 展开
      this.contentElement!.style.display = "block";
      const height = this.contentElement!.scrollHeight;
      this.transitionFlag = false;
      removeClassName(this.contentElement!, COLLAPSE);
      addClassName(this.contentElement!, EXPANDED);
      const keyframes = setCollapseKeyframes(height, EXPANDED);
      setKeyframes(this.shadowRoot!, EXPANDED, keyframes);
    }

    //   // 只有一个展开的情况
    //   const parentElement = this.parentElement!;
    //   if (parentElement.hasAttribute("accordion")) {
    //     Array.from(parentElement.children).forEach((item) => {
    //       if (
    //         getElementLowerCaseTagName(item) === "me-collapse-panel" &&
    //         item !== this
    //       ) {
    //         if (item.hasAttribute(EXPANDED)) {
    //           item.removeAttribute(EXPANDED);
    //         }
    //       }
    //     });
    //   }
    // }
  };
  /**
   * 监听 动画结束的时候，
   * transitionFlag为true 表示 display block => none
   * @param param0
   */
  private updateAanimationClassName = ({ target, currentTarget }: any) => {
    if (target === currentTarget && this.transitionFlag) {
      this.transitionFlag = false;
      this.contentElement!.style.display = "none";
    }
  };

  eventListeners: EventListeners = [
    [`.${titleClassName}`, "click", this.clickTitle],
    [`.${contentClassName}`, "animationend", this.updateAanimationClassName],
  ];
}
