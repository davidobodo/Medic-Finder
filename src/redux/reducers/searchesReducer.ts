import * as actionTypes from '../actionTypes';

const initialState = {
	isLoading: false,
	data: null,
	error: false
};

const searchesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_SEARCH_REQUEST:
			return {
				...state
			};
		case actionTypes.GET_SEARCH_RESULTS:
			return {
				...state,
				isLoading: true
			};
		case actionTypes.GET_SEARCH_RESULTS_FAIL:
			return {
				...state,
				isLoading: false,
				error: true
			};
		case actionTypes.SET_SEARCH_RESULTS:
			return {
				...state,
				isLoading: false,
				error: false,
				data: action.payload
			};
		default:
			return state;
	}
};

export default searchesReducer;
