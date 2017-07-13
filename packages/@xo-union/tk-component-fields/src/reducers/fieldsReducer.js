import { UPDATE_VISUAL_STATE_OF_ALL } from '@actions/fields';
import updateVisualStateOfAllReducer from './updateVisualStateOfAllReducer';
import individualFieldReducer from './individualFieldReducer';

export default function fieldsReducer(oldState, action, validators) {
  const { fieldName } = action.meta;

  switch (action.type) {
    case UPDATE_VISUAL_STATE_OF_ALL:
      return updateVisualStateOfAllReducer(oldState);
    default:
      return {
        ...oldState,
        [fieldName]: individualFieldReducer(oldState[fieldName], action, validators)
      };
  }
}

