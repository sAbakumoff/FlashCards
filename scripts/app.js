import React from 'react';
import ReactDom from 'react-dom';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

var defaultState = {
  title : 'Flashing Lights',
  menuOpen : false
};

var store = createStore(reducers, defaultState);

const muiTheme = getMuiTheme(LightRawTheme);

import {AppBarContainer, NavMenuContainer} from './containers';

class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
        <div>
          <AppBarContainer />
          <NavMenuContainer />
        </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}


ReactDom.render(<App />, document.getElementById('app'));
