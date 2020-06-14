import { all, takeEvery, put } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions/authActions';

function* handleLoginSaga(action) {
	const { email, password } = action.payload;
	const SIGNIN_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env
		.REACT_APP_apiKey}`;

	const bodyPayload = {
		email,
		password,
		returnSecureToken: true
	};
	try {
		const res = yield fetch(SIGNIN_ENDPOINT, {
			body: JSON.stringify(bodyPayload),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		if (res.ok) {
			const data = yield res.json();
			yield put(actions.requestLoginSuccess(data));
		} else {
			const err = yield res.json();
			yield put(actions.requestLoginFail(err));
		}
	} catch (err) {
		yield put(actions.requestLoginFail(err));
	}
}

function* watchHandleLoginSaga() {
	yield takeEvery(actionTypes.REQUEST_LOGIN_START, handleLoginSaga);
}

export default function*() {
	yield all([ watchHandleLoginSaga() ]);
}
