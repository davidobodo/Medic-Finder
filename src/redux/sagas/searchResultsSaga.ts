import { all, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actionTypes';
import { db } from '../../fbConfig'

function* handleSaga(action) {
    const { payload } = action
    try {
        yield db.collection('searches').add(payload);

    } catch (err) {

    }

}

function* watchHandleSaga() {
    yield takeEvery(actionTypes.STORE_SEARCH, handleSaga)
}

export default function* () {
    yield all([watchHandleSaga()])
}