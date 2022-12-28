import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile";
import "./Home.css";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../ContactMe/Contact";
import Foot from "../FootLast/foot";
import Experience from "../Experience/Experience";
import Certificate from "../Certification/Certificate";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
      <AboutMe />
      <Footer />
      <Experience />
      <Footer />
      <Skills />
      <Footer />
      <Education />
      <Footer />
      <Projects />
      <Footer />
      <Certificate />
      <Footer />
      <Contact />
      <Footer />
      <Foot />
    </div>
  );
}
