import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
  // ^ shorthand property name, es6 feature
});

export default rootReducer;
