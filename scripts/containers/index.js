import React, {Component} from 'react';
import {AppBar, CircularProgress} from 'material-ui';
import {MainMenu, List} from '../components';
import { connect } from 'react-redux'
import {toggleMenu, selectCategory, fetchCourses} from '../actions';
import { Provider } from 'react-redux';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import injectTapPlugin from 'react-tap-event-plugin';
injectTapPlugin();


const muiTheme = getMuiTheme(LightRawTheme, { userAgent: 'all' });


class Root extends Component {
  componentWillReceiveProps(newProps){
    var catId = newProps.activeCategoryId;
    if(!isNaN(catId) && catId !== this.props.activeCategoryId){
      this.props.dispatch(fetchCourses(catId));
    }
  }
  renderAppBar(props, dispatch){
    var appBarProps = {
      title : props.title,
      onLeftIconButtonTouchTap : ()=> dispatch(toggleMenu())
    };
    if(props.fetching){
      appBarProps.iconElementLeft = <CircularProgress color='white' size={0.5} />;
      onLeftIconButtonTouchTap : ()=>{};
    }
    return <AppBar {...appBarProps} />;
  }
  renderMainMenu(props, dispatch){
    var mainMenuProps = {
      menuOpen : props.menuOpen,
      menuItems : props.categories.map((value, index)=>({id:index, name : value.displayName})),
      onMenuToggle : ()=>dispatch(toggleMenu()),
      onMenuItemClick : (id) => dispatch(selectCategory(id))
    };
    return <MainMenu {...mainMenuProps} />;
  }
  renderCoursesList(props, dispatch){
    /*if(props.courses.length === 0)
      return;*/
    var listProps = {
      items : props.coursesByCategory[props.activeCategoryId] || [],
      onListItemClick : (id)=>console.log(id)
    };
    return <List {...listProps} />;
  }
  render(){
    var props = this.props;
    var dispatch = props.dispatch;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.renderAppBar(props, dispatch)}
          {this.renderMainMenu(props, dispatch)}
          {this.renderCoursesList(props, dispatch)}
        </div>
      </MuiThemeProvider>
      );
  }
}

var RootConnector = connect(state=>state)(Root);

import Store from '../store';

export default (initialState)=>{
  return ()=>(
    <Provider store={Store(initialState)}>
      <RootConnector />
    </Provider>
  );
};
