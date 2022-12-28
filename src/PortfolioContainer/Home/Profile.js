import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/muhammad-aown-ali-2825b21a4/">
                <i style={{ fontSize: "30px" }} className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/aownali49">
                <i style={{ fontSize: "30px" }} className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details--name">
            <span className="primary-text">
              {" "}
              Hello, I am
              <span className="highlighted-text"> Muhammad Aown Ali</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Website Development 🌐",
                    1000,
                    "Mobile Application Development 📱 ",
                    1000,
                    "Desktop Application Development 💻 ",
                    1000,
                    "Database Handling 📖",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building Applications with Front and Backend
                Operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="Transcript.jpeg" download={"Transcript.jpeg"}>
              <button className="btn highlighted-btn">
                {" "}
                Download Transcript{" "}
              </button>
            </a>
            <a href="cv.pdf" download={"cv.pdf"}>
              <button className="btn highlighted-btn"> Download Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
