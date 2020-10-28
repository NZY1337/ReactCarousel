import { auth, googleProvider } from "../../firebase";
import { GET_USER } from "../actionTypes";

/* 
	actionTypes send what we want to store in redux (send information to REDUX state Store)
*/

export function googleLogin() {
	return (dispatch) => auth.signInWithPopup(googleProvider);
}

export function logOut() {
	return (dispatch) => auth.signOut();
}

export function getUser() {
	return (dispatch) => {
		auth.onAuthStateChanged((user) => {
			dispatch({
				type: GET_USER,
				payload: user,
			});
		});
	};
}
