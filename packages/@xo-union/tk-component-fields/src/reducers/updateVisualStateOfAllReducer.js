import { visualState } from '@models/field';
import updateVisualStateReducer from './updateVisualStateReducer';

export default function updateVisualStateOfAllReducer(oldState) {
  const newState = {};

  Object.keys(oldState).forEach((fieldName) => {
    newState[fieldName] = updateVisualStateReducer(oldState[fieldName], {
      meta: {
        fieldName
      }
    });
  });


  return newState;
}

