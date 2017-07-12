import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { modalReducers } from '@xo-union/tk-component-membership-modal';
import logger from 'redux-logger';

const rootReducer = combineReducers(modalReducers);

export default createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);
