import { FETCH_MEDIA_IMAGES, FETCH_VIDEOS } from '../actions/types';

export const mediaReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MEDIA_IMAGES:
            return action.payload;
        case FETCH_VIDEOS:
            return action.payload;
        default:
            return state;
    }
};