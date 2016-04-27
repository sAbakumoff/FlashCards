import React, { PropTypes } from 'react';
import {Drawer, Subheader, MenuItem, IconButton} from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';
import {ActionFavoriteBorder} from 'material-ui/svg-icons'

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

export const List = ({items, onListItemClick})=>{
  return(
    <div style={styles.root}>
        <GridList cols={2} cellHeight={200} padding={1} style={styles.gridList}>
          {items.map(item => (
            <GridTile
              key={item.id}
              title={item.name}
              onTouchTap={()=>onListItemClick(item.id)}
              >
                <img src={item.photoUrl} />
            </GridTile>
          ))}
        </GridList>
      </div>
  );
};
