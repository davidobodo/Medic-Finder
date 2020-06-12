import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const initialState = {
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH:
            return state;
        case actionTypes.SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export default combineReducers({
    reducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})