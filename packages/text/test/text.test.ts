/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils/style";
import { VText } from '../src'

defineCustomElement("v-text", VText);

describe("web component v-text", () => {
    beforeEach(() => {
    document.body.innerHTML = `
        <v-text class="v-text"></v-text>
    `
    })
})