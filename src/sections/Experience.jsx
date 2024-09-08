import React from "react";
import ExperienceCards from "../components/ExperienceCards";
import Header from "../components/Header";
import "../pages-css/Animations.css"
const hc1 = {
  date: "Summer 2023",
  title: "Software Engineer Intern",
  place: "hc1",
  description: [
    "Created a full stack React app for user management of 3Aware which allows users to edit, create, and delete users",
    "Utilized CAS endpoints, MUI library, and React Final Form and deployed to AWS using S3 and CloudFront",
    "Collaborated with team members at daily scrum meetings, contributing to effective planning and project communication",
  ],
  img: "null",
  skills: ["Javascript", "React", "APIs", "AWS"],
  takeaways:
    "My experience with full stack development has skyrocketed since this internship.",
  url: "https://www.hc1.com/",
};

const lifeomic = {
  date: "Summer 2022",
  title: "Computer Science Intern",
  place: "LifeOmic",
  description: [
    "Developed applets and translated code using React, JavaScript, Typescript, and Python for LifeOmic’s Life Apps, contributing to a platform with 5 million mobile app downloads and over 300K monthly active users",
    "Created applet with APIs for searching physicians in a designated geographic region and providing physician information, finally testing code with unit and Cypress testing to ensure quality and reliable results",
  ],
  skills: ["Javascript", "React", "Typescript", "Python", "Cypress"],
  takeaways: "I learned",
  url: "https://lifeomic.com/",
};

const dores = {
  date: "2021 - Current",
  title: "Graphic Designer ",
  place: "Dores' Design",
  description: [
    "Design posters, banners, fliers, logos, graphics, etc. for 200+ Vanderbilt Student Organizations",
    "Manage ongoing requests for graphic design projects throughout the year",
    "Conduct creative development meetings with Vanderbilt affiliated clients and administration",
  ],
  skills: ["Illustrator", "Photoshop", "Procreate"],
  url: "https://anchorlink.vanderbilt.edu/organization/doresdesign",
};

const abroad = {
  date: "Spring 2024",
  title: " CASA Student",
  place: "University of Melbourne",
  description:
    ["Enrolled for the semester at the University of Melbourne while participating in the CASA (Consortium for Advanced Studies Abroad) program focusing on indigenous studies and Melbourne history."],
  skills: [],
  url: "https://casa.education/melbourne",
};

export default function Experience() {
  return (
    <div className="experience">
      <Header section={"Experience"} />
      <div className="cards">
        <ExperienceCards job={dores} />
        <ExperienceCards job={abroad} />
        <ExperienceCards job={hc1} />
        <ExperienceCards job={lifeomic} />
      </div>
    </div>
  );
}
