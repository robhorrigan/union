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

export default function createFormReducers(forms) {
  const reducers = {};

  forms.forEach(({ name, validators }) => {
    reducers[getFormName(name)] = function formReducer(oldState = formInitialState, action) {
      if (action::dig('meta', 'formName') !== name) {
        return oldState;
      }

      switch (action.type) {
        case INITIALIZE_FIELD:
          return {
            ...oldState,
            fields: initializeFieldReducer(oldState.fields, action, validators)
          };
        case CHANGE:
          return {
            ...oldState,
            fields: changeReducer(oldState.fields, action, validators)
          }
        case UPDATE_VISUAL_STATE:
          return {
            ...oldState,
            fields: updateVisualStateReducer(oldState.fields, action)
          }
        case UPDATE_VISUAL_STATE_OF_ALL:
          return updateVisualStateOfAllReducer(oldState);
        default:
          return oldState;
      }
    };
  });

  return reducers;
}

