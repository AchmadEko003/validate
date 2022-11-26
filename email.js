const baseRegEx = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]";

class Option {
  static emailDomain(payload) {
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

  static checkErrorMsg (payload) {
    if (payload) {
      if (payload.errorMsg !== undefined) {
        return payload.errorMsg
      }
      return "Wrong email format"
    } else {
      return "Wrong email format"
    }
  }
}

function isEmail(payload, option) {
  const regexp = baseRegEx + "@[a-zA-Z0-9-](?:.[a-zA-Z0-9-]+)";
  if (new RegExp(regexp).test(payload)) {
    return true;
  }

  return Option.checkErrorMsg(option)
}

function isEmail2(payload, errorMsg = null, opt) {
  console.log(Option.emailDomain(opt).join("|"));
  const regexp = baseRegEx + "@(gmail.com|hotmail.com|yahoo.com)";
  if (new RegExp(regexp).test(payload)) {
    return true;
  }
  return errorMsg ? errorMsg : "Wrong email format";
}

module.exports = { isEmail, isEmail2 };
