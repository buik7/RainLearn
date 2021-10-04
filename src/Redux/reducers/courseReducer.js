import { actionTypes } from "../constants/actionTypes";

const initialState = {
  courseList: [],
  courseDetail: {},
  courseCategoryList: [],
};

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_COURSE_LIST:
      state.courseList = payload;
      return { ...state };

    case actionTypes.SAVE_COURSE_CATEGORY_LIST:
      state.courseCategoryList = payload;
      return { ...state };

    case actionTypes.SAVE_COURSE_DETAIL:
      state.courseDetail = payload;
      return { ...state };

    default:
      return state;
  }
};

export default courseReducer;
