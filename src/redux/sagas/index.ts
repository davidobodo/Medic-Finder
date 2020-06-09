import { all } from "redux-saga/effects";

function* handleSaga() {
    //make a request
}

function* watchHandleSaga() {
    //watch for an action to be dispatched then fire function to make request
}

export default function* () {
    yield all([watchHandleSaga()])
}