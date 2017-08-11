// ...FROM ACTION CREATOR
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
    // Every time an ajax call begins, increment state by 1
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  
  return state;
}
