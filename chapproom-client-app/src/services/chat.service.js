import axios from 'axios';
import { BASE_CHAT_API_URL } from '../constants';
import { authService } from './auth.service';
import { authHeader, isConnected, } from './../helpers';

export const chatService = {
    sendMessage,
    registerConversation,
    getConversation
}

function registerConversation(conversation) {
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

    return axios.post(`${BASE_CHAT_API_URL}/register`, conversation, config)
        .then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }

            return new Error("Data Not Update");
        })
}

function getConversation(username) {
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

    return axios.get(`${BASE_CHAT_API_URL}/${username}`, config).then(handleResponse)
        .then(data => {
            if (data) {
                return data;
            }
            return [];
        })
}


function sendMessage({ username, content, type }) {
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

    return axios.post(`${BASE_CHAT_API_URL}/send/${username}`,
        {}, config).then(handleResponse)
        .then(data => {

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