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

export const SELECT_COURSE = 'SELECT_COURSE';
export const selectCourse = (id)=>({
  type : SELECT_COURSE,
  id : id
});

export const RECEIVE_COURSE = 'RECEIVE_COURSE';
export const receiveCourse = (courseId, courseInfo)=>({
  type : RECEIVE_COURSE,
  outcome : {
    [courseId] : courseInfo
  }
});

export const SET_FETCHING = 'SET_FETCHING';
export const setFetching=(fetching)=>({
  type : SET_FETCHING,
  fetching : fetching
})

export const fetchCoursesIfNeeded = (categoryId)=>{
  return (dispatch, getState)=>{
    if( categoryId === null ) return;
    var state = getState();
    if(state.fetching) return;
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

export const fetchCourseIfNeeded = (courseId)=>{
  return (dispatch, getState)=>{
    if(courseId === null) return;
    var state = getState();
    if(state.fetching) return;
    if(state.courses[courseId]) return;
    var courseUrl = 'https://api.coursera.org/api/courses.v1/' + courseId + '?fields=description';
    return fetch('https://crossorigin.me/'+courseUrl)
      .then(response=>{
        if (response.status >= 400){
          dispatch(setFetching(false));
          throw new Error('request failed with status ' + response.statusText);
        } 
        return response.json();
      }).then(json=>dispatch(receiveCourse(courseId, json.elements[0]))).then(()=>dispatch(setFetching(false)));
  };
};
