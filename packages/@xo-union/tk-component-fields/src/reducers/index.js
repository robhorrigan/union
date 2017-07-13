import keep from 'xojs/lib/object/keep';
import dig from 'xojs/lib/object/dig';
import {
  CHANGE,
  UPDATE_VISUAL_STATE,
  UPDATE_VISUAL_STATE_OF_ALL,
  INITIALIZE_FIELD
} from '@actions/fields';
import { visualState } from '@models/field';
import { getFormName } from '@utilities/stateManagement';

const formInitialState = {
  fields: {}
};

const fieldInitialState = {
  config: {
    enabledValidators: [],
    onValidVisualState: 'valid'
  },
  model: {
    value: '',
    errors: []
  },
  ui: {
    currentErrorMessage: '',
    visualState: 'neutral'
  }
};

function errorsReducer({ enabledValidators }, { meta, payload }, validators) {
  const errors = [];
  const { fieldName } = meta;
  const { value } = payload;

  Object.keys(validators::keep(...enabledValidators)).forEach((validatorName) => {
    const { validate, createMessage } = validators[validatorName];

    if (!validate(value)) {
      errors.push({
        validator: validatorName,
        message: createMessage({ name: fieldName, value })
      });
    }
  });

  return errors;
}

function changeReducer(oldState, action, validators) {
  const { value } = action.payload;
  const { fieldName } = action.meta;
  const oldFieldState = oldState[fieldName];

  return {
    ...oldState,
    [fieldName]: {
      ...oldFieldState,
      model: {
        errors: errorsReducer(oldFieldState, action, validators),
        value
      }
    }
  };
}

function updateVisualStateReducer(oldState, { meta: { fieldName } }) {
  const oldFieldState = oldState[fieldName];

  return {
    ...oldState,
    [fieldName]: {
      ...oldFieldState,
      ui: {
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
  payload,
  meta: { fieldName }
}) {
  return {
    ...oldState,
    [fieldName]: {
      model: {
        ...fieldInitialState.model,
        ...payload.model
      },
      ui: {
        ...fieldInitialState.ui,
        ...payload.ui
      },
      config: {
        ...fieldInitialState.config,
        ...payload.config
      }
    }
  };
}

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
            fields: initializeFieldReducer(oldState.fields, action)
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

