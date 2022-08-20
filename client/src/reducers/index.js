import { combineReducers } from 'redux';
import { membersReducer } from './membersReducer';
import { productsReducer } from './productsReducer';
import { showsReducer } from './showsReducer';

export const reducers = combineReducers({
  members: membersReducer,
  shows: showsReducer,
  products: productsReducer
});