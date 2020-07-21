import constants from '../constants';
const iState = {
  isLoading: false,
};
const loading = (state = iState, action) => {
  switch (action.type) {
    case constants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default loading;
