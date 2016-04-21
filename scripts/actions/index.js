import 'whatwg-fetch';

export const SET_TITLE = 'SET_TITLE';
export const setTitle = (title)=>({
  type : SET_TITLE,
  title : title
});

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = ()=>({
  type : TOGGLE_MENU
});


export const ANSWER = 'ANSWER';
export const answer = (isCorrect)=>(
  {
    type : ANSWER,
    isCorrect : isCorrect
  }
);


export const RESET = 'RESET';
export const reset = ()=>({
    type : RESET
});

export const SELECT_DECK = 'SELECT_DECK';
export const selectDeck=(id)=>({
  type : SELECT_DECK,
  id : id
});

export const RECEIVED_DECKS = 'RECEIVED_DECKS';
export const receiveDecks = (decks)=>({
  type : RECEIVED_DECKS,
  decks : decks
});

export const fetchDecks = ()=>{
  return (dispatch)=>{
    return fetch('data/decks.json').then(response=>response.json()).then(json=>dispatch(receiveDecks(json)));
  }
};
