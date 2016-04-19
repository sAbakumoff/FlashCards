import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {AppBar, Drawer, MenuItem, RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
import {ActionFlipToBack, ActionFlipToFront} from 'material-ui/svg-icons';



var NavigationMenu = ()=>(
  <Drawer open={false}>
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

var Main=()=>(
  <div>
    <AppBar title='FlashCards' />
    <NavigationMenu />
    <StatusBar />
    <FlashCard />
  </div>
);

export default Main;
