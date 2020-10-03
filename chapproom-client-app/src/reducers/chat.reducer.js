
import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    // Register Conversation
    REGISTER_CONVERSATION_REQUEST,
    REGISTER_CONVERSATION_SUCCESS,
    REGISTER_CONVERSATION_FAILURE,
    // Get Conversation
    GET_CONVERSATION_REQUEST,
    GET_CONVERSATION_SUCCESS,
    GET_CONVERSATION_FAILURE
} from './../actions';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: null
}

export function chatReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case SEND_MESSAGE_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case SEND_MESSAGE_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        // Register Conversation
        case REGISTER_CONVERSATION_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case REGISTER_CONVERSATION_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case REGISTER_CONVERSATION_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        // GET Conversation
        case GET_CONVERSATION_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case GET_CONVERSATION_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case GET_CONVERSATION_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        default:
            return state;
    }
}