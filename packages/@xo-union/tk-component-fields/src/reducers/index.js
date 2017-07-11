import { CHANGE, UPDATE_VISUAL_STATE, UPDATE_VISUAL_STATE_OF_ALL } from '../actions';

const initialState = {
  fields: {},
  isValid: true
};

function visualStateMapper({ isValid }) {
  return isValid ? 'neutral' : 'invalid';
}

function isFormValid(state) {
  return Object.keys(state).every((fieldName) => state[fieldName].isValid);
}

export default function formReducer(oldState = initialState, action) {
  console.log(action);
  const {
    name,
    isValid,
    value
  } = action;
  const oldFieldState = oldState.fields[name];
  let newState = {};

  switch (action.type) {
    case CHANGE:
      newState = {
        ...oldState,
        fields: {
          ...oldState.fields,
          [name]: {
            ...oldFieldState,
            value,
            isValid
          }
        }
      };

      newState.isValid = isFormValid(newState);

      return newState;
    case UPDATE_VISUAL_STATE:
      return {
        ...oldState,
        fields: { 
          ...oldState.fields,
          [name]: {
            ...oldFieldState,
            visualState: visualStateMapper(oldFieldState)
          }
        }
      };
    case UPDATE_VISUAL_STATE_OF_ALL:
      newState = { ...initialState };

      Object.keys(oldState.fields).forEach((fieldName) => {
        newState.fields[fieldName] = {
          ...oldState.fields[fieldName],
          visualState: visualStateMapper(oldState.fields[fieldName])
        };
      });

      newState.isValid = isFormValid(newState);

      return newState;
    default:
      return oldState;
  }
}
