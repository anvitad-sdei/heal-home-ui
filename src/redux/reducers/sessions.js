import constants from '../constants';
const iState = {
  sessionsData: [],
};
const user = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_REQUESTED_SESSION_SUCCESS:
      return {
        ...state,
        sessionsData: action.payload,
      };

    default:
      return state;
  }
};

export default user;
