import constants from '../constants';
const iState = {
  err: {code: null, message: null},
};
const error = (state = iState, action) => {
  switch (action.type) {
    case constants.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default error;
