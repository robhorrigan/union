import { combineReducers, createStore } from 'redux';
import { formReducer } from '@xo-union/tk-component-fields';

const rootReducer = combineReducers({
  membershipForm: formReducer
});

export default createStore(rootReducer);
