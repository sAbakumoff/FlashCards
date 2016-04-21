import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';
var theReducer = combineReducers(reducers);

export default createStore(theReducer, applyMiddleware(thunkMiddleware));