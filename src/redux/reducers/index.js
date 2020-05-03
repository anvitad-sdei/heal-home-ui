import error from './error';
import loading from './loading';
import {combineReducers} from 'redux';
import auth from './auth';
export default combineReducers({auth: auth, loading: loading, error: error});
