import { all, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actionTypes';
import { db } from '../../fbConfig'

function* handleSaga(action) {
    const { payload } = action
    //make a request
    try {
        yield db.collection('searches').add(payload);

    } catch (err) {

    }

}

function* watchHandleSaga() {
    //watch for an action to be dispatched then fire function to make request
    yield takeEvery(actionTypes.STORE_SEARCH, handleSaga)
}

export default function* () {
    yield all([watchHandleSaga()])
}