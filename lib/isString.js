"use strict";

const symbolRegEx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegEx = /[0-9]/;

let symbol = false;
let number = false;

class stringValidator {
  constructor(payload) {
    this.payload = payload;
  }

  check() {
    if (!this.payload) {
      return false;
    }

    if (typeof this.payload === "string" && this.payload.length > 0) {
      if (symbol || number) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  }

  useSymbols(symbols) {
    symbol = new RegExp(symbols ? symbols : symbolRegEx).test(this.payload);
    return this;
  }

  useNumber(numbers) {
    number = new RegExp(numbers ? numbers : numberRegEx).test(this.payload);
    return this;
  }

  maxLength(number = 20) {
    return this.payload.length <= number;
  }

  minLength(number = 0) {
    return this.payload.length >= number;
  }
}

module.exports = { stringValidator };
