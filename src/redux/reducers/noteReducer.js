
import { LOAD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actionTypes';


export default function (state = {}, action) {
    switch (action.type) {
        case LOAD_NOTE:
            return action.payload
        default:
            return state;
    }
}

