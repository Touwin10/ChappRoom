import { authService } from "../services";
import { history } from './../helpers';

// Login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// Register
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
// Logout
export const LOGOUT = 'LOGOUT';

export const authActions = {
    login,
    register,
    logout
}

function login(username, password) {

    const request = (data) => { return { type: LOGIN_REQUEST, data } };
    const success = (data) => { return { type: LOGIN_SUCCESS, data } };
    const failure = (error) => { return { type: LOGIN_FAILURE, error } };

    return dispatch => {
        dispatch(request({ username }));

        authService.login(username, password)
            .then(data => {
                dispatch(success(data));
                history.push("/room");
            }, error => {
                dispatch(failure(error))
            })
    };
}


function register(username, password, email) {
    const request = (data) => { return { type: REGISTER_REQUEST, data } };
    const success = (data) => { return { type: REGISTER_SUCCESS, data } };
    const failure = (error) => { return { type: REGISTER_FAILURE, error } };

    return dispatch => {
        dispatch(request({ username }));

        authService.register(username, password, email)
            .then(data => {
                dispatch(success(data));
                history.push("/login");
            }, error => {
                dispatch(failure(error))
            })
    };
}

function logout() {
    authService.logout();
    return { type: LOGOUT };
}