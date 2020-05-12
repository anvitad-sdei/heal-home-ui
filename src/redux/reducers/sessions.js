import constants from '../constants';
const iState = {
  sessionsData: [],
  requestSession: {},
  sessionById: {},
};
const user = (state = iState, action) => {
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
    default:
      return state;
  }
};

export default user;
