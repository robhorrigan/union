import { createFormReducers } from '@xo-union/tk-component-fields';
import { coreValidators } from '@xo-union/tk-component-fields/lib/validations';

export const DEFAULT_TEST_FORM_NAME = 'form-a';
export const DEFAULT_TEST_FORM = '@xo-union/tk-component-fields/form-state(form-a)';

export function createWithDefaultConfigs() {
  return createFormReducers([
    {
      name: DEFAULT_TEST_FORM_NAME,
      validators: coreValidators
    }
  ]);
}
