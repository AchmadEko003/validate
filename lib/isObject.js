"use strict";

class objectValidator {
  value;
  constructor(payload) {
    this.payload = payload;
  }

  setKeys(keys) {
    this.value = keys;
    return this;
  }

  check() {
    return this.payload !== null && typeof this.payload === "object";
  }

  valueNull() {
    let arr = this.value ? this.value : Object.keys(this.payload);

    const response = {
      status: false,
      detail: [],
    };

    arr.forEach((item) => {
      if (this.payload[item] === null || this.payload[item] === undefined) {
        if (!response.status) {
          response.status = true;
        }
        response.detail.push(`${item} value is null or undefined`);
      }
    });

    return response;
  }
}

module.exports = {
  objectValidator,
};
