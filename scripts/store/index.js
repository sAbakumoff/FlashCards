import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';
var theReducer = combineReducers(reducers);


export default (initialState)=>createStore(theReducer, initialState, applyMiddleware(thunkMiddleware));