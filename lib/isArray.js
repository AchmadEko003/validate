"use strict";

const array = {
  check(payload) {
    if (payload && payload.length > 0) {
      return true;
    }
    return false;
  },

  parseObject(payload, options) {
    if (options === "keys") {
      return Object.keys(payload);
    } else if (options === "entries") {
      return Object.entries(payload);
    }
    return Object.values(payload);
  },

  parseString(payload, separator = null) {
    if (separator) {
      return payload.split(separator);
    }
    return [...payload];
  },
};

module.exports = array;
