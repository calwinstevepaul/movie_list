import { HANDLE_MOVIE, RESET_MOVIE } from '../action/actionTypes';

const initialState = {
    movieData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case HANDLE_MOVIE:
            return {
                ...state,
                ...action.payload
            };

        case RESET_MOVIE:
            return initialState;

        default:
            return state;
    }
}