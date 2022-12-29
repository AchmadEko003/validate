"use strict";

const symbolRegEx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegEx = /[0-9]/;
const linkURLRegEx = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

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

  checkLinkURL () {
    const res = new RegExp(linkURLRegEx).test(this.payload)
    return res
  }
}

module.exports = { stringValidator };
