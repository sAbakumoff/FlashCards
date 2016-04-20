// Redux will call our reducer with an undefined state for the first time.


export const title = (state='FlashyCards', action)=>{
  if( action.type === 'SET_TITLE' ){
    return action.title;
  }
  return state;
};

export const menuOpen = (state=false, action)=>{
  if(action.type === 'SELECT_DECK'){
    return false;
  }
  if( action.type === 'TOGGLE_MENU' ){
    return !state;
  }
  return state;
};

export const activeDeckIndex = (state=NaN, action)=>{
  if(action.type === 'SELECT_DECK'){
    return action.id;
  }
  return state;
};

export const decks = (state=[], action)=>{
  if(action.type === 'RECEIVED_DECKS'){
    return action.decks;
  }
  return state;
};

export const status = (state = {correct:0, incorrect:0, total:0}, action)=>{
  if(action.type === 'SELECT_DECK'){
    return {correct : 0, incorrect : 0, total : 34};
  }
  if(action.type === 'ANSWER'){
    var outcome = action.isCorrect ? {correct : state.correct + 1} : {incorrect : state.incorrect + 1};
    return Object.assign({}, state, outcome);
  }
  if(action.type === 'RESET'){
    return Object.assign({}, state, {correct : 0, incorrect : 0});
  }
  return state;
};
