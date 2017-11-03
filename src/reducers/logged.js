import { POST_LOGIN_SUCCESS } from '../actions/user.js';

const initialState = false;

export default (state = initialState, action) => {
    switch(action.type) {
        case POST_LOGIN_SUCCESS:
            return true;
        default:
            return state;
    }
}