import * as types from '../actions/actionTypes';

//You don't have to give this a name, but this is helpful
//Reducers take current state & action, and return state

//Default params in ES6 ------------------->
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
    // Spread operator: represents our existing array & exploding it out, returning a new instance of our state array
      return action.courses;
    // Can't do this bc state is immutable
      // state.push(action.course);
      // return state;

    default:
      return state;
  }
}
