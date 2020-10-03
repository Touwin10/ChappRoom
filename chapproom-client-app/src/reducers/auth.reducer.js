
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from './../actions';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: null
}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case LOGIN_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: null
            }
        }
        case LOGIN_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.type
            }
        }
        case REGISTER_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                user: null
            };
        }
        case REGISTER_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                user: null
            }
        }
        case REGISTER_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.type
            }
        }
        case LOGOUT: {
            return {
                isFetching: false,
                user: null
            }
        }
        default:
            return state;
    }
}