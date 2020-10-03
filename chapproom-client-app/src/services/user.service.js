import { BASE_USER_API_URL } from '../constants';
import axios from 'axios';
import { authService } from './auth.service';
import { authHeader, isConnected, getConnectedUsername } from './../helpers';

export const userService = {
    updateProfile,
    getProfile,
    getUserByUsername,
    getAllUsers
}

function updateProfile({ status, about }) {

    const profile = {
        status,
        about
    }

    if (!isConnected()) {
        authService.logout();
        return Promise.reject("No credentials")
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        }
    }

    return axios.put(`${BASE_USER_API_URL}/profile/${getConnectedUsername()}`,
        profile, config).then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }
            throw new Error("User not update");
        })
}


function getProfile() {

    if (!isConnected()) {
        authService.logout();
        return Promise.reject("No credentials")
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        }
    }

    return axios.get(`${BASE_USER_API_URL}/profile/${getConnectedUsername()}`, config).then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }
            throw new Error("User not found");
        })
}

function getUserByUsername(username) {

    if (!isConnected()) {
        authService.logout();
        return Promise.reject("No credentials")
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        }
    }

    return axios.get(`${BASE_USER_API_URL}/${username}`, config).then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }
            throw new Error("User not found");
        })
}

function getAllUsers() {

    if (!isConnected()) {
        authService.logout();
        return Promise.reject("No credentials")
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        }
    }

    return axios.get(`${BASE_USER_API_URL}`, config).then(handleResponse)
        .then(data => {
            if (data) {
                return Promise.resolve(data);
            }
            throw new Error("User not found");
        })
}


function handleResponse(response) {
    if (!response.ok) {
        if (response.status >= 400) {
            const error = response.statusText;
            throw new Error(error);
        }
    }

    return response.data;
}