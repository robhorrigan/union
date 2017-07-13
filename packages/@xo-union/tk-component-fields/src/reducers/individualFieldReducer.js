import {
  CHANGE,
  UPDATE_VISUAL_STATE,
  INITIALIZE_FIELD
} from '@actions/fields';
import changeReducer from './changeReducer';
import initializeFieldReducer from './initializeFieldReducer';
import updateVisualStateReducer from './updateVisualStateReducer';

const fieldReducerMap = {
  [INITIALIZE_FIELD]: initializeFieldReducer,
  [CHANGE]: changeReducer,
  [UPDATE_VISUAL_STATE]: updateVisualStateReducer,
};

export default function individualFieldReducer(oldState, action, validators) {
  const dedicatedReducer = fieldReducerMap[action.type];

  if (dedicatedReducer) {
    return dedicatedReducer(oldState, action, validators);
  }

  return oldState
}

