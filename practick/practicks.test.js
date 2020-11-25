import {mirror} from "./practicks.js";

xdescribe("upended words", () => {
    it("change letters", () => {
        const result = mirror("hello")
        expect(result).toBe("olleh");
    });
})