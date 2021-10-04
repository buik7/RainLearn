import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  getUserDetailService,
  signInService,
  signUpService,
} from "../../Services/authService";
import {
  localStorageKeys,
  STATUS_CODE,
} from "../../Util/constants/systemConstant";
import { openNotification } from "../../Util/Notification/Notification";
import { actionTypes } from "../constants/actionTypes";
import { sagaTypes } from "../constants/sagaTypes";

function* signInSaga(action) {
  try {
    const { data, status } = yield call(signInService(action.payload));
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_USER,
        payload: data,
      });
      localStorage.setItem(localStorageKeys.ACCESS_TOKEN, data.accessToken);
      action.goToHome();
    }
  } catch (error) {
    console.log(error.response.data);
    openNotification(
      "error",
      "Login failed.",
      "Your username or password is incorrect. Please try again."
    );
  }
}

function* signUpSaga(action) {
  try {
    const { status } = yield call(signUpService(action.payload));
    if (status === STATUS_CODE.SUCCESS) {
      openNotification(
        "success",
        "SUCCESS!",
        "Your account has been successfully created."
      );
      action.goToSignIn();
    }
  } catch (error) {
    console.log(error.response.data);
    openNotification(
      "error",
      "Failed to create account!",
      "Please check your details or try again in a few minutes"
    );
  }
}

function* getUserDetailSaga() {
  try {
    const { data, status } = yield call(getUserDetailService);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_USER,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* watchSignInSaga() {
  yield takeLatest(sagaTypes.SIGN_IN_SAGA, signInSaga);
}

export function* watchSignUpSaga() {
  yield takeLatest(sagaTypes.SIGN_UP_SAGA, signUpSaga);
}

export function* watchGetUserDetailSaga() {
  yield takeLatest(sagaTypes.GET_USER_DETAIL_SAGA, getUserDetailSaga);
}
