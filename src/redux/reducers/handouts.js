import constants from '../constants';
const iState = {
  handoutData: [],
};
const handouts = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_HANDOUTS_SUCCESS:
      return {
        ...state,
        handoutData: action.payload,
      };

    default:
      return state;
  }
};

export default handouts;
