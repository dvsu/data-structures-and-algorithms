const maxSubArraySum = require("./sliding_window");

test(`Positive values: subarray size = 3`, () => {
  expect(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe(21);
});

test(`Positive values: subarray size = 5`, () => {
  expect(maxSubArraySum([12, 34, 6, 32, 1, 1, 19, 6, 7, 2, 46, 7], 5)).toBe(85);
});

test(`Negative values`, () => {
  expect(maxSubArraySum([-31, -22, -11, -19, -8, -7, -90], 3)).toBe(-34);
});

test(`Empty value`, () => {
  expect(maxSubArraySum([], 10)).toBe(0);
});

test(`Short array`, () => {
  expect(maxSubArraySum([1, 2], 100)).toBe(0);
});
