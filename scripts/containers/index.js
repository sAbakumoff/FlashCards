import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import {MainMenu} from '../components';
import { connect } from 'react-redux'
import {toggleMenu, selectCategory} from '../actions';
import { Provider } from 'react-redux';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import injectTapPlugin from 'react-tap-event-plugin';
injectTapPlugin();


const muiTheme = getMuiTheme(LightRawTheme, { userAgent: 'all' });


class Root extends Component {
  componentDidMount(){
    //this.props.dispatch(fetchDecks());
  }
  componentWillReceiveProps(newProps){
    /*if(!isNaN(newProps.activeDeckIndex) && newProps.activeDeckIndex !== this.props.activeDeckIndex){
      var cardsUrl = this.props.decks[newProps.activeDeckIndex].cardsUrl;
      this.props.dispatch(fetchCards(cardsUrl));
    }*/
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
      menuItems : props.categories.map((value, index)=>({id:index, name : value.displayName})),
      onMenuToggle : ()=>dispatch(toggleMenu()),
      onMenuItemClick : (id) => dispatch(selectCategory(id))
    };
    return <MainMenu {...mainMenuProps} />;
  }
  render(){
    var props = this.props;
    var dispatch = props.dispatch;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.renderAppBar(props, dispatch)}
          {this.renderMainMenu(props, dispatch)}
        </div>
      </MuiThemeProvider>
      );
  }
}

var RootConnector = connect(state=>state)(Root);

import Store from '../store';

export default (initialState)=>{
  return ()=>(
    <Provider store={Store(initialState)}>
      <RootConnector />
    </Provider>
  );
};
