const { isEmail, maskEmail } = require("./lib/isEmail");
const fieldValidator = require("./lib/field-validate");
const { stringValidator } = require("./lib/isString");
const { numberValidator } = require("./lib/isNumber");
const { objectValidator } = require("./lib/isObject");
const arrayValidator = require("./lib/isArray")

module.exports = {
  validate: fieldValidator,
  isEmail,
  maskEmail,
  isEmpty,
  isArray: arrayValidator,
  isString: stringValidator,
  isNumber: numberValidator,
  isObject: objectValidator
};
