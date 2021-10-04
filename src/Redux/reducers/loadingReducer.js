import { actionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.TURN_ON_LOADING:
      state.isLoading = true;
      return { ...state };

    case actionTypes.TURN_OFF_LOADING:
      state.isLoading = false;
      return { ...state };

    default:
      return state;
  }
};

export default loadingReducer;
