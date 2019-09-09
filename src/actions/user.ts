import * as types from './actionTypes';
import { login } from '../src/utils/api';

export const loading = bool => ({
  type: types.LOGIN_IS_LOADING,
  isLoading: bool,
});
export const error = errorMes => ({
  type: types.LOGIN_ERROR,
  error: errorMes,
});

export const saveUserInfo = userInfo => ({
  type: types.SAVE_USER_INFO,
  userInfo,
});



export const LogOut = () => ({
  type: types.LOGOUT,
});

export const loginUser = () => dispatch =>
   login()
    .then(resp => {
      if (resp.status === 200) {
        dispatch(loading(false));
        dispatch(saveUserInfo(resp.data));
        return true;
      }
      return resp.status;
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || 'ERROR'));
      return false;
    })