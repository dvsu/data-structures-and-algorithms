const isAnagram = require("./anagram");

test(`"rina", "rain"`, () => {
  expect(isAnagram("rina", "rain")).toBe(true);
});

test(`"word", "wood"`, () => {
  expect(isAnagram("word", "wood")).toBe(false);
});

test(`"ramp", "marp"`, () => {
  expect(isAnagram("ramp", "marp")).toBe(true);
});

test(`"glasses", "gasless"`, () => {
  expect(isAnagram("glasses", "gasless")).toBe(true);
});

test(`"table", "babel"`, () => {
  expect(isAnagram("table", "babel")).toBe(false);
});

test(`"xray", "trex"`, () => {
  expect(isAnagram("xray", "trex")).toBe(false);
});

test(`"oop", "ooo"`, () => {
  expect(isAnagram("oop", "ooo")).toBe(false);
});
