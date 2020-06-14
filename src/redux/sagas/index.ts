import { all } from "redux-saga/effects";
import signUpSaga from "./signupSaga";
import loginSaga from "./loginSaga";
import searchesSaga from './searchesSaga';

export default function* rootSaga() {
    yield all([
        signUpSaga(),
        loginSaga(),
        searchesSaga()
    ]);
}