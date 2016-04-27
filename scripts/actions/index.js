import 'whatwg-fetch';

const getCoursesUrl = (category)=>category.getUrl;

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
export const receiveCourses=(courses)=>({
  type : RECEIVE_COURSES,
  courses : courses
});


export const fetchCourses = (category)=>{
  return (dispatch)=>{
    return fetch(getCoursesUrl(category)).then(response=>response.json()).then(json=>dispatch(receiveCourses(json.elements)));
  }
};

