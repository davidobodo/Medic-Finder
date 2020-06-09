import { all, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actionTypes';

function* handleSaga() {
    //make a request
    console.log('hello')
}

function* watchHandleSaga() {
    //watch for an action to be dispatched then fire function to make request
    yield takeEvery(actionTypes.STORE_SEARCH, handleSaga)
}

export default function* () {
    yield all([watchHandleSaga()])
}