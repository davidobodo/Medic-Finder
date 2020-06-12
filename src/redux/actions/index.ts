import * as actionTypes from '../actionTypes';

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

export const action = () => {
    return {
        type: 'ACTION'
    }
};