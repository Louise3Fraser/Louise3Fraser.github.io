import React from "react";
import "../pages-css/About.css";
import AboutMain from "../sections/AboutMain";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="main-about">
          <AboutMain />
        </div>
      </div>
    </div>
  );
}
