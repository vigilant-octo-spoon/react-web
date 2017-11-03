import { POST_LOGIN_SUCCESS } from '../actions/user.js';

const initialState = {
    id: null,
    email: null,
    authentication_token: null,
    name: null,
    last_name: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case POST_LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}