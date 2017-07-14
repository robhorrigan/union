import { createFormReducers } from '@xo-union/tk-component-fields';
import { getFormName } from '@utilities/stateManagement';
import { coreValidators } from '@xo-union/tk-component-fields/lib/validations';

export default createFormReducers([
  getFormName('sign-up'),
  getFormName('log-in')
]);
