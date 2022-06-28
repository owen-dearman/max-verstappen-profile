import { percentageOf } from "./percentageOf";

describe("suite of tests for perecntageOf", () => {
    test("returns the right percentage", () => {
        expect(percentageOf(1, 100)).toStrictEqual("(1.00%)");
        expect(percentageOf(36, 47)).toStrictEqual("(76.60%)");
    });
    test("default when input is undefined", () => {
        expect(percentageOf(1, undefined)).toStrictEqual("");
    });
});
