import NavigationService from '../services/navigation';
import constants from '../constants';
import axios from 'axios';
import {apiUrls} from '../api/constants';
import {Alert} from 'react-native';
import {storeData} from '../utility/index';
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

const navigateToScreen =( route, params) =>{
  NavigationService.navigate(route, params)
}

/*********************LOGIN API ************************* */
export const login = data => async dispatch => {
  try {
    console.log('Actions',' login method data'+JSON.stringify(data) );
    dispatch(loadingHandler(true));
    let res = await axios.post(`${apiUrls.LOCAL_BASE_URL}/access/login`, {...data});
    
    if (res) {
      console.log('res=======', res.data.response);
      await storeData('userId', res.data.response.sessionId);
      dispatch(loadingHandler(false));
      dispatch(successResponseHandler(constants.LOGIN_SUCCESS, res.data));
      dispatch(() => navigateToRoute('App', {data: res.data}));
      // successResHandler('Sachin', 'App');
    }
  } catch (err) {
    console.log('Actions',' login method error' );
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************POST VIDEO CALL CREATE ROOM ********************** */
export const postVideoCreateRoom = data => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    dispatch(
      successResponseHandler(constants.SAVE_CREATE_ROOM_SUCCESS, []),
    );
    let res = await axios.post(`${apiUrls.LOCAL_BASE_URL}/twilio/createroom`, {...data});
    if (res) {
      console.log("postVideoCreateRoom RESPONSE=",JSON.stringify(res.data));

      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(constants.SAVE_CREATE_ROOM_SUCCESS, res.data),
      );
    
      navigateToScreen( 'VideoSession');
    }
  } catch (err) {

    console.log("postVideoCreateRoom ERROR=",JSON.stringify(err));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
};

/*************************GET UPCOMING SESSION  API********************** */
export const getUpcomingSession = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios(`${apiUrls.LOCAL_BASE_URL}/question/upcomingsessions`);
    if (res) {
      console.log("getUpcomingSession RESPONSE=",res.data.response);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.UPCOMING_SESSION_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    console.log("getUpcomingSession error",JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    errorResHandler(err);
  }
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
