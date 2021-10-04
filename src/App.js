import React, { useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import { useDispatch } from "react-redux";
import { actionTypes } from "./Redux/constants/actionTypes";
import { BrowserRouter, Switch } from "react-router-dom";
import StudentTemplate from "./Templates/StudentTemplate";
import Home from "./Views/Home/Home";
import AuthTemplate from "./Templates/AuthTemplate";
import SignIn from "./Views/SignIn/SignIn";
import SignUp from "./Views/SignUp/SignUp";
import { sagaTypes } from "./Redux/constants/sagaTypes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actionTypes.TURN_ON_LOADING,
    });
    dispatch({
      type: sagaTypes.GET_USER_DETAIL_SAGA,
    });
    setTimeout(() => {
      dispatch({ type: actionTypes.TURN_OFF_LOADING });
    }, 1000);
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Loading />
        <Switch>
          <AuthTemplate path="/signin" Component={SignIn} />
          <AuthTemplate path="/signup" Component={SignUp} />
          <StudentTemplate path="/" Component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
