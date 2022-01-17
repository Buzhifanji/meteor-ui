/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils";
import { VLayout } from "../src";

defineCustomElement("v-layout", VLayout);

describe("web component v-layout", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-layout class="v-layout"></v-layout>
    `;
  });
});
