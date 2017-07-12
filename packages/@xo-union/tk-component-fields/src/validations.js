function capitalize() {
  return this.replace(/^./, char => char.toUpperCase());
}

export const coreValidators = {
  required: {
    createMessage(name) {
      return `${name::capitalize()} is required`;
    },
    validate(value = '') {
      return value.length > 0;
    }
  },
  email: {
    createMessage() {
      return `Must be a valid email.`
    },
    validate(value = '') {
      return /@.+\..+/.test(value);
    }
  },
  minLength: {
    createMessage(name, value, configuredValue) {
      return `${name::capitalize()} should be at least ${configuredValue} characters long`;
    },
    validate(value = '', configuredValue) {
      return value.length === 0 || value.length >= configuredValue;
    }
  }
};