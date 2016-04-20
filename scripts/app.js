import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import * as reducers from './reducers';

var theReducer = combineReducers(reducers);

import injectTapPlugin from 'react-tap-event-plugin';
injectTapPlugin();

var store = createStore(theReducer, applyMiddleware(thunkMiddleware));

import {fetchDecks} from './actions';

store.dispatch(fetchDecks());

const muiTheme = getMuiTheme(LightRawTheme);

import {MainMenuContainer, AppBarContainer, StatusBarContainer, FlashCardContainer} from './containers';

class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
        <div>
          <AppBarContainer />
          <MainMenuContainer />
          <StatusBarContainer />
          <FlashCardContainer />
        </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}


ReactDom.render(<App />, document.getElementById('app'));
