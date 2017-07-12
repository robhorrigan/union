import errorsReducer from './errorsReducer';

export default function changeReducer(oldState, action, validators) {
  const { 
    payload: {
      model: { value }
    },
    meta: {
      fieldName
    }
  } = action;
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