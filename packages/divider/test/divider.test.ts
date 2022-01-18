/* eslint-disable no-restricted-globals */
import {
  defineCustomElement,
  Selector,
  SelectorAll,
  getStylePropertyValue,
} from "utils";
import { VDivider } from "../src";

defineCustomElement("v-divider", VDivider);

describe("web component v-divider", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-divider class="v-divider"></v-divider>
    `;
  });
  it("should ", () => {});
});
