import NavigationService from '../services/navigation';
import constants from '../constants';
import axios from 'axios';
import {apiUrls} from '../api/constants';
import {Alert} from 'react-native';

const errorHandling = error => {
  if (error.response) {
    return error.response.data.message || 'Response not found';
  } else if (error.request) {
    return 'Request Failed';
  } else {
    return 'Try after sometime';
  }
};

const errorResHandler = err => {
  Alert.alert(errorHandling(err));
};

const successResHandler = (msg, route, params) => {
  Alert.alert(
    'Success',
    msg,
    [
      {
        text: 'OK',
        onPress: () => NavigationService.navigate(route, params),
      },
    ],
    {cancelable: false},
  );
};
/*********************LOGIN API ************************* */
export const login = data => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios.post(`${apiUrls.BASE_URL}/access/login`, {...data});
    if (res) {
      dispatch(loadingHandler(false));
      dispatch(successResponseHandler(constants.LOGIN_SUCCESS, res.data));
      dispatch(() => navigateToRoute('App', {data: res.data}));
      // successResHandler('Sachin', 'App');
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET JOURNALING API********************** */
export const journaling = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/journaling`);
    if (res) {
      // console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_JOURNALING_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    //console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET JOURNALING BY ID API********************** */
export const getJournalingById = id => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/journaling/${id}`);
    if (res) {
      //console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_JOURNALING_ID_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    //console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/**********************************POST JOURNALING API ***********************/
export const journalingSave = data => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios.post(`${apiUrls.BASE_URL}/journaling`, {...data});
    if (res) {
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(constants.SAVE_JOURNALING_SUCCESS, res.data),
      );
      successResHandler('Data save successfully', 'Journaling');
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/**********************************POST REQUEST SESSION API ***********************/
export const requestSession = data => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios.post(`${apiUrls.BASE_URL}/requestsession`, {...data});
    if (res) {
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(constants.REQUEST_SESSION_SUCCESS, res.data),
      );
      successResHandler('Data save successfully', 'TherapistsList');
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/**********************************UPDATE REQUEST SESSION API ***********************/
export const updateRequestSession = updateData => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios.post(`${apiUrls.BASE_URL}/requestsession`, {
      ...updateData,
    });
    if (res) {
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.UPDATE_REQUEST_SESSION_SUCCESS,
          res.data,
        ),
      );
      successResHandler('Data update successfully', 'TherapistsList');
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};
/*************************GET ALL MY REQUESTED SESSION********************** */
export const allRequestedSession = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/requestsession`);
    if (res) {
      //console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_ALL_REQUESTED_SESSION_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    // console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET REQUESTED SESSION BY ID API********************** */
export const getRequestedSessionById = id => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/requestsession/${id}`);
    if (res) {
      // console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_REQUESTED_SESSION_BY_ID_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    //console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET UPCOMING SESSION  API********************** */
export const getUpcomingSession = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/question/upcomingsessions`);
    if (res) {
      //console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.UPCOMING_SESSION_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    // console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET ALL THERAPISTS SUCCESS ********************** */
export const getAllTherapists = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/question/mytherapists`);
    if (res) {
      //console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_ALL_THERAPISTS_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    // console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};
/*************************GET ALL HANDOUTS SUCCESS ********************** */
export const getAllHandouts = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.BASE_URL}/question/handouts`);
    if (res) {
      //console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_ALL_HANDOUTS_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    // console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************CLEAR SESSION BY ID8*************************** */

export const clearSessionById = () => dispatch => {
  dispatch({type: constants.CLEAR_SESSION_BY_ID});
};

/********************************************************* */
const navigateToRoute = (routeName, params) => {
  /*
    routeName="String",
    params={key:value}  //object
    */
  return NavigationService.navigate(routeName, params);
};

const loadingHandler = status => {
  return {type: constants.IS_LOADING, payload: status};
};

const errorHandler = status => {
  return {type: constants.ERROR, payload: status};
};

const successResponseHandler = (type, payload) => {
  return {type: type, payload: payload};
};
