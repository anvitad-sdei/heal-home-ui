import constants from '../constants';
const iState = {
  sessionsData: [],
  requestSession: {},
  sessionById: {},
  upcomingSession: [],
};
const sessions = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_REQUESTED_SESSION_SUCCESS:
      return {
        ...state,
        sessionsData: action.payload,
      };

    case constants.REQUEST_SESSION_SUCCESS:
      return {
        ...state,
        requestSession: action.payload,
      };
    case constants.GET_REQUESTED_SESSION_BY_ID_SUCCESS:
      return {
        ...state,
        sessionById: action.payload,
      };
    case constants.UPCOMING_SESSION_SUCCESS:
      return {
        ...state,
        upcomingSession: action.payload,
      };

    case constants.CLEAR_SESSION_BY_ID:
      return {...state, sessionById: {}};
    default:
      return state;
  }
};

export default sessions;
