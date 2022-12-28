import React from "react";
import email from "./Images/gmail.png";
import phone from "./Images/phone.png";

function Contact() {
  return (
    <div>
      {" "}
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        CONTACT ME
      </h1>
      <h3 style={{ color: "white" }}> You can Reach Me at: </h3>
      <span style={{ color: "white" }}>
        <img
          style={{
            width: "50px",
            cursor: "pointer",
          }}
          src={phone}
          alt="PHONE"
        />
        <span
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          +92-322-9948363
        </span>{" "}
      </span>
      <br />
      <span
        style={{
          color: "white",
        }}
      >
        <img
          style={{
            width: "50px",
            cursor: "pointer",
          }}
          src={email}
          alt="GMAIL"
        />
        <span style={{ cursor: "pointer", textDecoration: "underline" }}>
          aown.ali49@gmail.com
        </span>{" "}
      </span>
    </div>
  );
}

export default Contact;
