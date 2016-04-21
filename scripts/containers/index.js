import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {MainMenu, StatusBar, FlashCard} from '../components';
import { connect } from 'react-redux'
import {toggleMenu, reset, answer, fetchDecks, selectDeck} from '../actions';
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
    // todo:handle the active deck changed index
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
    var status = props.status;
    var statusBarProps = {
      currentDeck : isNaN(props.activeDeckIndex) ? '' :  props.decks[props.activeDeckIndex].name,
      status : {
        correct : status.correct,
        incorrect : status.incorrect,
        remaining : status.total - status.correct - status.incorrect,
      },
      onReset : ()=>dispatch(reset())
    };
    return <StatusBar {...statusBarProps} />;
  }
  renderFlashCard(props, dispatch){
    var flashCardProps = {
      onAnswer : (isCorrect)=>dispatch(answer(isCorrect))
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


