import * as actionTypes from '../actionTypes';
import { setLocalStorage, clearLocalStorage } from '../../utils';

export const storeSearch = payload => {
    return {
        type: actionTypes.STORE_SEARCH,
        payload
    }
}

export const requestSignUpStart = payload => {
    return {
        type: actionTypes.REQUEST_SIGNUP_START,
        payload
    }
}

export const requestSignUpSuccess = payload => {
    setLocalStorage(payload)
    return {
        type: actionTypes.REQUEST_SIGNUP_SUCCESS,
        payload
    }
}

export const requestSignUpFail = payload => {
    return {
        type: actionTypes.REQUEST_SIGNUP_FAIL,
        payload
    }
}

export const requestLoginStart = payload => {
    return {
        type: actionTypes.REQUEST_LOGIN_START,
        payload
    }
}

export const requestLoginSuccess = payload => {
    setLocalStorage(payload)
    return {
        type: actionTypes.REQUEST_LOGIN_SUCCESS,
        payload
    }
}

export const requestLoginFail = payload => {
    return {
        type: actionTypes.REQUEST_LOGIN_FAIL,
        payload
    }
}

export const requestSignOut = () => {
    clearLocalStorage()
    return {
        type: actionTypes.REQUEST_SIGNOUT
    }
}



export const action = () => {
    return {
        type: 'ACTION'
    }
};