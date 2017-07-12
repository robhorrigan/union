import { createFormReducers } from '@xo-union/tk-component-fields';
import { getFormName } from '@utilities/stateManagement';

function capitalize() {
  return this.replace(/^./, char => char.toUpperCase());
}

const validators = {
  required({
    name,
    value = '',
    messageOverride = ''
  }) {
    if (value.length === 0) {
      return messageOverride || `${name::capitalize()} is required`;
    }

    return null;
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
