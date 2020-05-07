import constants from '../constants';
const iState = {
  journaling: {},
  saveJournalingRes: {},
};
const user = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_JOURNALING_SUCCESS:
      return {
        ...state,
        journaling: action.payload,
      };
    case constants.SAVE_JOURNALING_SUCCESS:
      return {
        ...state,
        saveJournalingRes: action.payload,
      };
    default:
      return state;
  }
};

export default user;
