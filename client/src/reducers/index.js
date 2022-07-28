import { combineReducers } from 'redux';
import { membersReducer } from './membersReducer';

export const reducers = combineReducers({
  members: membersReducer
});