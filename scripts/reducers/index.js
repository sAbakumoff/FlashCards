// Redux will call our reducer with an undefined state for the first time.
import {SET_TITLE, SELECT_DECK, TOGGLE_MENU, RECEIVED_DECKS, RECEIVED_CARDS, NEXT_CARD, FLIP_CARD, ANSWER, RESET} from '../actions';

export const title = (state='FlashyCards', action)=>{
  if( action.type === SET_TITLE ){
    return action.title;
  }
  return state;
};

export const menuOpen = (state=true, action)=>{
  if( action.type === SELECT_DECK ){
    return false;
  }
  if( action.type === TOGGLE_MENU ){
    return !state;
  }
  return state;
};

export const activeDeckIndex = (state=NaN, action)=>{
  if( action.type === SELECT_DECK ){
    return action.id;
  }
  return state;
};

export const cards = (state=[], action)=>{
  if(action.type === RECEIVED_CARDS){
    return action.cards;
  }
  return state;
};

export const cardFront=(state=true, action)=>{
  if(action.type === FLIP_CARD)
    return !state;
  if(action.type === ANSWER)
    return true;
  if(action.type === SELECT_DECK)
      return true;
  return state;
};

export const activeCardIndex = (state = NaN, action)=>{
  if( action.type === RESET ){
    return 0;
  }
  if(action.type === RECEIVED_CARDS){
    return 0;
  }
  if(action.type === NEXT_CARD){
    return action.id;
  }
  if(action.type === ANSWER){
    return state + 1;
  }
  return state;
};

export const decks = (state=[], action)=>{
  if( action.type === RECEIVED_DECKS ){
    return action.decks;
  }
  return state;
};

export const status = (state = {correct:0, incorrect:0}, action)=>{
  if( action.type === SELECT_DECK ){
    return {correct : 0, incorrect : 0};
  }
  if( action.type === ANSWER ){
    var outcome = action.isCorrect ? {correct : state.correct + 1} : {incorrect : state.incorrect + 1};
    return Object.assign({}, state, outcome);
  }
  if( action.type === RESET ){
    return Object.assign({}, state, {correct : 0, incorrect : 0});
  }
  return state;
};
