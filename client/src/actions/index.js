import axios from 'axios';
import { FETCH_MEMBERS, FETCH_SHOWS } from './types';

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members');
  dispatch({ type: FETCH_MEMBERS, payload: res.data });
}

export const fetchShows = () => async dispatch => {
  const res = await axios.get('/api/shows');
  dispatch({ type: FETCH_SHOWS, payload: res.data });
}