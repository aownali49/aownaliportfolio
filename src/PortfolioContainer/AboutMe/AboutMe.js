//import {useState, useEffect,useRef} from 'react'
//import Aboutme from './components/Aboutme'
const AboutMe = (props) => {
  return (
    <>
      <h1
        id="about"
        style={{ color: "white", textDecoration: "underline" }}
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        ABOUT ME
      </h1>
      <h1
        className="p-2 mx-12 text-4xl animate-bounce lg:mx-64"
        style={{ color: "white" }}
      >
        <strong>Hello,</strong>
      </h1>
      <p
        className="text-xl text-center text-gray-500 lg:mx-64"
        style={{
          color: "white",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        I am <strong>Muhammad Aown Ali</strong>. I have completed my Bachelors
        in Computer Science from International Islamic University, Islamabad in
        2022 securing 3.56 CGPA out of 4 CGPA. i have expertise in Front and
        Backend operations like Development, Testing and i am looking forward to
        To enhance my knowledge and capabilities by working in a dynamic
        organization that prides itself in giving substantial responsibility to
        new client. To obtain a job whereby I can acquire knowledge and
        professional skills, while working in a team environment so that I can
        sharpen my skills, thereby continuously growing and contributing to the
        main objective for my career growth in future professional technology
        based and competitive environment.
      </p>
    </>
  );
};

export default AboutMe;
