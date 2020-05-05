import NavigationService from '../services/navigation';
import constants from '../constants';
import axios from 'axios';
import BASE_URL from '../api/Config';
export const login = () => async dispatch => {
  try {
    dispatch(loadingHandler(true));
    let res = await axios.post(`{BASE_URL}/access/login`, {...data});
    if (res) {
      dispatch(loadingHandler(false));
      dispatch(successResponseHandler(constants.LOGIN_SUCCESS, res.data));
      dispatch(() => navigateToRoute('App', {data: res.data}));
    }
  } catch (err) {
    dispatch(loadingHandler(false));
    dispatch(errorHandler(err));
    alert('error');
  }
};

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
    dispatch(errorHandler(err));
  }
};
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
