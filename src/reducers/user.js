import {POST_LOGIN_SUCCESS} from '../actions/user.js';

const intialState = {
    id: null,
    email: null,
    authentication_token: null,
    name: null,
    last_name: null,
};

export default (state = intialState, action) => {
    switch(action.type) {
        case POST_LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}