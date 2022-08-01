import axios from 'axios';
import { FETCH_MEMBERS } from './types';

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members');
  dispatch({ type: FETCH_MEMBERS, payload: res.data });;
}
