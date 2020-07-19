import * as actionTypes from "../actionTypes";

const initialState = {
	isLoading: false,
	signUpError: null,
	loginError: null,
	userId: null,
	idToken: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REQUEST_SIGNUP_START:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.REQUEST_SIGNUP_SUCCESS:
			return {
				...state,
				isLoading: false,
				userId: action.payload.localId,
				idToken: action.payload.idToken,
				signUperror: null,
			};
		case actionTypes.REQUEST_SIGNUP_FAIL:
			return {
				...state,
				isLoading: false,
				userId: null,
				idToken: null,
				signUpError: action.payload,
			};
		case actionTypes.REQUEST_LOGIN_START:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.REQUEST_LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				userId: action.payload.localId,
				idToken: action.payload.idToken,
				loginError: null,
			};
		case actionTypes.REQUEST_LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
				userId: null,
				idToken: null,
				loginError: action.payload,
			};
		case actionTypes.REQUEST_SIGNOUT:
			return {
				...state,
				userId: null,
				idToken: null,
				loginError: null,
				isLoading: null,
			};
		default:
			return state;
	}
};

export default authReducer;
