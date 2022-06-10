import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

// Combine all reducers
const appReducer = combineReducers({
    movie : movieReducer,
});

const rootReducer = (state, action) => {
    // Clear all data in store when user logs out
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;