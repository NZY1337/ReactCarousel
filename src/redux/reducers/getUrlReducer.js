import {  GET_PAGE } from "../actionTypes";

// reducers return what action we want to SEND TO REDUCER'S STATE based some functionality
export default function (state = {}, action) {
	switch (action.type) {
		case GET_PAGE:
            // return {...state, location:action.payload};	
            return action.payload;	
		default:
			return state;
	}
}
   