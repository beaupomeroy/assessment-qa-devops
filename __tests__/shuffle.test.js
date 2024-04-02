const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    let array = [1, 2, 3, 4, 5];

    let actual = shuffle(array);

    expect(Array.isArray(actual)).toBe(true);
  });

  test("return an array of the same length as the argument sent in", () => {
    let array = [1, 2, 3, 4, 5];

    let actual = shuffle(array)

    expect(actual.length).toBe(array.length);
  });
});
