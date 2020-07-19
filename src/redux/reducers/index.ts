import {combineReducers} from "redux";

import authReducer from "./authReducer";
import searchesReducer from "./searchesReducer";

export default combineReducers({
	auth: authReducer,
	searches: searchesReducer,
});
