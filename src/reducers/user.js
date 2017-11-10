import {
    POST_LOGIN_SUCCESS,
    DESTROY_SESSION
} from '../actions/user.js';

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
        case DESTROY_SESSION:
            return initialState;
        default:
            return state;
    }
}