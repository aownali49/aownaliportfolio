import React from "react";

function Projects() {
  return (
    <div>
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        PROJECTS
      </h1>
      <h3>
        <strong style={{ color: "white", marginLeft: "10px" }}>
          1. On-Time Bus ( Final Year Project) :
        </strong>
      </h3>
      <h6 style={{ color: "white", textAlign: "center" }}>
        <strong>
          Tools and Technology used to bulid this project are React,
          React-Native, Node_MCU, RFID Scanner and NFC Cards.
        </strong>
      </h6>
      <p
        style={{
          color: "white",
          marginLeft: "20px",
          marginRight: "20px",
          textJustify: "inter-word",
          textAlign: "justify",
        }}
      >
        On-Time Bus is a smart bus scheduling system that allows users to view,
        track and route their journey on given bus service. This system would
        also enable the business owners/managers to manage their running buses/
        routes/ drivers. They could also track the buses running on a particular
        route. The system utilizes the modern multi-Platform app development
        tool, React-Native. It also utilizes APIs from Google Maps. The
        On-Time-Bus system acts as an intermediary between the end-user
        (passenger) and the service provider (Business owner/Manager) and fills
        the gaps in communication using the latest technology, which is not
        necessarily human-to-human communication. This system also takes 3 out
        of the “guesswork” and ambiguity involved in the automobile industry,
        for example guessing how long it would take for a bus to arrive at a
        particular stop and pay for its ride through RFID and for the admin
        panel, an admin always sees users’ data, add routes, add buses using the
        web.
      </p>
      <div className="profile-options">
        <a style={{ marginLeft: "950px" }} href="doc.pdf" download={"doc.pdf"}>
          <button className="btn highlighted-btn"> Get Documentation </button>
        </a>
        <h3>
          <strong style={{ color: "white", marginLeft: "10px" }}>
            2. Student Database Management System :
          </strong>
        </h3>
        <h6 style={{ color: "white", textAlign: "center" }}>
          <strong>
            Tools and Technology used to bulid this project is C++.
          </strong>
        </h6>
        <p
          style={{
            color: "white",
            marginLeft: "20px",
            marginRight: "20px",
            textJustify: "inter-word",
            textAlign: "justify",
          }}
        >
          Student Database Management system is a class Project/Assignment which
          involves concepts of OOP, DataStructure, Array, Conditional Statements
          etc.
        </p>
        <br /> <br />
        <h3>
          <strong style={{ color: "white", marginLeft: "10px" }}>
            3. Employee's Management System :
          </strong>
        </h3>
        <h6 style={{ color: "white", textAlign: "center" }}>
          <strong>
            Tools and Technology used to bulid this project is C++.
          </strong>
        </h6>
        <p
          style={{
            color: "white",
            marginLeft: "20px",
            marginRight: "20px",
            textJustify: "inter-word",
            textAlign: "justify",
          }}
        >
          Employee's Management system is a class Project/Assignment which
          involves concepts of OOP, DataStructure, Array, Conditional Statements
          etc.
        </p>
        <br />
        <br />
        <h3>
          <strong style={{ color: "white", marginLeft: "10px" }}>
            4. Tic-Tac-Toe Game :
          </strong>
        </h3>
        <h6 style={{ color: "white", textAlign: "center" }}>
          <strong>
            Tools and Technology used to bulid this project is Python (IDLE).
          </strong>
        </h6>
        <p
          style={{
            color: "white",
            marginLeft: "20px",
            marginRight: "20px",
            textJustify: "inter-word",
            textAlign: "justify",
          }}
        >
          Tic-Tac-Toe Game is a Project which involves concepts of OOP,
          DataStructure, Array, Conditional Statements, and PyGame library.
        </p>
        <br /> <br />
        <h3>
          <strong style={{ color: "white", marginLeft: "10px" }}>
            5. Electronic Shop :
          </strong>
        </h3>
        <h6 style={{ color: "white", textAlign: "center" }}>
          <strong>
            Tools and Technology used to bulid this project is WordPress.
          </strong>
        </h6>
        <p
          style={{
            color: "white",
            marginLeft: "20px",
            marginRight: "20px",
            textJustify: "inter-word",
            textAlign: "justify",
          }}
        >
          Electronic Shop is a class Project/Assignment which involves concepts
          of mySQL, Wamp Server etc.
        </p>
        <br /> <br />
        <h3>
          <strong style={{ color: "white", marginLeft: "10px" }}>
            6. Utility Store Management System :
          </strong>
        </h3>
        <h6 style={{ color: "white", textAlign: "center" }}>
          <strong>
            Tools and Technology used to bulid this project is MS-Access and
            MySQL.
          </strong>
        </h6>
        <p
          style={{
            color: "white",
            marginLeft: "20px",
            marginRight: "20px",
            textJustify: "inter-word",
            textAlign: "justify",
          }}
        >
          Utility Store Management System is a project made twice once in
          Ms-Access and then in MySQL Database for Class Assignment.
        </p>
        <div className="profile-options">
          <a
            style={{ marginLeft: "950px" }}
            href="doc1.pdf"
            download={"doc1.pdf"}
          >
            <button className="btn highlighted-btn"> Get Documentation </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Projects;
