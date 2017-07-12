import keep from 'xojs/lib/object/keep';
import {
  CHANGE,
  UPDATE_VISUAL_STATE,
  UPDATE_VISUAL_STATE_OF_ALL,
  INITIALIZE_FIELD
} from '@actions/fields';
import { visualState } from '@models/field';
import { getFormName } from '@utilities/stateManagement';

const initialState = {
  fields: {}
};

function changeReducer(oldState, { fieldName, value, enabledValidators = [] }, validators) {
  const errors = [];
  const newState = {
    ...oldState,
    fields: {
      ...oldState.fields,
      [fieldName]: {
        ...oldState.fields[fieldName],
        value,
        errors
      }
    }
  };

  Object.keys(validators::keep(...enabledValidators)).forEach((validatorName) => {
    const validator = validators[validatorName];

    const result = validator(fieldName, value, /* messageOverride */);

    if (result !== null) {
      errors.push({
        validator: validatorName,
        message: result
      });
    }
  });

  return newState;
}

function updateVisualStateReducer(oldState, { fieldName }) {
  const oldFieldState = oldState.fields[fieldName];

  return {
    ...oldState,
    fields: {
      ...oldState.fields,
      [fieldName]: {
        ...oldFieldState,
        visualState: oldFieldState::visualState()
      }
    }
  };
}

function updateVisualStateOfAllReducer(oldState) {
  const newFieldsState = {};

  Object.keys(oldState.fields).forEach((fieldName) => {
    newFieldsState[fieldName] = {
      ...oldState.fields[fieldName],
      visualState: oldState.fields[fieldName]::visualState()
    };
  });

  const newState = {
    ...oldState,
    fields: newFieldsState
  };


  return newState;
}

function initializeFieldReducer(oldState, {
  fieldName,
  onValidState,
  errors,
  value
}) {
  return {
    ...oldState,
    fields: {
      ...oldState.fields,
      [fieldName]: {
        ...oldState.fields[fieldName],
        onValidState,
        errors: []
      }
    }
  };
}

export default function createFormReducers(forms) {
  const reducers = {};

  forms.forEach(({ name, validators }) => {
    reducers[getFormName(name)] = function formReducer(oldState = initialState, action) {
      if (action.formName !== name) {
        return oldState;
      }

      switch (action.type) {
        case CHANGE:
          return changeReducer(oldState, action, validators);
        case UPDATE_VISUAL_STATE:
          return updateVisualStateReducer(oldState, action);
        case UPDATE_VISUAL_STATE_OF_ALL:
          return updateVisualStateOfAllReducer(oldState);
        case INITIALIZE_FIELD:
          return initializeFieldReducer(oldState, action)
        default:
          return oldState;
      }
    };
  });

  return reducers;
}

