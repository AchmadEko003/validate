const baseRegEx = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]";

class Option {
  static emailDomain(payload = null) {
    const result = [];
    const values = {
      gmail: payload.gmail ? "gmail.com" : null,
      hotmail: payload.hotmail ? "hotmail.com" : null,
      yahoo: payload.yahoo ? "yahoo.com" : null,
      outlook: payload.outlook ? "outlook.com" : null,
    };

    for (const key in values) {
      if (values[key] !== null && values[key] !== "") {
        result.push(values[key]);
      }
    }
    return result;
  }

  static checkErrorMsg(payload) {
    if (payload) {
      if (payload.errorMsg !== undefined) {
        return payload.errorMsg;
      }
      return "Wrong email format";
    } else {
      return "Wrong email format";
    }
  }
}

/**
 *
 * @param {String} payload email value
 * @param {Object} options option email domain
 * @returns {Boolean|String} true or error message
 *
 */
function isEmail(payload, options = null) {
  let regexp = baseRegEx;

  if (options) {
    regexp = `${regexp}@(${
      options.custom ? options.custom : Option.emailDomain(options).join("|")
    })`;
  } else {
    regexp = `${regexp}@[a-zA-Z0-9-](?:.[a-zA-Z0-9-]+)`;
  }

  if (new RegExp(regexp).test(payload)) {
    return true;
  }

  return Option.checkErrorMsg(options);
}

module.exports = { isEmail };
