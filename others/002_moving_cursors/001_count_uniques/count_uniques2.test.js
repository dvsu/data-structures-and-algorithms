const countUniqueValuesAlt1 = require("./count_uniques2");

test(`Positive values`, () => {
  expect(
    countUniqueValuesAlt1([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 12])
  ).toBe(3);
});

test(`Negative values`, () => {
  expect(countUniqueValuesAlt1([-12, -6, -3, -3, -3, -1])).toBe(4);
});

test(`Mixed values`, () => {
  expect(countUniqueValuesAlt1([-5, -4, -3, -3, -1, 0, 1, 2, 4])).toBe(8);
});

test(`Empty value`, () => {
  expect(countUniqueValuesAlt1([])).toBe(0);
});
