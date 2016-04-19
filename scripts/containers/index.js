import {ApplicationBar, NavigationMenu} from '../components/main';
import { connect } from 'react-redux'

var AppBarContainer = connect(
  state=>({title:state.title}),
  dispatch=>({
    onMenuToggle:()=>dispatch({type:'TOGGLE_MENU'})
  })
)(ApplicationBar);

var NavMenuContainer = connect(
  state=>({menuOpen : state.menuOpen})
)(NavigationMenu);

export {AppBarContainer, NavMenuContainer};
