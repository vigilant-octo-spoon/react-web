import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import follows from './follows';

export default combineReducers({
    routing: routerReducer,
    user,
    follows
})