import constants from '../constants';
const iState = {
  allTherapists: [],
};
const therapist = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_THERAPISTS_SUCCESS:
      return {
        ...state,
        allTherapists: action.payload,
      };

    default:
      return state;
  }
};

export default therapist;
