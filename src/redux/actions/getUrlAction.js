import {  GET_PAGE } from "../actionTypes";

export const detectUserPage = (url) => (dispatch) => {
	dispatch({
	  type: GET_PAGE,
	  payload:url
	});
};