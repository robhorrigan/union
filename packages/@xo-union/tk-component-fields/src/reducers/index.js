import dig from 'xojs/lib/object/dig';
import {
  CHANGE,
  UPDATE_VISUAL_STATE,
  UPDATE_VISUAL_STATE_OF_ALL,
  INITIALIZE_FIELD
} from '@actions/fields';
import { visualState } from '@models/field';
import { getFormName } from '@utilities/stateManagement';

import fieldsReducer from './fieldsReducer';
import formInitialState from './formInitialState';

export default function createFormReducers(forms) {
  const reducers = {};

  forms.forEach(({ name, validators }) => {
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

