import React from "react";

function Experience() {
  return (
    <>
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        Experience
      </h1>
      <h4
        className="p-2 mx-12 text-4xl animate-bounce lg:mx-64"
        style={{ color: "white" }}
      >
        <strong>
          KMAL [knowledge, Management, Accountability & Learning] Internee:
        </strong>
      </h4>
      <h5
        className="p-2 mx-12 text-4xl animate-bounce lg:mx-64"
        style={{ color: "white" }}
      >
        <strong>MEAL Department, Islamic Relief Pakistan, Islamabad.</strong>
        <p style={{ marginLeft: "1000px" }}>01/11/2022 - Present</p>
      </h5>
      <p
        className="text-xl text-center text-gray-500 lg:mx-64"
        style={{
          color: "white",
          marginLeft: "-400px",
          //marginRight: "10px",
        }}
      >
        <strong>Key Roles: </strong>
        <br></br>
        Data Analyst, Database Administrator, Frontend Developement.
        <br />
        <br />
        <strong>Tools Used: </strong>
        <br />
        HTML, CSS & JavaScript, PHP (BASIC CRUD Operations), MySQL Database,
        Microsoft Word, Microsoft Excel.
        <br />
        <br />
        <strong>Implementing Work: </strong>
        <br />
        STRIDE (ERP System), PRISM (Program Real Time Information System For
        Management)
      </p>
    </>
  );
}

export default Experience;
