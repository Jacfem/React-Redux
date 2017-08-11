// ...FROM ACTION CREATOR
import * as types from '../actions/actionTypes';
import initialState from './initialState';

//You don't have to give this a name, but this is helpful
//Reducers take current state & action, and return state

//Default params in ES6 ------------------->
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        // Spread operator: represents our existing array & exploding it out, returning a NEW instance of our state array. BC STATE IS IMMUTABLE. CAN'T JUST PUSH A VALUE RIGHT INTO STATE
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        // Gets list of all courses EXCEPT for the one being updated, creates brand new array
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}

// LEADS TO mapStateToProps...
