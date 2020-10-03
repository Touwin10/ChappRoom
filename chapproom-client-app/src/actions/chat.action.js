
import { chatService } from './../services';
// Send Message
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
// Register Conversation
export const REGISTER_CONVERSATION_REQUEST = 'REGISTER_CONVERSATION_REQUEST';
export const REGISTER_CONVERSATION_SUCCESS = 'REGISTER_CONVERSATION_SUCCESS';
export const REGISTER_CONVERSATION_FAILURE = 'REGISTER_CONVERSATION_FAILURE';
// Get Conversation
export const GET_CONVERSATION_REQUEST = 'GET_CONVERSATION_REQUEST';
export const GET_CONVERSATION_SUCCESS = 'GET_CONVERSATION_SUCCESS';
export const GET_CONVERSATION_FAILURE = 'GET_CONVERSATION_FAILURE';


export const chatActions = {
    sendMessage,
    registerConversation,
    getConversation
}


function registerConversation(conversation) {
    const request = (data) => { return { type: REGISTER_CONVERSATION_REQUEST, data } };
    const success = (data) => { return { type: REGISTER_CONVERSATION_SUCCESS, data } };
    const failure = (error) => { return { type: REGISTER_CONVERSATION_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));
        return chatService.registerConversation(conversation)
            .then(data => {
                dispatch(success(data));
                return data;
            }, error => {
                dispatch(failure(error))
            })
    };

}

function getConversation(username) {
    const request = (data) => { return { type: GET_CONVERSATION_REQUEST, data } };
    const success = (data) => { return { type: GET_CONVERSATION_SUCCESS, data } };
    const failure = (error) => { return { type: GET_CONVERSATION_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));
        return chatService.getConversation(username)
            .then(data => {
                dispatch(success(data));
            }, error => {
                dispatch(failure(error))
            })
    };

}

function sendMessage({ username, content, type }) {
    const request = (data) => { return { type: SEND_MESSAGE_REQUEST, data } };
    const success = (data) => { return { type: SEND_MESSAGE_SUCCESS, data } };
    const failure = (error) => { return { type: SEND_MESSAGE_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));
        return chatService.updateProfile({ username, content, type })
            .then(data => {
                dispatch(success(data));
            }, error => {
                dispatch(failure(error))
            })
    };

}