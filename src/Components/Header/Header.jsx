import React from "react";
import "./Header.css";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { localStorageKeys } from "../../Util/constants/systemConstant";
import { actionTypes } from "../../Redux/constants/actionTypes";
import { Select } from "antd";
const { Option } = Select;

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseReducer.courseList);
  const user = useSelector((state) => state.authReducer.user);

  const goToSignIn = () => {
    history.push("/signin");
  };

  const goToSignUp = () => {
    history.push("/signup");
  };

  const logOut = () => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    dispatch({
      type: actionTypes.LOG_OUT,
    });
  };

  return (
    <div>
      <div id="header">
        <div className="header__logo">
          <img
            src="https://i.ibb.co/bs6nq03/Rain-Learn-logos-white.png"
            alt="Rain-Learn-logos-white"
            border="0"
          />
        </div>
        <div className="header__search">
          {/* <input type="text" placeholder="Search for courses, categories,..." />
           */}
          <Select
            showSearch
            className="header__search_select"
            placeholder="Search for courses, categories,..."
            optionFilterProp="children"
            onChange={(value) => {}}
          >
            {courseList.map((course) => {
              return (
                <Option value={course.maKhoaHoc}>{course.tenKhoaHoc}</Option>
              );
            })}
          </Select>
        </div>
        <div>Courses</div>
        <div>Teach on RainLearn</div>

        <div className="header__auth">
          {user ? (
            <div className="header__user">
              <div
                className="drop-down-toggle"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <i className="far fa-user mr-1" /> {user.hoTen}
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" id="linking" to="/profile">
                  My account
                </NavLink>
                <p
                  className="dropdown-item"
                  href="#"
                  onClick={logOut}
                  style={{ marginBottom: 0, cursor: "pointer" }}
                >
                  Log out
                </p>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={goToSignIn}>Sign in</button>
              <button onClick={goToSignUp} className="ml-3">
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
