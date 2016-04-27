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


export const fetchCourses = (categoryId)=>{
  return (dispatch, getState)=>{
    var catUrl = getState().categories[categoryId].getUrl;
    return fetch('https://crossorigin.me/'+catUrl)
      .then(response=>{
        //var response2 = response.clone();
        if (response.status >= 400) throw new Error('request failed with status ' + response.statusText);
        return response.json();
      })
      .then(json=>dispatch(receiveCourses(json.elements)));
  }
};

