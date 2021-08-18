const countUniqueValues = require("./count_uniques");

test(`Positive values`, () => {
  expect(
    countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 12])
  ).toBe(3);
});

test(`Negative values`, () => {
  expect(countUniqueValues([-12, -6, -3, -3, -3, -1])).toBe(4);
});

test(`Mixed values`, () => {
  expect(countUniqueValues([-5, -4, -3, -3, -1, 0, 1, 2, 4])).toBe(8);
});

test(`Empty value`, () => {
  expect(countUniqueValues([])).toBe(0);
});
