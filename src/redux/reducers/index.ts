import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import searchesReducer from './searchesReducer';

export default combineReducers({
	auth: authReducer,
	searches: searchesReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
});
