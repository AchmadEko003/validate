"use strict";

class objectValidator {
  value;
  constructor(payload) {
    this.payload = payload;
  }

  /**
   * Function for set check specific object keys. If not set value it will check all values in object.
   *
   * @param {Array} keys set
   *
   */
  setKeys(keys) {
    this.value = keys;
    return this;
  }

  /**
   * Function checking value is object or not.
   */
  check() {
    return this.payload !== null && typeof this.payload === "object";
  }

  /**
   * Function for check each object keys is null or not.
   *
   * @param {Boolean} detail set true for return with message
   *
   */
  valueNull(detail = false) {
    let arr = this.value ? this.value : Object.keys(this.payload);

    let response = {
      status: false,
      detail: [],
    };

    arr.forEach((item) => {
      if (this.payload[item] === null || this.payload[item] === undefined) {
        if (detail) {
          if (!response.status) {
            response.status = true;
          }
          response.detail.push(`${item} value is null or undefined`);
        } else {
          response = true;
          return;
        }
      }
    });

    return response;
  }
}

module.exports = {
  objectValidator,
};
