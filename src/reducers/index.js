import { combineReducers } from 'redux';

import auth from './auth';
import charts from './charts';
import medication from './medication';
import notes from './notes';
import tracking from './tracking';
import patients from './patients';

export default combineReducers({
    auth,
    charts,
    medication,
    notes,
    tracking,
    patients
})