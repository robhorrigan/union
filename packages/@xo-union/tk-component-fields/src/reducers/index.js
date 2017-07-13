import dig from 'xojs/lib/object/dig';
import {
  CHANGE,
  UPDATE_VISUAL_STATE,
  UPDATE_VISUAL_STATE_OF_ALL,
  INITIALIZE_FIELD
} from '@actions/fields';
import { visualState } from '@models/field';
import { getFormName } from '@utilities/stateManagement';

import changeReducer from './changeReducer';
import initializeFieldReducer from './initializeFieldReducer';
import updateVisualStateReducer from './updateVisualStateReducer';
import updateVisualStateOfAllReducer from './updateVisualStateOfAllReducer';

import formInitialState from './formInitialState';

const fieldReducerMap = {
  [INITIALIZE_FIELD]: initializeFieldReducer,
  [CHANGE]: changeReducer,
  [UPDATE_VISUAL_STATE]: updateVisualStateReducer,
};

function individualFieldReducer(oldState, action, validators) {
  const dedicatedReducer = fieldReducerMap[action.type];

  if (dedicatedReducer) {
    return dedicatedReducer(oldState, action, validators);
  }

  return oldState
}

function fieldsReducer(oldState, action, validators) {
  const { fieldName } = action.meta;

  switch (action.type) {
    case UPDATE_VISUAL_STATE_OF_ALL:
      return updateVisualStateOfAllReducer(oldState);
    default:
      return {
        ...oldState,
        [fieldName]: individualFieldReducer(oldState[fieldName], action, validators)
      };
  }
}

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

