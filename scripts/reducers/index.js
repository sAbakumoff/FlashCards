import 'whatwg-fetch';
// Redux will call our reducer with an undefined state for the first time.
import {SET_TITLE, SELECT_CATEGORY, TOGGLE_MENU, RECEIVE_COURSES, SET_FETCHING} from '../actions';

export const title = (state='', action)=>{
  if(action.type === SET_TITLE)
    return action.title;
  return state;
}

export const menuOpen = (state=true, action)=>{
  if( action.type === SELECT_CATEGORY ){
    return false;
  }
  if( action.type === TOGGLE_MENU ){
    return !state;
  }
  return state;
};

export const categories = (state=[], action)=>state;

export const activeCategoryId = (state=NaN, action)=>{
  if(action.type === SELECT_CATEGORY){
    return action.id;
  }
  return state;
};

export const coursesByCategory = (state={}, action)=>{
  if(action.type === RECEIVE_COURSES){
    return Object.assign({}, state, action.outcome);
  }
  return state;  
}

export const fetching = (state=false, action)=>{
  if(action.type === SET_FETCHING)
    return action.fetching;
  return state;
}
