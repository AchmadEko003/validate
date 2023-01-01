"use strict";

const symbolRegEx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegEx = /[0-9]/;
const linkURLRegEx =
  /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

let symbol = false;
let number = false;

class stringValidator {
  constructor(payload) {
    this.payload = payload;
  }

  /**
   * Function for check value
   */
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

  /**
   * Function for checking character symbols
   * 
   * @param {String} payload set for custom RegEx
   *
   */
  useSymbols(symbols) {
    symbol = new RegExp(symbols ? symbols : symbolRegEx).test(this.payload);
    return this;
  }

  /**
   * Function for checking number
   * 
   * @param {Number} payload set for custom number
   *
   */
  useNumber(numbers) {
    number = new RegExp(numbers ? numbers : numberRegEx).test(this.payload);
    return this;
  }

  /**
   * Function for limit max length string
   * 
   * @param {Number} payload set for custom value
   *
   */
  maxLength(number = 20) {
    return this.payload.length <= number;
  }

  /**
   * Function for limit min length string
   * 
   * @param {Number} payload set for custom value
   *
   */

  minLength(number = 0) {
    return this.payload.length >= number;
  }

  checkLinkURL() {
    const res = new RegExp(linkURLRegEx).test(this.payload);
    return res;
  }
}

module.exports = { stringValidator };
