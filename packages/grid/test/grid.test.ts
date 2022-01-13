/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils/style";
import { VGrid } from '../src'

defineCustomElement("v-grid", VGrid);

describe("web component v-grid", () => {
    beforeEach(() => {
    document.body.innerHTML = `
        <v-grid class="v-grid"></v-grid>
    `
    })
})