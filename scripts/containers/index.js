import React, {Component} from 'react';
import {AppBar, CircularProgress} from 'material-ui';
import {MainMenu, CategoriesList, CoursesList, CourseView} from '../components';
import { connect } from 'react-redux'
import {toggleMenu, selectCategory, selectCourse, fetchCoursesIfNeeded, fetchCourseIfNeeded} from '../actions';
import { Provider } from 'react-redux';
import {LightRawTheme, getMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import injectTapPlugin from 'react-tap-event-plugin';
injectTapPlugin();


const muiTheme = getMuiTheme(LightRawTheme, { userAgent: 'all' });

const mapCategoriesCollection = (source)=>source.map((value, index)=>({id:index, name:value.displayName, logoUrl : 'img/' + value.logo, featured : value.featured}));

class Root extends Component {
  componentWillReceiveProps(newProps){
    this.props.dispatch(fetchCoursesIfNeeded(newProps.activeCategoryId));
    this.props.dispatch(fetchCourseIfNeeded(newProps.activeCourseId));
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
      menuItems : mapCategoriesCollection(props.categories),
      onMenuToggle : ()=>dispatch(toggleMenu()),
      onMenuItemClick : (id) => dispatch(selectCategory(id))
    };
    return <MainMenu {...mainMenuProps} />;
  }
  renderCategoriesList(props, dispatch){
    var listProps = {
      items : mapCategoriesCollection(props.categories),
      onListItemClick : (id)=>dispatch(selectCategory(id))
    };
    return <CategoriesList {...listProps} />;
  }
  renderCoursesList(props, dispatch){
    var listProps = {
      items : props.coursesByCategory[props.activeCategoryId] || [],
      onListItemClick : (id)=>dispatch(selectCourse(id))
    };
    return <CoursesList {...listProps} />;
  }
  renderCourseView(props, dispatch){
    if(!props.courses[props.activeCourseId])
      return;
    var courseProps = {
      course : props.courses[props.activeCourseId]
    };
    return <CourseView {...courseProps} />;
  }
  render(){
    var props = this.props;
    var dispatch = props.dispatch;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.renderAppBar(props, dispatch)}
          {this.renderMainMenu(props, dispatch)}
          {props.activeView === 'home' && this.renderCategoriesList(props, dispatch)}
          {props.activeView === 'category' && this.renderCoursesList(props, dispatch)}
          {props.activeView === 'course' && this.renderCourseView(props, dispatch)}
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
