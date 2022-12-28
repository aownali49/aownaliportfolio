import React from "react";
import css from "./Images/css.png";
import html from "./Images/html.png";
import python from "./Images/python.jpg";
import access from "./Images/access.png";
import word from "./Images/word.png";
import react from "./Images/react.png";
import reactnative from "./Images/reactnative.png";
import bootstrap from "./Images/bootstrap.png";
import php from "./Images/php.png";
import pp from "./Images/pp.png";
import c from "./Images/c.png";
import firebase from "./Images/firebase.png";
import js from "./Images/js.png";
import mysql from "./Images/mysql.png";
import "./Skills.css";
import wordpress from "./Images/wordpress.jpg";
import excel from "./Images/excel.png";
function Skills() {
  return (
    <>
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        <strong>SKILLS</strong>
      </h1>

      <ul>
        <h3 style={{ color: "white" }}>My Skills are as follows :</h3>
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "300px",
            cursor: "pointer",
          }}
          src={html}
          alt="HTML"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "400px",
            cursor: "pointer",
          }}
          src={css}
          alt="CSS"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "520px",
            cursor: "pointer",
          }}
          src={bootstrap}
          alt="BOOTSTRAP"
        />
        ;
        <br />
        <br />
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "350px",
            cursor: "pointer",
          }}
          src={js}
          alt="JAVASCRIPT"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "430px",
            cursor: "pointer",
          }}
          src={react}
          alt="REACT JS"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "445px",
            cursor: "pointer",
          }}
          src={reactnative}
          alt="REACT NATIVE"
        />
        ;
        <br />
        <br />
        {/* <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "410px",
            cursor: "pointer",
          }}
          src={wordpress}
          alt="WORDPRESS"
        />
        ; */}
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "400px",
            cursor: "pointer",
          }}
          src={php}
          alt="PHP"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "410px",
            cursor: "pointer",
          }}
          src={firebase}
          alt="FIREBASE"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "340px",
            cursor: "pointer",
          }}
          src={mysql}
          alt="MYSQL"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "440px",
            cursor: "pointer",
          }}
          src={c}
          alt="C++"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "440px",
            cursor: "pointer",
          }}
          src={python}
          alt="PYTHON"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "380px",
            cursor: "pointer",
          }}
          src={access}
          alt="MICROSOFT ACCESS"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "410px",
            cursor: "pointer",
          }}
          src={excel}
          alt="excel"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "415px",
            cursor: "pointer",
          }}
          src={word}
          alt="MICROSOFT WORD"
        />
        ;
        <img
          className="profile"
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "415px",
            cursor: "pointer",
          }}
          src={pp}
          alt="MICROSOFT POWER POINT"
        />
        ;
      </ul>
    </>
  );
}

export default Skills;
