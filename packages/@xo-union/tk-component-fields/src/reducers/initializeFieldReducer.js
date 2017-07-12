import fieldInitialState from './fieldInitialState';
import errorsReducer from './errorsReducer';

export default function initializeFieldReducer(oldState, action, validators) {
  const {
    payload,
    meta: { fieldName }
  } = action;
  
  const newFieldState = {
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
  };

  newFieldState.model.errors = errorsReducer(newFieldState, action, validators);
  
  return {
    ...oldState,
    [fieldName]: newFieldState
  };
}