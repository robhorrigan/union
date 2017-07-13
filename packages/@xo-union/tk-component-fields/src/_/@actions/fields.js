export const CHANGE                     = '@xo-union/tk-component-fields/CHANGE';
export const UPDATE_VISUAL_STATE        = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE';
export const UPDATE_VISUAL_STATE_OF_ALL = '@xo-union/tk-component-fields/UPDATE_VISUAL_STATE_OF_ALL';
export const INITIALIZE_FIELD           = '@xo-union/tk-component-fields/INITIALIZE_FIELD';

export function change({ fieldName, value, formName }) {
  return {
    type: CHANGE,
    meta: {
      fieldName,
      formName
    },
    payload: {
      model: {
        value
      }
    }
  };
}

export function updateVisualState({ fieldName, formName }) {
  return {
    type: UPDATE_VISUAL_STATE,
    meta: {
      fieldName,
      formName
    }
  };
}

export function updateVisualStateOfAll({ formName }) {
  return { type: UPDATE_VISUAL_STATE_OF_ALL, formName };
}

export function initializeField({
  fieldName,
  formName,
  errors,
  value,
  onValidState,
  enabledValidators
}) {
  return {
    type: INITIALIZE_FIELD,
    meta: {
      fieldName,
      formName
    },
    payload: {
      config: {
        onValidVisualState: onValidState,
        enabledValidators
      },
      model: {
        errors,
        value
      }
    }
  };
}

