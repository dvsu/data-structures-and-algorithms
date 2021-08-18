"use strict";

// Use Set().size
function countUniqueValues(list) {
  return new Set(list).size;
}

module.exports = countUniqueValues;
