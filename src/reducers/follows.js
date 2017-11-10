import {
    GET_FOLLOWS_SUCCESS
} from "../actions/follows.js";
import { DESTROY_SESSION } from "../actions/user.js";

const initialState = {
    users: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_FOLLOWS_SUCCESS:
            return action.payload;
        case DESTROY_SESSION:
            return initialState;
        default:
            return state;
    }
}