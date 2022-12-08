import * as ActionTypes from './constants';

interface Payload {
    payload: Object
}

export const userLogin = (payload: Payload) => ({
  type: ActionTypes.USER_LOGIN,
  payload,
});

export const userLoginSuccess = (payload: Payload) => ({
  type: ActionTypes.USER_LOGIN_SUCCESS,
  payload,
});

export const setLoginLoader = (payload: Boolean) => ({
  type: ActionTypes.SET_LOGIN_LOADER,
  payload,
});

export const getUser = (payload: Payload) => ({
  type: ActionTypes.GET_USER,
  payload,
});

export const getUserSuccess = (payload: Payload) => ({
  type: ActionTypes.GET_USER_SUCCESS,
  payload,
});