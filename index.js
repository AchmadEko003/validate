const { isEmail, maskEmail } = require("./lib/isEmail");
const { stringValidator } = require("./lib/isString");
const { isEmpty } = require("./lib/field-validate");

module.exports = { isEmail, maskEmail, isEmpty, stringValidator };
