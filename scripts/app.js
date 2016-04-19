import React from 'react';
import ReactDom from 'react-dom';
import {LightRawTheme, getMuiTheme, ThemeProvider} from 'material-ui/styles';
import Main from './components/Main';

const muiTheme = getMuiTheme(theme);

class App extends React.Component{
  render(){
    return(
      <ThemeProvider muiTheme={muiTheme}>
        <Main />
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
