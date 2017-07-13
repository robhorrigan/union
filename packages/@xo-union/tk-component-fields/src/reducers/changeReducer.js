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

  return {
    ...oldState,
    model: {
      ...oldState.model,
      errors: errorsReducer(oldState, action, validators),
      value
    }
  };
}
