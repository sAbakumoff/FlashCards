var React = require('react');

var MUI = require('material-ui');
var AppBar = MUI.AppBar;
var LeftNav = MUI.Drawer;
var MenuItem = MUI.MenuItem;
var RaisedButton = MUI.RaisedButton;
var FlatButton = MUI.FlatButton;
var FloatingActionButton = MUI.FloatingActionButton;
var ContentFlipToBack = require('material-ui/svg-icons').ActionFlipToBack;
var ContentFlipToFront = require('material-ui/svg-icons').ActionFlipToFront;
var Toolbar = MUI.Toolbar;
var ToolbarGroup = MUI.ToolbarGroup;
var ToolbarTitle = MUI.ToolbarTitle;

var Card = MUI.Card;
var CardActions = MUI.CardActions;
var CardHeader = MUI.CardHeader;
var CardMedia = MUI.CardMedia;
var CardTitle = MUI.CardTitle;
var CardText = MUI.CardText;


var Main=()=>(
  <div>
  	<LeftNav open={false}>
  		<MenuItem>Deck 1</MenuItem>
  		<MenuItem>Deck 2</MenuItem>
  	</LeftNav>
    <AppBar title='FlashCards' />
  	<Toolbar>
  		<ToolbarGroup firstChild={true} float="left">
  			<ToolbarTitle text="Deck 1" />
  			<FlatButton label='Correct : 8' primary={true} />
  			<FlatButton label="Incorrect : 16" secondary={true} />
  			<FlatButton label="Remaining : 322"  />
  		</ToolbarGroup>
  		<ToolbarGroup float="right" lastChild={true}>
  			<RaisedButton label="Start over" primary={true} />
  		</ToolbarGroup>
  	</Toolbar>
    <div className='card'>
      <Card>
        <CardMedia>
          <div className='card-media'>
          x==y [x is equal to y]<br/>x===y [x is exactly equal to y]<br/>!= [not equal to]<br/>&gt; [greater than]<br/>&lt; [less than]<br/>&gt;= [greater than or equal to]<br/>&lt;= [less than or equal to]
          <FloatingActionButton className='btn-rotate'>
            <ContentFlipToFront />
          </FloatingActionButton>
          </div>
        </CardMedia>
        <CardActions>
              <RaisedButton label="Correct" primary={true}  />
              <RaisedButton label="Incorrect" secondary={true} />
        </CardActions>
      </Card>
    </div>
  </div>
);

module.exports = Main;
