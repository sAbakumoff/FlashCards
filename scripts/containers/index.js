import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {MainMenu, StatusBar, FlashCard} from '../components';
import { connect } from 'react-redux'
import {toggleMenu, reset, answer, fetchDecks, selectDeck, fetchCards, flipCard} from '../actions';
import { Provider } from 'react-redux';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import injectTapPlugin from 'react-tap-event-plugin';
injectTapPlugin();


const muiTheme = getMuiTheme(LightRawTheme);


class Root extends Component {
  componentDidMount(){
    this.props.dispatch(fetchDecks());
  }
  componentWillReceiveProps(newProps){
    if(!isNaN(newProps.activeDeckIndex) && newProps.activeDeckIndex !== this.props.activeDeckIndex){
      var cardsUrl = this.props.decks[newProps.activeDeckIndex].cardsUrl;
      this.props.dispatch(fetchCards(cardsUrl));
    }
  }
  renderAppBar(props, dispatch){
    var appBarProps = {
      title : props.title,
      onLeftIconButtonTouchTap : ()=> dispatch(toggleMenu())
    };
    return <AppBar {...appBarProps} />;
  }
  renderMainMenu(props, dispatch){
    var mainMenuProps = {
      menuOpen : props.menuOpen,
      menuItems : props.decks.map((value, index)=>({id:index, name : value.name})),
      onMenuToggle : ()=>dispatch(toggleMenu()),
      onMenuItemClick : (id) => dispatch(selectDeck(id))
    };
    return <MainMenu {...mainMenuProps} />;
  }
  renderStatusBar(props, dispatch){
    if(isNaN(props.activeDeckIndex)){
      return false;
    }
    var status = props.status;
    var statusBarProps = {
      currentDeck : isNaN(props.activeDeckIndex) ? '' :  props.decks[props.activeDeckIndex].name,
      status : {
        correct : status.correct,
        incorrect : status.incorrect,
        remaining : this.props.cards.length - status.correct - status.incorrect,
      },
      onReset : ()=>dispatch(reset())
    };
    return <StatusBar {...statusBarProps} />;
  }
  renderFlashCard(props, dispatch){
    if(isNaN(props.activeDeckIndex) || isNaN(props.activeCardIndex)){
      return false;
    }
    var activeCardIndex = this.props.activeCardIndex;
    var cardProp = this.props.cardFront ? 'Term' : 'Def';
    var flashCardProps = {
      onAnswer : (isCorrect)=>dispatch(answer(isCorrect)),
      cardContent : isNaN(activeCardIndex) ?  '' :  this.props.cards[activeCardIndex][cardProp],
      onFlipCard : ()=>dispatch(flipCard())
    };
    return <FlashCard {...flashCardProps} />;
  }
  render(){
    var props = this.props;
    var dispatch = props.dispatch;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.renderAppBar(props, dispatch)}
          {this.renderMainMenu(props, dispatch)}
          {this.renderStatusBar(props, dispatch)}
          {this.renderFlashCard(props, dispatch)}
        </div>
      </MuiThemeProvider>
      );
  }
}

var RootConnector = connect(state=>state)(Root);

import Store from '../store';

export default ()=>(
  <Provider store={Store}>
    <RootConnector />
  </Provider>
);
