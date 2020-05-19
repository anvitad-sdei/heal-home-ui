import constants from '../constants';
const iState = {
  assessmentData: [],
};
const assessment = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessmentData: action.payload,
      };

    default:
      return state;
  }
};

export default assessment;
