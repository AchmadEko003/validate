function isEmpty(payload) {
  return payload !== undefined && payload !== null;
}

function isString(payload) {
  return payload && typeof payload === "string";
}

function isObject(payload) {
  return payload && typeof payload === "object";
}

function isNumber(payload) {
  return payload && typeof payload === "number";
}

function isArray(payload) {
  return payload && Array.isArray(payload);
}

module.exports = { isEmpty, isString, isObject, isNumber, isArray };
