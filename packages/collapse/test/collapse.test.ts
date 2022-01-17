/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils";
import { VCollapse } from "../src";

defineCustomElement("v-collapse", VCollapse);

describe("web component v-collapse", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-collapse class="v-collapse"></v-collapse>
    `;
  });
});
