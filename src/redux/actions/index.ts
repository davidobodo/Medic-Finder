import * as actionTypes from '../actionTypes';

export const storeSearch = payload => {
    return {
        type: actionTypes.STORE_SEARCH,
        payload
    }
}

export const signUpStart = payload => {
    return {
        type: actionTypes.SIGNUP_START,
        payload
    }
}

export const signUpSuccess = payload => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload
    }
}

export const signUpFail = payload => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        payload
    }
}

export const action = () => {
    return {
        type: 'ACTION'
    }
};