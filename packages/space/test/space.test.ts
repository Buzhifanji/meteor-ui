/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils/style";
import { VSpace } from "../src";

defineCustomElement("v-space", VSpace);

describe("web component v-sapce", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <v-space class="v-space"></v-space>
    <v-space class="v-space-slot">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </v-space>
    <v-space inline class="v-space-slot-inline">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </v-space>
    <v-space class="v-space-slot-justify">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </v-space>
    <v-space class="v-space-slot-size">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </v-space>
    `;
  });

  it("should work with load default", () => {
    const space = Selector(".v-space")!;
    expect(space).not.toBeNull();

    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-start");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");
  });

  it("should work with slot", () => {
    const space = Selector(".v-space-slot")!;
    expect(space).not.toBeNull();

    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-start");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    const children = SelectorAll("span", space);

    expect(children[0]).not.toBeNull();
    expect(children[1]).not.toBeNull();
    expect(children[2]).not.toBeNull();

    setTimeout(() => {
      expect(getStylePropertyValue(children[0], "margin-right")).toBe("12px");
      expect(getStylePropertyValue(children[1], "margin-right")).toBe("12px");
      expect(getStylePropertyValue(children[2], "margin-right")).toBe("0px");
    }, 100);
  });

  it("set inline property", () => {
    const space = Selector(".v-space-slot-inline")!;
    expect(space).not.toBeNull();

    expect(getStylePropertyValue(space, "display")).toBe("inline-flex");
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-start");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    space.setAttribute("inline", "false");
    expect(getStylePropertyValue(space, "display")).toBe("flex");

    space.setAttribute("inline", "true");
    expect(getStylePropertyValue(space, "display")).toBe("inline-flex");

    space.removeAttribute("inline");
    expect(getStylePropertyValue(space, "display")).toBe("flex");
  });

  it("set justify property", () => {
    const space = Selector(".v-space-slot-justify")!;
    expect(space).not.toBeNull();
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-start");
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    space.setAttribute("justify", "center");
    expect(getStylePropertyValue(space, "justify-content")).toBe("center");
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    space.setAttribute("justify", "flex-end");
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-end");
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    space.setAttribute("justify", "space-around");
    expect(getStylePropertyValue(space, "justify-content")).toBe(
      "space-around"
    );
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");

    space.setAttribute("justify", "space-between");
    expect(getStylePropertyValue(space, "justify-content")).toBe(
      "space-between"
    );
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");
  });

  it("set size property", () => {
    const space = Selector(".v-space-slot-size")!;
    expect(space).not.toBeNull();

    const spanLsit = SelectorAll("span", space);
    expect(spanLsit[0]).not.toBeNull();
    expect(spanLsit[1]).not.toBeNull();
    expect(spanLsit[2]).not.toBeNull();

    space.setAttribute("size", "small");
    expect(getStylePropertyValue(spanLsit[0], "margin-right")).toBe("12px");
    expect(getStylePropertyValue(spanLsit[1], "margin-right")).toBe("12px");
    expect(getStylePropertyValue(spanLsit[2], "margin-right")).toBe("0px");

    space.setAttribute("size", "middle");
    expect(getStylePropertyValue(spanLsit[0], "margin-right")).toBe("24px");
    expect(getStylePropertyValue(spanLsit[1], "margin-right")).toBe("24px");
    expect(getStylePropertyValue(spanLsit[2], "margin-right")).toBe("0px");

    space.setAttribute("size", "large");
    expect(getStylePropertyValue(spanLsit[0], "margin-right")).toBe("36px");
    expect(getStylePropertyValue(spanLsit[1], "margin-right")).toBe("36px");
    expect(getStylePropertyValue(spanLsit[2], "margin-right")).toBe("0px");

    space.setAttribute("size", "30");
    space.setAttribute("size", "30");
    space.setAttribute("size", "30");
    expect(getStylePropertyValue(spanLsit[0], "margin-right")).toBe("30px");
    expect(getStylePropertyValue(spanLsit[1], "margin-right")).toBe("30px");
    expect(getStylePropertyValue(spanLsit[2], "margin-right")).toBe("0px");

    space.setAttribute("justify", "flex-end");
    expect(getStylePropertyValue(space, "justify-content")).toBe("flex-end");
    expect(getStylePropertyValue(space, "display")).toBe("flex");
    expect(getStylePropertyValue(space, "flex-direction")).toBe("row");
    expect(getStylePropertyValue(space, "align-items")).toBe("stretch");
    expect(getStylePropertyValue(space, "flex-wrap")).toBe("wrap");
  });
});
