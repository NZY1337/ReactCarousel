import { LOAD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actionTypes';
import { database } from '../../firebase';

// create note
export const createNote = (note) => dispatch => {
    database.push(note);
}

// get note
export function getNote() {
    return (dispatch) => {
        database.on(
            "value",
            (snapshot) => {
                dispatch({
                    type: LOAD_NOTE,
                    payload: snapshot.val()
                });
            }
        );
    };
}
