import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga";
import loadingReducer from "./reducers/loadingReducer";
import courseReducer from "./reducers/courseReducer";
import authReducer from "./reducers/authReducer";

const middleWareSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  loadingReducer,
  courseReducer,
  authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);

middleWareSaga.run(rootSaga);

export default store;
