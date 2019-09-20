import { combineReducers } from 'redux';
import subjectReducer from './subject-reducer';

const combinedReducers = combineReducers({
    subjects: subjectReducer,
});

export default combinedReducers;
