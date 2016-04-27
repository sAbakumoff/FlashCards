import React, { PropTypes } from 'react';
import {Drawer, Subheader, MenuItem} from 'material-ui';
import {List, ListItem} from 'material-ui/List';

export const MainMenu = ({menuOpen, onMenuToggle, menuItems, onMenuItemClick})=>{
  return (
    <Drawer open={menuOpen} docked={false} openRight={true}  onRequestChange={onMenuToggle}>
        <Subheader>Courses catalog</Subheader>
        {menuItems.map(menuItem=>(<MenuItem onTouchTap={()=>{onMenuItemClick(menuItem.id)}} key={menuItem.id}>{menuItem.name}</MenuItem>))}
    </Drawer>
  );
};
