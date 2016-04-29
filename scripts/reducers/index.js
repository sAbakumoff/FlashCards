import 'whatwg-fetch';
// Redux will call our reducer with an undefined state for the first time.
import {SET_TITLE, SELECT_CATEGORY, TOGGLE_MENU, RECEIVE_COURSES, SET_FETCHING, SELECT_COURSE, RECEIVE_COURSE} from '../actions';

export const title = (state='', action)=>{
  if(action.type === SET_TITLE)
    return action.title;
  return state;
};

export const menuOpen = (state=false, action)=>{
  if( action.type === SELECT_CATEGORY ){
    return false;
  }
  if( action.type === TOGGLE_MENU ){
    return !state;
  }
  return state;
};

export const categories = (state=[], action)=>state;

export const activeCategoryId = (state=null, action)=>{
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
};

export const activeCourseId = (state=null, action)=>{
  if(action.type === SELECT_COURSE)
    return action.id;
  return state;  
};

export const courses = (state={}, action)=>{
  if(action.type === RECEIVE_COURSE){
    return Object.assign({}, state, action.outcome);
  }
  return state;
};

export const activeView = (state='home', action)=>{
  if(action.type === SELECT_COURSE){
    return 'course';
  }
  if(action.type === SELECT_CATEGORY){
    return 'category';
  }
  // instructor, partner, etc.....
  return state;
};

export const fetching = (state=false, action)=>{
  if(action.type === SET_FETCHING)
    return action.fetching;
  return state;
};
