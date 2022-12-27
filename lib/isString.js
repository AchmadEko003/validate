const symbolRegEx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegEx = /[0-9]/;

class stringValidator {
  symbol = false;
  number = false;

  constructor(payload) {
    if (!payload) {
      return false;
    } else {
      this.payload = payload;
    }
  }

  check() {
    if (typeof this.payload === "string" && this.payload.length > 0) {
      if (this.symbol || this.number) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  }

  useSymbols(symbols) {
    this.symbol = new RegExp(symbols ? symbols : symbolRegEx).test(
      this.payload
    );
    return this;
  }

  useNumber(numbers) {
    this.number = new RegExp(numbers ? numbers : numberRegEx).test(
      this.payload
    );
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
