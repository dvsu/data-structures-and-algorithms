"use strict";

// Use double cursors if the use of Set().size is prohibited
// assume the list has been sorted
function countUniqueValuesAlt1(list) {
  if (!list.length) return 0;

  let mark;
  let count = 0;

  for (let num of list) {
    if (num === mark) continue;
    mark = num;
    count++;
  }
  return count;
}

module.exports = countUniqueValuesAlt1;
