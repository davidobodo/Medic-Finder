import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH:
            return {

            };
        default:
            return state
    }
}


export default combineReducers({
    reducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})