import {
    SUBJECT_TYPES,
} from '../Actions/types';
const INITIAL_STATE = {
   
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBJECT_TYPES:
            return action.payload
        default:
            return state;
    }
};
