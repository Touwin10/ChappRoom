import { BASE_AUTH_API_URL, BASE_USER_API_URL } from '../constants';
import axios from 'axios';
import { LocationHelper } from './../helpers';

export const authService = {
    login,
    register,
    logout
}

function login(username, password) {

    return axios.post(`${BASE_AUTH_API_URL}`,
        { username, password }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(handleResponse)
        .then(data => {
            if (data.accessToken) {
                LocationHelper.currentUser = data;
                return { user: data };
            }

            throw new Error("Token not found");
        })
}

function register(username, password, email) {

    return axios.post(`${BASE_USER_API_URL}/register`,
        { username, password, email }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }

            throw new Error("Token not found");
        })
}

function logout() {
    LocationHelper.removeUser();
    LocationHelper.removeUserInbox();
}

function handleResponse(response) {
    if (!response.ok) {
        if (response.status >= 400) {
            logout();
            const error = response.statusText;
            throw new Error(error);
        }
    }

    return response.data;
}