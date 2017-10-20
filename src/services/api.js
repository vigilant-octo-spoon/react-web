import axios from "axios";

export const BASE_URL = process.env.BASE_API_URL || "http://localhost:5000";

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
                "Authorization": `JWT ${token}`
            }
        });
        return this;
    }

    exec() {
        return axios.request(this._request_config);
    }
}