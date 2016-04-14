var React = require('react');

var AppBar = require('material-ui/lib/app-bar').default;
var LeftNav = require('material-ui/lib/left-nav').default;
var MenuItem = require('material-ui/lib/menus/menu-item').default;
var RaisedButton = require('material-ui/lib/raised-button').default;
var FlatButton = require('material-ui/lib/flat-button').default;
var Badge = require('material-ui/lib/badge').default;
var Toolbar = require('material-ui/lib/toolbar/toolbar').default;
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group').default;
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title').default;


var Main=()=>(
  <div>
  	<AppBar title='FlashyCards' />
  	<LeftNav open={false}>
  		<MenuItem>Deck 1</MenuItem>
  		<MenuItem>Deck 2</MenuItem>
  	</LeftNav>
  	<Toolbar>
  		<ToolbarGroup firstChild={true} float="left">
  			<ToolbarTitle text="Deck 1" />
  			<FlatButton label='Correct : 48' primary={true} />
  			<FlatButton label="Incorrect : 18" secondary={true} />
  			<FlatButton label="Remaining : 18"  />
  		</ToolbarGroup>
  		<ToolbarGroup float="right" lastChild='true'>
  			<RaisedButton label="Start over" primary={true} />
  		</ToolbarGroup>
  	</Toolbar>
  </div>
);

module.exports = Main;
