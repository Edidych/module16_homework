import {repeatWord} from "./task.js";

describe("test case", () => {
    it("rightly test", () => {
        expect(repeatWord("hello", 3)).toBe("hello1, hello2, hello3.");
        expect(repeatWord("hello", 0)).toBe("Данные введены не корректно. Первым значением должно быть слово, вторым цифра. Количество повторений должно быть больше 1.");
    })
});

describe("unit test", () => {
    it("correct dot", () => {
        expect(repeatWord("hello", 1)).toBe("hello1.");
    }),
    it("incorrect data", () => {
        expect(repeatWord(2, 3)).toBe("Данные введены не корректно. Первым значением должно быть слово, вторым цифра. Количество повторений должно быть больше 1.");
    }),
    it("successful execution", () => {
        expect(repeatWord("hello", 3)).toBe("hello1, hello2, hello3.");
    });
});
