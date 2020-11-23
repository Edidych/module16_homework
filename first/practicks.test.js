import {mirror} from "../practicks.js";

describe("upended words", () => {
    it("change letters", () => {
        const result = mirror("hello")
        expect(result).toBe("olleh");
    });
})