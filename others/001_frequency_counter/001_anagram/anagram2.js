"use strict";

// store the count of character and exhaust the count while performing lookup
function isAnagramAlternative(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const strObj = {};

  for (let ch of str1) {
    strObj[ch] = (strObj[ch] || 0) + 1;
  }

  for (let ch of str2) {
    if (!strObj[ch] || strObj[ch] <= 0) {
      return false;
    }
    strObj[ch] -= 1;
  }
  return true;
}

module.exports = isAnagramAlternative;
