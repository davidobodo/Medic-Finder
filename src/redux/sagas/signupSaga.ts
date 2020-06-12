import { all, takeEvery } from "redux-saga/effects";
import { db } from '../../fbConfig'
import * as actionTypes from '../actionTypes';

function* handleSignUpSaga(action) {
    const { payload } = action;
    console.log(payload)
    try {

    } catch (err) {

    }

}

function* watchHandleSignUpSaga() {
    //watch for an action to be dispatched then fire function to make request
    yield takeEvery(actionTypes.SIGNUP_START, handleSignUpSaga)
}

export default function* () {
    yield all([watchHandleSignUpSaga()])
}