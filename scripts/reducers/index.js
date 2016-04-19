
var defaultState = {
  title : 'FlashyCard',
  menuOpen : false
};

var appInterface = (state = defaultState, action)=>{
  if( action.type === 'TOGGLE_MENU' ){
    var ret =  Object.assign({}, state, {menuOpen : !state.menuOpen});
    return ret;
  }
  return state;
};

export default appInterface;
