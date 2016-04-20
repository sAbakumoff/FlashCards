import {AppBar} from 'material-ui';
import {MainMenu, StatusBar, FlashCard} from '../components/main';
import { connect } from 'react-redux'

var toggleMenuAction = {
  type : 'TOGGLE_MENU'
};

const answer = (isCorrect)=>(
  {
    type : 'ANSWER',
    isCorrect : isCorrect
  }
);

const resetAction = {
    type : 'RESET'
};

export const AppBarContainer = connect(
  state=>({title:state.title}),
  dispatch=>({
    onLeftIconButtonTouchTap : ()=> dispatch(toggleMenuAction)
  })
)(AppBar);

export const MainMenuContainer = connect(
  state=>({
    menuOpen : state.menuOpen,
    menuItems : state.decks.map((value, index)=>({
      id : index,
      name : value.name
    }))
  }),
  dispatch=>({
    onMenuToggle:()=>dispatch(toggleMenuAction),
    onMenuItemClick : (id)=>dispatch({
      type : 'SELECT_DECK',
      id : id
    })
  })
)(MainMenu);

export const StatusBarContainer = connect(
  state=>({
    currentDeck : isNaN(state.activeDeckIndex) ? '' :  state.decks[state.activeDeckIndex].name,
    status : {
      correct : state.status.correct,
      incorrect : state.status.incorrect,
      remaining : state.status.total - state.status.correct - state.status.incorrect
    }
  }),
  dispatch => ({
   onReset : ()=>dispatch(resetAction)
  })
)(StatusBar);

export const FlashCardContainer = connect(
  state =>({
    
  }
  ),
  dispatch => ({
      onAnswer : (isCorrect)=>dispatch(answer(isCorrect))
  })
)(FlashCard);
