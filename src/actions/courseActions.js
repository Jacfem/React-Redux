import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  // want to handle promise and dispatch an action when the promise is resolved
  return function(dispatch) {
    // body of our thunk
    // make api call
    // getAllCourses returns a promise, so we can handle it here
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
