import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_API_URL || "http://localhost:5000";

export class API {
    constructor(method, endpoint, config) {
        this._token = null;
        this._request_config = {
            method,
            url: `${BASE_URL}${endpoint}`,
            ...config,
        };
        return this;
    }

    withAuth(token) {
        this._request_config = Object.assign(this._request_config, {
            headers: {
                "Token": token,
            }
        });
        return this;
    }

    exec() {
        return axios.request(this._request_config);
    }
}