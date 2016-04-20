import 'whatwg-fetch';

export const receiveDecks = (decks)=>({
  type : 'RECEIVED_DECKS',
  decks : decks
});

export const fetchDecks = ()=>{
  return (dispatch)=>{
    return fetch('data/decks.json').then(response=>response.json()).then(json=>dispatch(receiveDecks(json)));
  }
};
