/* eslint-disable no-restricted-globals */
import { defineCustomElement } from "utils";
import { Selector, SelectorAll } from "utils/dom";
import { getStylePropertyValue } from "utils/style";
import { VDivider } from '../src'

defineCustomElement("v-divider", VDivider);

describe("web component v-divider", () => {
    beforeEach(() => {
    document.body.innerHTML = `
        <v-divider class="v-divider"></v-divider>
    `
    })
})