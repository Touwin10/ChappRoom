
import {
    // Update Profile
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_SUCCESS,
    // Get Profile
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    // Get User Info
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    // Get All Users
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE
} from './../actions';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        // Update profile
        case UPDATE_PROFILE_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case UPDATE_PROFILE_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case UPDATE_PROFILE_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        // Get Profile
        case GET_PROFILE_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case GET_PROFILE_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case GET_PROFILE_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        // Get User Info
        case GET_USER_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case GET_USER_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case GET_USER_FAILURE: {
            return {
                isFetching: false,
                didInvalidate: true,
                error: action.data
            }
        }
        // Get All User
        case GET_ALL_USER_REQUEST: {
            return {
                isFetching: true,
                didInvalidate: false,
                data: null
            };
        }
        case GET_ALL_USER_SUCCESS: {
            return {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            }
        }
        case GET_ALL_USER_FAILURE: {
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