/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector } from "utils/dom";
import { getStylePropertyValue } from "utils";
import { VGrid } from "../src";

defineCustomElement("v-grid", VGrid);

describe("web component v-grid", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-grid class="v-grid">
        <div class="box">One</div>
        <div class="box">Twp</div>
        <div class="box">Three</div>
        <div class="box">Four</div>
        </v-grid>
    `;
  });
  it("should work by set property", () => {
    const space = Selector(".v-grid")!;
    expect(space).not.toBeNull();

    expect(getStylePropertyValue(space, "display")).toBe("grid");
    expect(getStylePropertyValue(space, "grid-column-gap")).toBe("0px");

    space.setAttribute("x-gap", "12");
    expect(getStylePropertyValue(space, "display")).toBe("grid");
    expect(getStylePropertyValue(space, "grid-column-gap")).toBe("12px");
    space.setAttribute("x-gap", "23");
    expect(getStylePropertyValue(space, "display")).toBe("grid");
    expect(getStylePropertyValue(space, "grid-column-gap")).toBe("23px");

    space.setAttribute("y-gap", "12");
    expect(getStylePropertyValue(space, "display")).toBe("grid");
    expect(getStylePropertyValue(space, "grid-column-gap")).toBe("23px");
    expect(getStylePropertyValue(space, "grid-row-gap")).toBe("12px");

    space.setAttribute("y-gap", "24");
    space.setAttribute("y-gap", "24");
    expect(getStylePropertyValue(space, "display")).toBe("grid");
    expect(getStylePropertyValue(space, "grid-column-gap")).toBe("23px");
    expect(getStylePropertyValue(space, "grid-row-gap")).toBe("24px");

    space.setAttribute("cols", "3");

    expect(getStylePropertyValue(space, "grid-template-columns")).not.toBeNull;
  });
});
