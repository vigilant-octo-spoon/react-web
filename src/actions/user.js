import { API } from '../services/api.js';

export const POST_LOGIN = 'user/POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'user/POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILED = 'user/POST_LOGIN_FAILED';
export const LOGOUT = 'user/LOGOUT';

export const postLogin = (email, password) => {
    return (dispatch) => {
        dispatch({ type: POST_LOGIN });
        const data = { email, password }
        return new API("POST", "/sessions", { data }).exec().then((response) => {
            dispatch(postLoginSuccess(response.data));
        }).catch((error) => {
            dispatch(postLoginFailed());
        });
    }
}

export const postLoginSuccess = (payload) => {
    return {
        type: POST_LOGIN_SUCCESS,
        payload
    }
}

export const postLoginFailed = (payload) => {
    return {
        type: POST_LOGIN_FAILED,
        payload
    }
}