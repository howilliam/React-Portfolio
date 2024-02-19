import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3 ImperialBackground">
        <div className="container-fluid py-5 jumboCopy">
          <div
            className="card"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          >
            <h1 className="display-5 fw-bold">William Ho</h1>
            <p className="col-md-12 fs-4">Welcome to my portfolio</p>
          </div>
        </div>
      </div>

      <div className="container-fluid customContent">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-6 col-sm-12" id="About">
            <h3 className="contentHeading">About Me</h3>
            <p>
              I am a Master's in Aeronautical Engineering graduate at Imperial
              College London, where I have consistently achieved high academic
              performance, earning an Upper Second-class, 2:1. My final year
              project involved data-driven estimation and control of a highly
              non-linear chaotic flow using MATLAB. I also undertook projects in
              parallel computing, simulating the 2D Shallow water equation in
              C++ using OpenMP and BLAS, and exploring the double pendulum
              problem using object-oriented programming in C++. During my
              academic journey, I conducted an in-depth analysis of the Android
              app market, comparing over ten thousand apps in Google Play across
              different categories. This involved data cleaning, exploring app
              categories, and conducting sentiment analysis of user reviews
              using Python.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12" id="Skills">
            <h3 className="contentHeading">Skills</h3>
            <p>
              {" "}
              I am looking to learn and develop relevant skills in front-end web
              development from this boot camp. Outside of the boot camp, I am
              currently developing my programming skills and knowledge in Data
              Science. I have a keen interest in data-driven projects such as
              self-driving cars and algorithmic trading.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
