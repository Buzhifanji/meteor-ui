export function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(1, 2);

describe("add", () => {
  it("result", () => {
    expect(result).toBe(3);
  });
});
