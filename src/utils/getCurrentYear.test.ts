import { getCurrentYear } from "./getCurrentYear";

describe("suite of tests for getCurrentYear()", () => {
  test("returns current year", () => {
    expect(getCurrentYear()).toStrictEqual(2022);
  });
});
