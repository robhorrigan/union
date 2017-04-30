module.exports = function queryParamPattern(text) {
  return new RegExp(`[?&]${text}(?:&|$)`);
};

