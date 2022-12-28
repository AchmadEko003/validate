"use strict";

class numberValidator {
  values = null;

  constructor(payload) {
    this.payload = payload;
  }

  check() {
    if (!this.payload) {
      return false;
    }

    if (typeof this.payload === "number") {
      return true;
    }
    return false;
  }

  minNum(number = 0) {
    this.values = this.payload >= number;
    return this;
  }

  maxNum(number = 20) {
    this.values = this.payload <= number;
    return this;
  }
}

module.exports = {
  numberValidator,
};
