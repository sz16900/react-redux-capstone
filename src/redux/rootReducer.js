import { combineReducers } from 'redux';
import jobReducer from './job/jobReducer';

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;
