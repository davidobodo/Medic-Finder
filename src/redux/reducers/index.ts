import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const initialState = {
    isLoading: false,
    error: null,
    userId: null,
    idToken: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH:
            return state;
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
        default:
            return state
    }
}


export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})