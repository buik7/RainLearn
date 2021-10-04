import { put, call, takeLatest } from "redux-saga/effects";
import {
  getCourseByCategoryService,
  getCourseCategoryListService,
  getCourseDetailService,
  getCourseListService,
} from "../../Services/courseService";
import { STATUS_CODE } from "../../Util/constants/systemConstant";
import { actionTypes } from "../constants/actionTypes";
import { sagaTypes } from "../constants/sagaTypes";

function* getCourseListSaga() {
  try {
    const { data, status } = yield call(getCourseListService);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_COURSE_LIST,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

function* getCourseCategoryListSaga() {
  try {
    const { data, status } = yield call(getCourseCategoryListService);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_COURSE_CATEGORY_LIST,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

function* getCourseByCategorySaga(action) {
  try {
    const { data, status } = yield call(
      getCourseByCategoryService(action.payload)
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_COURSE_LIST,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

function* getCourseDetailSaga(action) {
  try {
    const { data, status } = yield call(getCourseDetailService(action.payload));
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: actionTypes.SAVE_COURSE_DETAIL,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* watchGetCourseListSaga() {
  yield takeLatest(sagaTypes.GET_COURSE_LIST_SAGA, getCourseListSaga);
}

export function* watchGetCourseCategoryListSaga() {
  yield takeLatest(
    sagaTypes.GET_COURSE_CATEGORY_LIST_SAGA,
    getCourseCategoryListSaga
  );
}

export function* watchGetCourseByCategorySaga() {
  yield takeLatest(
    sagaTypes.GET_COURSE_BY_CATEGORY_SAGA,
    getCourseByCategorySaga
  );
}

export function* watchGetCourseDetailSaga() {
  yield takeLatest(sagaTypes.GET_COURSE_DETAIL_SAGA, getCourseDetailSaga);
}
