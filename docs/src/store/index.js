import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createFormReducers } from '@xo-union/tk-component-fields';
import { modalReducers } from '@xo-union/tk-component-membership-modal';
import logger from 'redux-logger';

const rootReducer = combineReducers(modalReducers);

export default createStore(rootReducer, applyMiddleware(logger));
