// Redux will call our reducer with an undefined state for the first time.
import {SELECT_CATEGORY, TOGGLE_MENU} from '../actions';

export const title = (state='FlashyCards', action)=>state;

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

export const activeCategoryId = (state=null, action)=>{
  if(action.type === SELECT_CATEGORY){
    return action.id;
  }
  return state;
};
