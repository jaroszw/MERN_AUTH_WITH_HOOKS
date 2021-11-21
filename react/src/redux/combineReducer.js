import { combineReducers } from 'redux';
import userReducer from './userRedux';

export default combineReducers({
  user: userReducer,
});
