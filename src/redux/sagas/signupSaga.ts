import {all, takeEvery, put} from "redux-saga/effects";
import {db} from "../../fbConfig";
import * as actionTypes from "../actionTypes";
import * as actions from "../actions/authActions";

function* handleSignUpSaga(action) {
	const {email, password, firstName, lastName} = action.payload;
	const SIGNUP_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_apiKey}`;
	const bodyPayload = {
		email,
		password,
		returnSecureToken: true,
	};
	try {
		const res = yield fetch(SIGNUP_ENDPOINT, {
			body: JSON.stringify(bodyPayload),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (res.ok) {
			const data = yield res.json();
			db.collection("users").doc(data.localId).set({
				firstName: firstName,
				lastName: lastName,
			});
			yield put(actions.requestSignUpSuccess(data));
		} else {
			const err = yield res.json();
			yield put(actions.requestSignUpFail(err));
		}
	} catch (err) {
		yield put(actions.requestSignUpFail(err));
	}
}

function* watchHandleSignUpSaga() {
	yield takeEvery(actionTypes.REQUEST_SIGNUP_START, handleSignUpSaga);
}

export default function* () {
	yield all([watchHandleSignUpSaga()]);
}
