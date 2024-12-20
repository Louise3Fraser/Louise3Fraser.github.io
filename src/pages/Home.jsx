import React from "react";
import Button from "../components/Button";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";

function Home() {
  return (
    <div className="home">
      <div className="headers">
        <p className="header-largest">
          Hi there, I'm Louise Fraser.
          {/* <i
            style={{ height: "40px" }}
            class="em em-sparkles"
            aria-role="presentation"
            aria-label="SPARKLES"
          ></i> */}
        </p>
        <p className="header-largest">
          Upcoming Vandy grad,
        </p>
        <p className="header-largest">aspiring product designer.{" "}
        </p>
        {/* <Button content={"Fun Fact"}/> */}
      </div>
      <Projects />
      {/* <Upcoming/> */}
    </div>
  );
}

export default Home;
