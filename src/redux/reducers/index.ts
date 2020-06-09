import * as actionTypes from '../actionTypes';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH:
            return {

            };
        default:
            return state
    }
}


export default reducer