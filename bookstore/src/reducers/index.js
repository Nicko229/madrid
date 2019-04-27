import { combineReducers } from 'redux';
import getReducer from './getReducer';


// unsure about the key for this object
export default combineReducers({
  books: getReducer
})