const isAnagramAlternative = require("./anagram2");

test(`"rina", "rain"`, () => {
  expect(isAnagramAlternative("rina", "rain")).toBe(true);
});

test(`"word", "wood"`, () => {
  expect(isAnagramAlternative("word", "wood")).toBe(false);
});

test(`"ramp", "marp"`, () => {
  expect(isAnagramAlternative("ramp", "marp")).toBe(true);
});

test(`"glasses", "gasless"`, () => {
  expect(isAnagramAlternative("glasses", "gasless")).toBe(true);
});

test(`"table", "babel"`, () => {
  expect(isAnagramAlternative("table", "babel")).toBe(false);
});

test(`"xray", "trex"`, () => {
  expect(isAnagramAlternative("xray", "trex")).toBe(false);
});

test(`"oop", "ooo"`, () => {
  expect(isAnagramAlternative("oop", "ooo")).toBe(false);
});
