import React, { useEffect } from "react";
import "./Home.css";
import "animate.css";
import { useSelector, useDispatch } from "react-redux";
import { sagaTypes } from "../../Redux/constants/sagaTypes";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: sagaTypes.GET_COURSE_LIST_SAGA,
    });
  }, [dispatch]);

  const { courseList } = useSelector((state) => state.courseReducer);

  return (
    <div id="home">
      <div className="home__started">
        <img
          src="https://blog.ted.com/wp-content/uploads/sites/2/2014/11/learning_a_language.png"
          alt="Learn"
        />
        <div className="home__started__content">
          <p className="animate__animated animate__backInDown">
            Are you ready to learn?
          </p>
          <button
            className="animate__animated animate__fadeIn"
            onClick={() => {
              window.scrollTo(0, 750);
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div id="home__courses" className="home__courses container mt-5">
        <h3 className="font-weight-bold">Trending courses</h3>
        <div className="row">
          {courseList.slice(9, 17).map((course) => {
            return (
              <div
                className="col-12 col-md-6 col-xl-3 mb-3"
                key={course.maKhoaHoc}
              >
                <div className="card text-left">
                  <div className="card-body">
                    <img src={course.hinhAnh} alt="Course" />
                    <div className="course__content">
                      <h4 className="card-title">{course.tenKhoaHoc}</h4>
                      <p className="card-text">
                        {course.moTa.substring(0, 100)}...
                      </p>
                      <p>
                        <i className="far fa-play-circle"></i> {course.luotXem}{" "}
                        &nbsp; &nbsp;
                        <i className="far fa-user"></i> {course.soLuongHocVien}
                      </p>
                      <button>Enroll</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "right" }}>
          <button className="mt-3 btn__view__more">View more courses</button>
        </div>
      </div>

      <section id="student" className="mt-4">
        <div className="container">
          <div className="row student__header">
            <h4>What our students have to say</h4>
          </div>
          <div className="row student__top studentList">
            <div className="col-xl-4 col-12 student__item">
              <div className="student__content">
                <div className="student__name">
                  <p>
                    <span>K</span> Khanh Le
                  </p>
                </div>
                <p>
                  RainLearn is a life saver. I don't have the time or money for
                  a college education. My goal is to become a freelance web
                  developer, and thanks to RainLearn, I'm really close.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-12 student__item">
              <div className="student__content">
                <div className="student__name">
                  <p>
                    <span>P</span> Phuong Nguyen
                  </p>
                </div>
                <p>
                  My children and I LOVE RainLearn! The courses are fantastic
                  and the instructors are so fun and knowledgeable. I only wish
                  we found it sooner.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-12 student__item">
              <div className="student__content">
                <div className="student__name">
                  <p>
                    <span>D</span> Dipesh
                  </p>
                </div>
                <p>
                  I believe in lifelong learning and RainLearn is a great place
                  to learn from experts. I've learned a lot and recommend it to
                  all my friends.
                </p>
              </div>
            </div>
          </div>
          <div className="row student__bottom">
            <div className="col-12 col-xl-6 student__bottom__item student__bottom__left">
              <h2>Become an instructor</h2>
              <p className="mt-3">
                Top instructors from around the world teach millions of students
                on RainLearn. We provide the tools and skills to teach what you
                love.
              </p>
              <button type="button">Start teaching today</button>
            </div>
            <div className="col-12 col-xl-6 student__bottom__item student__bottom__right">
              <h2>RainLearn for Business</h2>
              <p className="mt-3">
                Get unlimited access to 3,000+ of RainLearn’s top courses for
                your team.
              </p>
              <br />
              <button type="button">Get RainLearn for business</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
