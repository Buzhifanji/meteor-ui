// import { defineCustomElement, render } from "utils";
// import { VSpace } from "../src";

import { expect } from "chai";

// defineCustomElement("v-space", VSpace);

// describe("v-sapce", () => {
//   it("renders space correctly", async () => {
//     const { shadowRoot } = await render("v-space", "<span>space></span>");
//     console.log("dddd", shadowRoot?.innerHTML);
//   });
// });

function add(a: number, b: number): number {
  return a + b;
}

describe("add", () => {
  it("result", () => {
    expect(add(1, 2)).toBe(3);
  });
});
