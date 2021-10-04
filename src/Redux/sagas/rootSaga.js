import { all } from "redux-saga/effects";
import {
  watchGetUserDetailSaga,
  watchSignInSaga,
  watchSignUpSaga,
} from "./authSaga";
import {
  watchGetCourseByCategorySaga,
  watchGetCourseCategoryListSaga,
  watchGetCourseDetailSaga,
  watchGetCourseListSaga,
} from "./courseSaga";

export function* rootSaga() {
  yield all([
    watchGetCourseListSaga(),
    watchGetCourseByCategorySaga(),
    watchGetCourseCategoryListSaga(),
    watchGetCourseDetailSaga(),
    watchGetUserDetailSaga(),
    watchSignInSaga(),
    watchSignUpSaga(),
  ]);
}
