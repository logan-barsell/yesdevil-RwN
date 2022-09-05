import axios from 'axios';
import { FETCH_BIO, FETCH_MEMBERS, FETCH_PRODUCTS, FETCH_SHOWS, FETCH_SHIPPING, FETCH_CONTACT_INFO } from './types';

export const fetchContactInfo = () => async dispatch => {
  const res = await axios.get('/api/getContactInfo');
  dispatch({ type: FETCH_CONTACT_INFO, payload: res.data });
}

export const fetchBio = () => async dispatch => {
  const res = await axios.get('/api/bio');
  dispatch({ type: FETCH_BIO, payload: res.data });
}

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members');
  dispatch({ type: FETCH_MEMBERS, payload: res.data });
}

export const fetchShows = () => async dispatch => {
  const res = await axios.get('/api/shows');
  dispatch({ type: FETCH_SHOWS, payload: res.data });
}

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products');
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
}

export const fetchShipping = () => async dispatch => {
  const res = await axios.get('/api/shipping');
  dispatch({ type: FETCH_SHIPPING, payload: res.data });
}
