import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {AppBar, Drawer, MenuItem, RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
import {ActionFlipToBack, ActionFlipToFront} from 'material-ui/svg-icons';


export const MainMenu = ({menuOpen, onMenuToggle, menuItems, onMenuItemClick})=>{
  var mainMenuItems = menuItems.map(menuItem=>(
    <MenuItem onTouchTap={()=>{onMenuItemClick(menuItem.id)}} key={menuItem.id}>{menuItem.name}</MenuItem>
  ));
  return (
    <Drawer open={menuOpen} docked={false} openRight={true}  onRequestChange={onMenuToggle}>
      {mainMenuItems}
    </Drawer>
  );
};

export const StatusBar = ({currentDeck, status, onReset})=>(
  <Toolbar>
    <ToolbarGroup firstChild={true} float="left">
      <ToolbarTitle text={currentDeck} />
      <FlatButton label={'Correct : ' + status.correct} primary={true} />
      <FlatButton label={'Incorrect : ' + status.incorrect} secondary={true} />
      <FlatButton label={'Remaining : ' + status.remaining}  />
    </ToolbarGroup>
    <ToolbarGroup float='right'>
      <RaisedButton label='Start over' primary={true} onTouchTap={onReset} />
    </ToolbarGroup>
  </Toolbar>
);

export const FlashCard = ({onAnswer})=>(
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
            <RaisedButton label="Correct" primary={true}  onTouchTap={()=>onAnswer(true)} />
            <RaisedButton label="Incorrect" secondary={true} onTouchTap={()=>onAnswer(false)} />
      </CardActions>
    </Card>
  </div>
);
