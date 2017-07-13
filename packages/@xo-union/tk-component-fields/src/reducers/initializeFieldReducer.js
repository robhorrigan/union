import fieldInitialState from './fieldInitialState';
import errorsReducer from './errorsReducer';

export default function initializeFieldReducer(oldState = fieldInitialState, action, validators) {
  const {
    payload,
    meta: { fieldName }
  } = action;

  const newFieldState = {
    model: {
      ...oldState.model,
      ...payload.model
    },
    ui: {
      ...oldState.ui,
      ...payload.ui
    },
    config: {
      ...oldState.config,
      ...payload.config
    }
  };

  newFieldState.model.errors = errorsReducer(newFieldState, action, validators);

  return newFieldState;
}
