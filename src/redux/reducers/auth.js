import constants from '../constants';
const iState = {
  login: {},
};
const auth = (state = iState, action) => {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
