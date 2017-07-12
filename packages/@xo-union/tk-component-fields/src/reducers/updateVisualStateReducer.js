import { visualState } from '@models/field';
import dig from 'xojs/lib/object/dig';

export default function updateVisualStateReducer(oldState, { meta: { fieldName } }) {
  const oldFieldState = oldState[fieldName];

  return {
    ...oldState,
    [fieldName]: {
      ...oldFieldState,
      ui: {
        visualState: oldFieldState::visualState(),
        currentErrorMessage: oldFieldState::dig('model', 'errors', 0, 'message')
      }
    }
  };
};