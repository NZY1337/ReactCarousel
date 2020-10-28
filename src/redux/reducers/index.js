import { combineReducers } from "redux";
import userReducer from "./userReducer";

// combine all reducers into one
const rootReducer = combineReducers({
	user: userReducer,
});

export default rootReducer;
