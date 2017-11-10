import { API } from "../services/api.js";

export const GET_FOLLOWS = "follows/GET_FOLLOWS";
export const GET_FOLLOWS_SUCCESS = "follows/GET_FOLLOWS_SUCCESS";
export const GET_FOLLOWS_FAILURE = "follows/GET_FOLLOWS_FAILURE";

export const getFollows = () => {
    return (dispatch, getState) => {
        const { user } = getState();
        dispatch({ type: GET_FOLLOWS, });
        return new API("GET", "/follows_all_users").withAuth(user.authentication_token).exec()
            .then((response) => {
                dispatch(getFollowsSuccess(response.data));
                return response;
            })
            .catch((error) => {
                dispatch(getFollowsFailure(error));
                throw error;
            })
    }
}

export const getFollowsSuccess = (payload) => {
    return {
        type: GET_FOLLOWS_SUCCESS,
        payload
    }
}

export const getFollowsFailure = (payload) => {
    return {
        type: GET_FOLLOWS_FAILURE,
        payload
    }
}