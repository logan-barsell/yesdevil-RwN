import { combineReducers } from 'redux';
import { membersReducer } from './membersReducer';
import { showsReducer } from './showsReducer';

export const reducers = combineReducers({
  members: membersReducer,
  shows: showsReducer
});