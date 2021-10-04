import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-8 footer__left">
            <img
              src="https://i.ibb.co/k2nQ9Ws/Rain-Learn-logos-black.png"
              alt="asa"
              style={{ width: "80px", height: "auto", scale: 2 }}
            />
            <p>Copyright &copy; 2021 RainLearn, Inc</p>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 footer__right">
            <br />
            <ul>
              <li>
                <a href="home">Terms</a>
              </li>
              <li>
                <a href="home">Privacy Policy and Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
