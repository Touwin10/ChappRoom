import { history } from './../helpers';
import { userService } from "../services";

// Update profile
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

// Get profile
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

// Get User Info
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// Get All User 
export const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
export const GET_ALL_USER_FAILURE = 'GET_ALL_USER_FAILURE';


export const userActions = {
    updateProfile,
    getProfile,
    getUserByUsername,
    getAllUsers
}


function updateProfile({ status, about }) {
    const request = (data) => { return { type: UPDATE_PROFILE_REQUEST, data } };
    const success = (data) => { return { type: UPDATE_PROFILE_SUCCESS, data } };
    const failure = (error) => { return { type: UPDATE_PROFILE_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));

        userService.updateProfile({ status, about })
            .then(data => {
                dispatch(success(data));
                history.reload();
            }, error => {
                dispatch(failure(error))
            })
    };
}

function getProfile() {
    const request = (data) => { return { type: GET_PROFILE_REQUEST, data } };
    const success = (data) => { return { type: GET_PROFILE_SUCCESS, data } };
    const failure = (error) => { return { type: GET_PROFILE_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));

        userService.getProfile()
            .then(data => {
                dispatch(success(data));
            }, error => {
                dispatch(failure(error))
            })
    };
}

function getUserByUsername(username) {
    const request = (data) => { return { type: GET_USER_REQUEST, data } };
    const success = (data) => { return { type: GET_USER_SUCCESS, data } };
    const failure = (error) => { return { type: GET_USER_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));

        userService.getUserByUsername(username)
            .then(data => {
                dispatch(success(data));
            }, error => {
                dispatch(failure(error))
            })
    };
}

function getAllUsers() {
    const request = (data) => { return { type: GET_ALL_USER_REQUEST, data } };
    const success = (data) => { return { type: GET_ALL_USER_SUCCESS, data } };
    const failure = (error) => { return { type: GET_ALL_USER_FAILURE, error } };

    return dispatch => {
        dispatch(request({}));

        userService.getAllUsers()
            .then(data => {
                dispatch(success(data));
            }, error => {
                dispatch(failure(error))
            })
    };
}