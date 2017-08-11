// ...FROM ACTION CREATOR

import * as types from '../actions/actionTypes';
import initialState from './initialState';

//You don't have to give this a name, but this is helpful
//Reducers take current state & action, and return state

//Default params in ES6 ------------------->
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
    // Spread operator: represents our existing array & exploding it out, returning a new instance of our state array
      return action.authors;
    // Can't do this bc state is immutable
      // state.push(action.author);
      // return state;

    default:
      return state;
  }
}

// LEADS TO mapStateToProps...
