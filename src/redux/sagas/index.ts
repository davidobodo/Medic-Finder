import { all } from "redux-saga/effects";
import signUpSaga from "./signupSaga";
import loginSaga from "./loginSaga";
import searchResultsSaga from './searchResultsSaga';

export default function* rootSaga() {
    yield all([
        signUpSaga(),
        loginSaga(),
        searchResultsSaga()
    ]);
}