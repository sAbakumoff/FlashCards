import React from 'react';
import ReactDom from 'react-dom';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Main from './components/main.js';

const muiTheme = getMuiTheme(LightRawTheme);

class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
      </MuiThemeProvider>
    );
  }
}


ReactDom.render(<App />, document.getElementById('app'));
