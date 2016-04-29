import React, { PropTypes } from 'react';
import {Drawer, Subheader, MenuItem, IconButton, Avatar} from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';
import {ActionFavoriteBorder} from 'material-ui/svg-icons'
import {Card, CardActions, CardExpandable, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    marginBottom: 24,
    marginTop : 24
  },
};

export const MainMenu = ({menuOpen, onMenuToggle, menuItems, onMenuItemClick})=>{
  return (
    <Drawer open={menuOpen} docked={false} openRight={true}  onRequestChange={onMenuToggle}>
        <Subheader>Courses catalog</Subheader>
        {menuItems.map(menuItem=>(<MenuItem onTouchTap={()=>{onMenuItemClick(menuItem.id)}} key={menuItem.id}>{menuItem.name}</MenuItem>))}
    </Drawer>
  );
};

export const CategoriesList = ({items, onListItemClick})=>{
  return(
    <div style={styles.root}>
        <GridList cols={2} cellHeight={160} padding={1} style={styles.gridList}>
          {items.map(item => (
            <GridTile
              key={item.id}
              title={item.name}
              cols={item.featured ? 2 : 1}
              titlePosition={item.featured ? 'top' : 'bottom'}
              onTouchTap={()=>onListItemClick(item.id)}
              >
                <img src={item.logoUrl} />
            </GridTile>
          ))}
        </GridList>
      </div>
  );
};

export const CoursesList = ({items, onListItemClick})=>{
  return(
    <List>
      {items.map(item=>(
        <ListItem 
          primaryText={item.name} 
          key={item.id} 
          /*leftAvatar={<Avatar src={item.photoUrl} />}*/
          onTouchTap={()=>onListItemClick(item.id)}/>
      ))}
    </List>
  );
};

export const CourseView = ({course})=>(
  <Card>
    <CardTitle title={course.name}  />
    <CardText>{course.description}</CardText>
  </Card>
);
