import { Button, Input } from "antd";
import React, { useCallback } from "react";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import { sagaTypes } from "../../Redux/constants/sagaTypes";

const validationSchema = yup.object().shape({
  taiKhoan: yup.string().required("Please enter your username"),
  matKhau: yup.string().required("Please enter your password"),
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  const { values, touched, errors, handleChange, handleBlur } = formik;

  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);

  const goToHome = useCallback(() => {
    props.history.push("/");
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTouched();
    if (formik.isValid) {
      dispatch({
        type: sagaTypes.SIGN_IN_SAGA,
        payload: formik.values,
        goToHome,
      });
    }
  };

  return (
    <div className="container">
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3>Log into RainLearn</h3>
        <Input
          name="taiKhoan"
          size="large"
          placeholder="Username"
          prefix={<UserOutlined className="mr-3" />}
          className="mt-3 w-50"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.taiKhoan}
        />
        <div className="text-danger mt-1 text-left w-50">
          {touched.taiKhoan ? errors.taiKhoan : ""}
        </div>
        <Input.Password
          name="matKhau"
          size="large"
          placeholder="Password"
          type="password"
          prefix={<LockOutlined className="mr-3" />}
          className="mt-3 w-50"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.matKhau}
          autoComplete="on"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <div className="text-danger mt-1 text-left w-50">
          {touched.matKhau ? errors.matKhau : ""}
        </div>
        <p className="text-right mt-1 w-50 forgot__password">
          Forgot password?
        </p>
        <Button
          type="primary"
          className="mt-1 w-50 btnSignIn"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <p className="text-left mt-5 w-50">
          Don't have an account? &nbsp;
          <NavLink to="/signup">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
