var examplesMap = {};

module.exports = {
  set: function set(key, value) {
    examplesMap[key] = value;
  },
  get: function get(key) {
    return examplesMap[key];
  }
};
