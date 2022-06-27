import { hello } from "./testFunction";

test("returns hello world", () => {
  expect(hello()).toStrictEqual("hello world");
});
