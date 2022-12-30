function isEmpty(payload) {
  if (payload) {
    if (typeof payload === "object") {
      if (Object.keys(payload).length) {
        return false;
      }
      return true;
    }
    if (Array.isArray(payload)) {
      if (payload.length) {
        return false;
      }
      return true;
    }
    if (typeof payload === "string") {
      if (payload) {
        return false;
      }
      return true;
    }
    return false;
  }
  return true;
}

module.exports = { isEmpty };
