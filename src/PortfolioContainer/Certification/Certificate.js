import React from "react";
import pic from "./Certificate.JPG";
function Certificate() {
  return (
    <div>
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        Certification
      </h1>
      <h4
        className="p-2 mx-12 text-4xl animate-bounce lg:mx-64"
        style={{ color: "white" }}
      >
        <strong>
          IR Cyber Security Awareness - Islamic Relief New Hire Training
        </strong>
      </h4>
      <br />
      <img
        className="profile"
        style={{
          borderRadius: "20px",
          padding: "10px",
          width: "800px",
          marginRight: "1500px",
          cursor: "pointer",
        }}
        src={pic}
        alt="pic"
      />
    </div>
  );
}

export default Certificate;
