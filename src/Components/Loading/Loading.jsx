import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.css";
import { useSelector } from "react-redux";

// Logo: https://i.ibb.co/dWB25tv/Rain-Learn-logos.jpg

const Loading = () => {
  const isLoading = useSelector((state) => state.loadingReducer.isLoading);
  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <PacmanLoader color="RGB(245, 212, 176)" loading={true} size={25} />

          <img
            className="logo_loading"
            src="https://i.ibb.co/c2SSsWD/Rain-Learn-logos-transparent.png"
            alt="Logo"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Loading;
