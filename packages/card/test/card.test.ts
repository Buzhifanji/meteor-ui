/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils";
import { VCard } from "../src";

defineCustomElement("v-card", VCard);

describe("web component v-card", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <v-card class="v-card"></v-card>
    `;
  });
});
