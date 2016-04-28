import 'whatwg-fetch';


export const SET_TITLE = 'SET_TITLE';
export const setTitle = (title)=>({
  type : SET_TITLE,
  title : title
})

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = ()=>({
  type : TOGGLE_MENU
});


export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const selectCategory=(id)=>({
  type : SELECT_CATEGORY,
  id : id
});

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const receiveCourses=(courses, categoryId)=>({
  type : RECEIVE_COURSES,
  outcome :{
    [categoryId] : courses
  } 
});

export const SET_FETCHING = 'SET_FETCHING';
export const setFetching=(fetching)=>({
  type : SET_FETCHING,
  fetching : fetching
})

export const fetchCourses = (categoryId)=>{
  return (dispatch, getState)=>{
    var state = getState();
    var savedCourses = state.coursesByCategory[categoryId];
    if(savedCourses && savedCourses.length) return;
    var category = state.categories[categoryId];
    dispatch(setFetching(true));
    var catUrl = category.getUrl;
    dispatch(setTitle(category.displayName));
    return fetch('https://crossorigin.me/'+catUrl)
      .then(response=>{
        if (response.status >= 400){
          dispatch(setFetching(false));
          throw new Error('request failed with status ' + response.statusText);
        } 
        return response.json();
      })
      .then(json=>dispatch(receiveCourses(json.elements, categoryId))).then(()=>dispatch(setFetching(false)));
  }
};

export const fetchCourse = (courseId)=>{
  return (dispatch, getState)=>{
    var state = getState();
    if(state.fetching) return;
    var courseUrl = 'https://api.coursera.org/api/courses.v1/' + courseId + '?fields=description';
    return fetch('https://crossorigin.me/'+courseUrl)
      .then(response=>{
        if (response.status >= 400){
          dispatch(setFetching(false));
          throw new Error('request failed with status ' + response.statusText);
        } 
        return response.json();
      });
  };
};
