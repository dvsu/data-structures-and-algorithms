"use strict";

// maximum sum of a sub array in an array
// return 0 if calculation cannot be performed,
// or condition is not met
// Assume the order of array cannot be changed
function maxSubArraySum(list, size) {
  // list = main array
  // size = size of sub array

  if (list.length < size) return 0;

  let max = list.slice(0, size).reduce((acc, e) => acc + e);
  let temp = max;

  for (let i = size; i < list.length; i++) {
    // slide the window by substracting the first element and adding the last element
    temp = temp - list[i - size] + list[i];
    if (temp > max) max = temp;
  }
  return max;
}

module.exports = maxSubArraySum;
