import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const StudentTemplate = (props) => {
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <div>
              <Component {...propsRoute} />
            </div>
            <Footer />
          </>
        );
      }}
    />
  );
};

export default StudentTemplate;
