var React = require('react');
var ReactDom = require('react-dom');
var theme = require('material-ui/styles').LightRawTheme;
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var ThemeProvider = require('material-ui/styles').MuiThemeProvider;
var Main=require('./components/main');

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
