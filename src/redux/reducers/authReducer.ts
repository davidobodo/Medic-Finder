import * as actionTypes from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    userId: null,
    idToken: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userId: action.payload.localId,
                idToken: action.payload.idToken,
                error: null
            }
        case actionTypes.REQUEST_SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                userId: null,
                idToken: null,
                error: action.payload
            }
        case actionTypes.REQUEST_LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userId: action.payload.localId,
                idToken: action.payload.idToken,
                error: null
            }
        case actionTypes.REQUEST_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                userId: null,
                idToken: null,
                error: action.payload
            }
        case actionTypes.REQUEST_SIGNOUT:
            return {
                ...state,
                userId: null,
                idToken: null,
                error: null,
                isLoading: null
            }
        default:
            return state
    }
}

export default authReducer