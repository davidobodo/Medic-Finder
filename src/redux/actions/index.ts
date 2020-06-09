import * as actionTypes from '../actionTypes';

export const storeSearch = (payload) => {
    return {
        type: actionTypes.STORE_SEARCH,
        payload
    }
}

export const action = () => {
    return {
        type: 'ACTION'
    }
};