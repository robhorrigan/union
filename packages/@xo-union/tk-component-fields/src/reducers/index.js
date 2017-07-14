import dig from 'xojs/lib/object/dig';
import { visualState } from '@models/field';
import { getFormName } from '@utilities/stateManagement';
import { coreValidators } from '@xo-union/tk-component-fields/lib/validations';

import fieldsReducer from './fieldsReducer';
import formInitialState from './formInitialState';

export default function createFormReducers(forms, { validators = coreValidators } = {}) {
  const reducers = {};

  forms.forEach((name) => {
    reducers[getFormName(name)] = function formReducer(oldState = formInitialState, action) {
      if (action::dig('meta', 'formName') !== name) {
        return oldState;
      }

      return {
        fields: fieldsReducer(oldState.fields, action, validators)
      };
    };
  });

  return reducers;
}

