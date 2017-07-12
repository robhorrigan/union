export const CHANGE                     = '@xo-union/tk-component-fields/CHANGE';
export const UPDATE_VISUAL_STATE        = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE';
export const UPDATE_VISUAL_STATE_OF_ALL = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE_OF_ALL';
export const INITIALIZE_FIELD           = '@xo-union/tk-component-fields/INITIALIZE_FIELD';

export function change({ fieldName, value, formName }) {
  return {
    type: CHANGE,
    fieldName,
    value,
    formName
  };
}

export function updateVisualState({ fieldName, formName }) {
  return {
    type: UPDATE_VISUAL_STATE,
    fieldName,
    formName
  };
}

export function updateVisualStateOfAll({ formName }) {
  return { type: UPDATE_VISUAL_STATE_OF_ALL, formName };
}

export function initializeFieldState({ value, fieldName, onValidState, formName, enabledValidators }) {
  return {
    type: INITIALIZE_FIELD,
    fieldName,
    value,
    onValidState,
    formName,
    enabledValidators
  };
}

