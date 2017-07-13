import { visualState } from '@models/field';
import dig from 'xojs/lib/object/dig';

export default function updateVisualStateReducer(oldState, { meta: { fieldName } }) {
  return {
    ...oldState,
    ui: {
      visualState: oldState::visualState(),
      currentErrorMessage: oldState::dig('model', 'errors', 0, 'message')
    }
  };
};
