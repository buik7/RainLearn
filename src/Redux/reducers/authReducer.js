import { actionTypes } from "../constants/actionTypes";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_USER:
      state.user = payload;
      return { ...state };

    case actionTypes.LOG_OUT:
      state.user = null;
      return { ...state };

    default:
      return state;
  }
};

export default authReducer;
