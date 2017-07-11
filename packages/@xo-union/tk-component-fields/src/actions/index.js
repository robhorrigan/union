export const CHANGE = '@xo-union/tk-component-fields/CHANGE';
export const UPDATE_VISUAL_STATE = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE';
export const UPDATE_VISUAL_STATE_OF_ALL = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE_OF_ALL';

export function change(name, value, isValid) {
  return {
    type: CHANGE,
    name,
    value,
    isValid
  };
}

export function updateVisualState(name) {
  return {
    type: UPDATE_VISUAL_STATE,
    name
  };
}

export function updateVisualStateOfAll() {
  return { type: UPDATE_VISUAL_STATE_OF_ALL };
}