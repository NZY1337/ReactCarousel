import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getUrlReducer from './getUrlReducer';
import getNotesReducer from './noteReducer';
// combine all reducers into one - ACTUAL REDUCER'S STATE 

/*
	state.user
	state.url
*/

// {userReducer, getUrlReducer} returns the PAYLOAD in ONE SINGLE {STATE} 

const rootReducer = combineReducers({
	user: userReducer,
	url: getUrlReducer,
	notes: getNotesReducer
});

export default rootReducer;
