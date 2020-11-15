import { GET_USER, GET_PAGE } from "../actionTypes";

// reducers return what action we want to display in UX (This is the Redux state);
export default function (state = {}, action) {
	switch (action.type) {
		case GET_USER:
			return action.payload;
		default:
			return state;
	}
}
