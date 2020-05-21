import constants from '../constants';
const iState = {
  getDrinkingData: {},
  saveDrinkingData: {},
};
const drinking = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_DRINKING_LOG_SUCCESS:
      return {
        ...state,
        getDrinkingData: action.payload,
      };
    case constants.SAVE_DRINKING_LOG_SUCCESS:
      return {
        ...state,
        saveDrinkingData: action.payload,
      };
    default:
      return state;
  }
};

export default drinking;
