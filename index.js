const { isEmail, maskEmail } = require("./lib/isEmail");
const { stringValidator } = require("./lib/isString");
const { numberValidator } = require("./lib/isNumber");
const { isEmpty } = require("./lib/field-validate");

module.exports = { isEmail, maskEmail, isEmpty, stringValidator, numberValidator };
