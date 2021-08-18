const sumFive = require("./sum5");

test(`Positive values`, () => {
  expect(sumFive([0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3])).toStrictEqual([2, 3]);
});

test(`Negative values`, () => {
  expect(sumFive([-12, -6, -3, -3, -3, -1])).toStrictEqual([]);
});

test(`Mixed values`, () => {
  expect(sumFive([-3, -2, -1, 0, 7, 8, 9])).toStrictEqual([-3, 8]);
});

test(`Empty value`, () => {
  expect(sumFive([])).toStrictEqual([]);
});

test(`No result`, () => {
  expect(sumFive([-100, -90, -50, 0, 1, 2, 6])).toStrictEqual([]);
});
