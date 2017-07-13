import { createFormReducers } from '@xo-union/tk-component-fields';
import { getFormName } from '@utilities/stateManagement';

function capitalize() {
  return this.replace(/^./, char => char.toUpperCase());
}

const validators = {
  required: {
    createMessage({ name }) {
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
  }
};

export default createFormReducers([
  {
    name: getFormName('sign-up'),
    validators
  },
  {
    name: getFormName('log-in'),
    validators
  }
]);
