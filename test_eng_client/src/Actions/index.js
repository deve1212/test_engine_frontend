import {
        SUBJECT_TYPES
    } from './types';

import axios from 'axios';

export const getSubjects = () => {
	axios.get('localhost:3000/subjects/list').then((res)=>{
	return (dispatch) => {
        var action = {
            type: SUBJECT_TYPES,
            payload: res
        }
        dispatch(action);
    };
    	
	})
    
};
