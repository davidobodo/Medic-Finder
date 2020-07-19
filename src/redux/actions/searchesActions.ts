import * as actionTypes from "../actionTypes";

export const storeSearchRequest = (payload) => {
	return {
		type: actionTypes.STORE_SEARCH_REQUEST,
		payload,
	};
};

export const getSearchResults = (payload) => {
	return {
		type: actionTypes.GET_SEARCH_RESULTS,
		payload,
	};
};

export const getSearchResultsFail = (payload) => {
	return {
		type: actionTypes.GET_SEARCH_RESULTS_FAIL,
		payload,
	};
};

export const setSearchResults = (payload) => {
	return {
		type: actionTypes.SET_SEARCH_RESULTS,
		payload: payload.data,
	};
};
