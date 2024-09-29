import React from "react";
import ProjectCards from "../components/cards/ProjectCards";
import carshare from "../media/carshare/carshare.png";
import mushroom from "../media/mushroom/mushroomCover.png";
import sarratt from "../media/sarratt/sarrattCover.png";

import "../pages-css/Projects.css";
import v1Big from "../media/versions/v1Cover.png"
import v2Big from "../media/versions/v2Cover.png"

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-grid">
        <ProjectCards
          title={"CarShare"}
          src={carshare}
          path={"/carshare"}
        />
        <ProjectCards
          title={"Mushroom Mayhem"}
          src={mushroom}
          path={"/mushroom-mayhem"}
        />
         <ProjectCards
          title={"Sarratt Art Studios"}
          src={sarratt}
          path={"/sarratt-art-studios"}
        />
        <ProjectCards
          title={"V1 Portfolio"}
          src={v1Big}
          path={"/v1-portfolio"}
        />
        <ProjectCards
          title={"V2 Portfolio"}
          src={v2Big}
          path={"/v2-portfolio"}
        />
      </div>
    </div>
  );
}
