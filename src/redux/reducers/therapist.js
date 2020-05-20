import constants from '../constants';
const iState = {
  allTherapists: [],
  therapistsReview: {drinkingLogReviewList: [], childList: []},
};
const therapist = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_THERAPISTS_SUCCESS:
      return {
        ...state,
        allTherapists: action.payload,
      };

    case constants.GET_ALL_THERAPISTS_REVIEW_SUCCESS:
      return {
        ...state,
        therapistsReview: action.payload,
      };

    default:
      return state;
  }
};

export default therapist;
