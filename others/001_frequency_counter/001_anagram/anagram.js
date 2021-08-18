"use strict";

// compare no. of count of each character
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const strObj1 = {};
  const strObj2 = {};

  for (let ch of str1) {
    strObj1[ch] = (strObj1[ch] || 0) + 1;
  }
  for (let ch of str2) {
    strObj2[ch] = (strObj2[ch] || 0) + 1;
  }

  for (let [key, val] of Object.entries(strObj1)) {
    if (!strObj2[key]) {
      return false;
    }
    if (strObj2[key] !== val) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
