import {
    GET_FOLLOWS_SUCCESS,
    GET_FOLLOWS_FAILURE
} from "../actions/follows.js";

const initialState = {
    users: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_FOLLOWS_SUCCESS:
            return state;
        default:
            return state;
    }
}