import { all, takeEvery, put } from 'redux-saga/effects';
import { db } from '../../fbConfig';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions/searchesActions';

function* handleAddSearchSaga(action) {
	const { payload } = action;
	try {
		yield db.collection('searches').add(payload);
	} catch (err) {
		console.log(err);
	}
}

function* handleGetSearchSaga(action) {
	const userId = action.payload;
	const graphqlQuery = {
		query: `{getSearchResults(id: "${userId}"){searchFacility searchPlace searchRadius searchAt searchId searchCoordinates{ latitude longitude } }}`
	};
	const GRAPHQL_ENDPOINT = 'https://us-central1-enye-cohort4-obodo.cloudfunctions.net/api/graphql';
	const localhost = 'http://localhost:4000/';
	try {
		const res = yield fetch(localhost, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(graphqlQuery)
		});

		if (res.ok) {
			const data = yield res.json();
			yield put(actions.setSearchResults(data));
		} else {
			const err = yield res.json();
			yield put(actions.getSearchResultsFail(err));
		}
	} catch (err) {
		yield put(actions.getSearchResultsFail(err));
	}
}

function* watchHandleAddSearchSaga() {
	yield takeEvery(actionTypes.STORE_SEARCH_REQUEST, handleAddSearchSaga);
}

function* watchHandleGetSearchSaga() {
	yield takeEvery(actionTypes.GET_SEARCH_RESULTS, handleGetSearchSaga);
}

export default function*() {
	yield all([ watchHandleAddSearchSaga(), watchHandleGetSearchSaga() ]);
}
