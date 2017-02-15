module.exports = {
  patternName: {
    name: 'patternName',
    message: 'Pattern name',
    validate(value) {
      if (/^@/.test(value)) {
        return "Don't use the scoped name, we'll take care of that for you.";
      }

      if (!/^[a-z-]+$/.test(value)) {
        return 'Name must be lower cased with dash delimiters';
      }

      return true;
    }
  }
};
