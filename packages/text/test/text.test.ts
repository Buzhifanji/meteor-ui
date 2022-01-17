/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector } from "utils/dom";
import { getStylePropertyValue } from "utils";
import { VText } from "../src";

defineCustomElement("v-text", VText);

describe("web component v-text", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-text class="v-text">
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </v-text>
    `;
  });
  it("should work with load default", () => {
    const text = Selector(".v-text")!;
    expect(text).not.toBeNull();

    text.setAttribute("line-clamp", "");
    expect(getStylePropertyValue(text, "display")).toBe("-webkit-inline-box");
    expect(getStylePropertyValue(text, "-webkit-box-orient")).toBe("vertical");
    expect(getStylePropertyValue(text, "-webkit-line-clamp")).toBe("1");
    expect(getStylePropertyValue(text, "overflow")).toBe("hidden");
    expect(getStylePropertyValue(text, "text-overflow")).toBe("ellipsis");

    text.setAttribute("line-clamp", "2");
    expect(getStylePropertyValue(text, "display")).toBe("-webkit-inline-box");
    expect(getStylePropertyValue(text, "-webkit-box-orient")).toBe("vertical");
    expect(getStylePropertyValue(text, "-webkit-line-clamp")).toBe("2");
    expect(getStylePropertyValue(text, "overflow")).toBe("hidden");
    expect(getStylePropertyValue(text, "text-overflow")).toBe("ellipsis");

    text.setAttribute("line-clamp", "4");
    expect(getStylePropertyValue(text, "display")).toBe("-webkit-inline-box");
    expect(getStylePropertyValue(text, "-webkit-box-orient")).toBe("vertical");
    expect(getStylePropertyValue(text, "-webkit-line-clamp")).toBe("4");
    expect(getStylePropertyValue(text, "overflow")).toBe("hidden");
    expect(getStylePropertyValue(text, "text-overflow")).toBe("ellipsis");

    text.setAttribute("color", "primary");
    expect(getStylePropertyValue(text, "color")).toBe("rgb(103, 119, 239)");

    expect(getStylePropertyValue(text, "display")).toBe("-webkit-inline-box");
    expect(getStylePropertyValue(text, "-webkit-box-orient")).toBe("vertical");
    expect(getStylePropertyValue(text, "-webkit-line-clamp")).toBe("4");
    expect(getStylePropertyValue(text, "overflow")).toBe("hidden");
    expect(getStylePropertyValue(text, "text-overflow")).toBe("ellipsis");

    text.setAttribute("color", "red");
    text.setAttribute("color", "red");
    expect(getStylePropertyValue(text, "color")).toBe("rgb(255, 0, 0)");
  });
});
