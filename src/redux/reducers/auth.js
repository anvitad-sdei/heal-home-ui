import constants from '../constants';
const iState = {
  login: {},
  signup: {},
};
const auth = (state = iState, action) => {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
      };
    case constants.SIGNUPs_SUCCESS:
      return {
        ...state,
        signup: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
