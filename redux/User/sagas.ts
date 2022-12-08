import {
    put,
    takeLatest,
} from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as services from './services';
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

export function* userLogin({ payload }: any): Object {
  try {
    yield put(actions.setLoginLoader(true));
    const res = yield call(services.userLogin, payload);

    yield put(actions.userLoginSuccess(res));

    yield put(actions.setLoginLoader(false));
  } catch (e) {
    yield put(actions.setLoginLoader(false));
    console.error(e);
  }
}

export function* getUser(): object {
  try {
    const res = yield call(services.getUser);

    yield put(actions.getUserSuccess(res));
  } catch (e) {
    console.error(e);
  }
}

// export function* addUser({ payload }: any): object {
//   try {
//     const res = yield call(services.addUser, payload);
//     yield put(actions.addUserSuccess(res));
//   } catch (e) {
//     console.error(e);
//   }
// }

  
export default function* userSagas() {
  yield takeLatest(constants.USER_LOGIN, userLogin);
  yield takeLatest(constants.GET_USER, getUser);
//   yield takeLatest(constants.ADD_USER, addUser);
}