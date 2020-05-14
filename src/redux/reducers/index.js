import error from './error';
import loading from './loading';
import user from './user';
import sessions from './sessions';
import {combineReducers} from 'redux';
import auth from './auth';
import therapist from './therapist';
import handouts from './handouts';
export default combineReducers({
  auth: auth,
  loading: loading,
  error: error,
  user: user,
  sessions: sessions,
  therapist: therapist,
  handouts: handouts,
});
