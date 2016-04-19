import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {AppBar, Drawer, MenuItem, RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
import {ActionFlipToBack, ActionFlipToFront} from 'material-ui/svg-icons';


class ApplicationBar extends React.Component{

  constructor(props, context) {
      super(props, context);
      this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.onMenuToggle();
  }
  /*return(
    <AppBar title={title} onTitleTouchTap={onClick} />
  );*/
  render(){
    return(
      <p onClick={this.onClick}>Open menu</p>
    )
  }
};

ApplicationBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuToggle: PropTypes.func.isRequired
}

var NavigationMenu = ({menuOpen})=>(
  <Drawer open={menuOpen} docked={true} openRight={true}>
    <MenuItem>Deck 1</MenuItem>
    <MenuItem>Deck 2</MenuItem>
  </Drawer>
);


var StatusBar = ()=>(
  <Toolbar>
    <ToolbarGroup firstChild={true} float="left">
      <ToolbarTitle text="Deck 1" />
      <FlatButton label='Correct : 8' primary={true} />
      <FlatButton label="Incorrect : 16" secondary={true} />
      <FlatButton label="Remaining : 322"  />
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <RaisedButton label="Start over" primary={true} />
    </ToolbarGroup>
  </Toolbar>
);

var FlashCard = ()=>(
  <div className='card'>
    <Card>
      <CardMedia>
        <div className='card-media'>
          <div className='card-content'>x==y [x is equal to y]<br/>x===y [x is exactly equal to y]<br/>!= [not equal to]<br/>&gt; [greater than]<br/>&lt; [less than]<br/>&gt;= [greater than or equal to]<br/>&lt;= [less than or equal to]</div>
          <FloatingActionButton className='btn-rotate'>
            <ActionFlipToBack />
          </FloatingActionButton>
        </div>
      </CardMedia>
      <CardActions>
            <RaisedButton label="Correct" primary={true}  />
            <RaisedButton label="Incorrect" secondary={true} />
      </CardActions>
    </Card>
  </div>
);

export {NavigationMenu, ApplicationBar, StatusBar, FlashCard};
