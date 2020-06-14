import * as actionTypes from '../actionTypes';

const initialState = {

}

const searchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH_REQUEST:
            return state;
        case actionTypes.GET_SEARCH_RESULTS:
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}

export default searchesReducer