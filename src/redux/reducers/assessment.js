import constants from '../constants';
const iState = {
  assessmentData: [],
  assessmentById: {qlist: []},
  saveAssessmentData: {},
};
const assessment = (state = iState, action) => {
  switch (action.type) {
    case constants.GET_ALL_ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessmentData: action.payload,
      };

    case constants.GET_ASSESSMENT_BY_ID_SUCCESS:
      return {
        ...state,
        assessmentById: action.payload,
      };
    case constants.SAVE_ASSESSMENT_SUCCESS:
      return {
        ...state,
        saveAssessmentData: action.payload,
      };
    default:
      return state;
  }
};

export default assessment;
