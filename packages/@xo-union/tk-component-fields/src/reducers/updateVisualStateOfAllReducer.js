import { visualState } from '@models/field';

export default function updateVisualStateOfAllReducer(oldState) {
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

