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
    <v-space class="v-space-slot-inline">
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
      expect(getStylePropertyValue(children[2], "margin-right")).toBe("");
    }, 100);
  });

  it("set inline property", () => {});
});
