/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils/style";
import { VGrid, VGridItem } from "../src";

defineCustomElement("v-grid", VGrid);
defineCustomElement("v-grid-item", VGridItem);

describe("web component v-grid-item", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-grid class="v-grid-span">
          <v-grid-item span="12">One</v-grid-item>
          <v-grid-item span="6">One</v-grid-item>
        </v-grid>
        <v-grid class="v-grid-area" cols="3">
          <v-grid-item>One</v-grid-item>
          <v-grid-item>One</v-grid-item>
          <v-grid-item>One</v-grid-item>
          <v-grid-item>One</v-grid-item>
          <v-grid-item>One</v-grid-item>
          <v-grid-item>One</v-grid-item>
        </v-grid>
    `;
  });
  it("should work by set span property", () => {
    const grid = Selector(".v-grid-span")!;
    expect(grid).not.toBeNull();
    expect(getStylePropertyValue(grid, "display")).toBe("grid");
    expect(getStylePropertyValue(grid, "grid-column-gap")).toBe("0px");

    const girdItem = SelectorAll("v-grid-item", grid);
    expect(girdItem).not.toBeNull();
    expect(girdItem[0]).not.toBeNull();

    expect(getStylePropertyValue(girdItem[0], "grid-column-start")).toBe(
      "span 12"
    );
    expect(getStylePropertyValue(girdItem[1], "grid-column-start")).toBe(
      "span 6"
    );

    girdItem[0].setAttribute("span", "6");
    expect(getStylePropertyValue(girdItem[0], "grid-column-start")).toBe(
      "span 6"
    );

    girdItem[1].setAttribute("span", "12");
    expect(getStylePropertyValue(girdItem[1], "grid-column-start")).toBe(
      "span 12"
    );
  });

  it("should work by set area property", () => {
    const grid = Selector(".v-grid-area")!;
    expect(grid).not.toBeNull();

    const girdItem = SelectorAll("v-grid-item", grid);
    expect(girdItem).not.toBeNull();
    expect(girdItem[0]).not.toBeNull();

    girdItem[0].setAttribute("area", "1/1/4/2");
    girdItem[0].setAttribute("area", "1/1/4/2");
    expect(getStylePropertyValue(girdItem[0], "grid-column-start")).toBe("1");
    expect(getStylePropertyValue(girdItem[0], "grid-column-end")).toBe("2");
    expect(getStylePropertyValue(girdItem[0], "grid-row-start")).toBe("1");
    expect(getStylePropertyValue(girdItem[0], "grid-row-end")).toBe("4");
    girdItem[0].setAttribute("span", "6");
  });
});
