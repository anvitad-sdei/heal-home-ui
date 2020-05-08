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
      console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_JOURNALING_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    console.log(JSON.stringify(err.response));
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
      console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(
          constants.GET_JOURNALING_ID_SUCCESS,
          res.data.response,
        ),
      );
    }
  } catch (err) {
    console.log(JSON.stringify(err.response));
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
      console.log(res);
      dispatch(loadingHandler(false));
      dispatch(
        successResponseHandler(constants.SAVE_JOURNALING_SUCCESS, res.data),
      );
      successResHandler('Data save successfully', 'Journaling'); //check path name
    }
  } catch (err) {
    console.log(JSON.stringify(err.response));
    dispatch(loadingHandler(false));
    // dispatch(errorHandler(err));
    // alert('Something went wrong');
    errorResHandler(err);
  }
};

/*********************************************************************** */

export const getUserData = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios('https://jsonplaceholder.typicode.com/todos');
    if (res) {
      dispatch(successResponseHandler(constants.GET_SUCCESS, res.data)); //type check kr lena
      dispatch(loadingHandler(false));
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    errorResHandler(err);
    // dispatch(errorHandler(err));
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
