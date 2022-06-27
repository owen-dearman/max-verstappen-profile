import { dateFormatter } from "./dateFormatter";

describe("suite of tests for dateFormatter function", () => {
  test("The date is returned in the correct format", () => {
    expect(dateFormatter("1998-11-22")).toStrictEqual("22 / 11 / 1998");
    expect(dateFormatter("2001-09-09")).toStrictEqual("09 / 09 / 2001");
  });
  test("an incorrect date string returns the default", () => {
    expect(dateFormatter("hello world")).toStrictEqual("unknown");
  });
});
