const { isEmail, maskEmail } = require("./lib/isEmail");
const { isEmpty } = require("./lib/field-validate");
const { stringValidator } = require("./lib/isString");
const { numberValidator } = require("./lib/isNumber");
const { objectValidator } = require("./lib/isObject");

module.exports = {
  isEmail,
  maskEmail,
  isEmpty,
  isString: stringValidator,
  isNumber: numberValidator,
  isObject: objectValidator
};
