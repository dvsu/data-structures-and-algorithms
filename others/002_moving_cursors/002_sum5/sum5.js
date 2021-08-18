"use strict";

// assume input list has been sorted
// return an array that contains
// 2 elements with a total sum of 5
function sumFive(list) {
  if (!list.length) return [];

  let curS = 0;
  let curE = list.length - 1;

  while (curS < curE) {
    let sum = list[curS] + list[curE];
    if (sum == 5) {
      return [list[curS], list[curE]];
    }
    if (sum > 5) {
      curE--;
    } else {
      curS++;
    }
  }
  return [];
}

module.exports = sumFive;
