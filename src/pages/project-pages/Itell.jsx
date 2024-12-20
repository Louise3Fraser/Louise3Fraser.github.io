import React, { useEffect } from "react";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import Overview from "../../components/Overview";
import itell from "../../media/itell/itell.png";
import Description from "../../components/organization/Description";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import proposal from "../../docs/designProposal.pdf";
import notion from "../../media/itell/notion.png";
import feedback from "../../media/itell/feedback.png";
import change from "../../media/itell/change.png";
import large from "../../media/itell/itell-large.png";
import team from "../../media/itell/team.png";
import problem from "../../media/itell/problems.png";

export default function Itell() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div className="project">
      <ProjectHeading
        subTitle={"Product Design, Branding, UX"}
        img={itell}
        type={"img"}
        yes={true}
      />

      <div className="project-header">
        <Overview
          title={"iTELL"}
          subtitle={
            <p className="header-subtitle">
              Leveraging AI for textbook education
            </p>
          }
          tasks={["Product Design", "Branding", "UX"]}
          dates={"Sep. 2024 – Present"}
          roles={["UX/UI Designer"]}
          client={"LEAR Lab"}
          overview={[
            <p className="body-main">
              This semester, I'm taking a UX/UI design class called "Web Design
              and User Experience." We have been placed into teams, assigned
              roles, and paired with real-world companies for the semester.
            </p>,
            <p className="body-main">
              Our client is the LEAR Lab, and we are helping improve their
              application, iTELL ("Intelligent Texts for Enhanced Lifelong
              Learning"). iTELL is an AI-powered interactive textbook framework
              designed to enhance learning through real-time feedback and user
              engagement.
            </p>,
          ]}
        />
        <img
          loading="lazy"
          alt="img"
          src={large}
          style={{
            width: `calc(100% + 30vw)`,
            marginRight: "-15vw",
            marginLeft: "-15vw",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        />
      </div>

      <div className="project-main">
        <Description
          section={"OVERVIEW"}
          title={"Who created iTELL?"}
          desc={[
            <p className="body-main">
              The LEAR Lab at Vanderbilt University is responsible for
              maintaining and updating their platform. Their research on how
              students acquire knowledge and develop competencies is the
              backbone of iTELL’s learning model. Additionally, their role is
              critical in ensuring the platform remains functional, bug-free,
              and adaptable to user needs.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={team}
              style={{
                width: `calc(100% + 38vw)`,
                marginRight: "-19vw",
                marginLeft: "-19vw",
                marginTop: "100px",
                marginBottom: "100px",
              }}
            />,
          ]}
        />

        <Description
          section={"PROBLEM"}
          title={"Issues with the current platform"}
          desc={[
            <p className="body-main">
              The LEAR Lab at Vanderbilt University is responsible for
              maintaining and updating their platform. Their research on how
              students acquire knowledge and develop competencies is the
              backbone of iTELL’s learning model. Additionally, their role is
              critical in ensuring the platform remains functional, bug-free,
              and adaptable to user needs.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={problem}
              style={{
                width: `calc(100% + 38vw)`,
                marginRight: "-19vw",
                marginLeft: "-19vw",
                marginTop: "100px",
                marginBottom: "100px",
              }}
            />,
          ]}
        />

    <Description
          title={"Time for a refresh!"}
          desc={[
            <p className="body-main">
              The current platform has areas for improvement, especially
               considering the main portion of the application: the textbook interface.
            </p>,
            <p className="body-main">
            The current platform has areas for improvement, especially
             considering the main portion of the application: the textbook interface.
          </p>,
          ]}
        />

        <Description
          title={"Design Proposal"}
          desc={[
            `The first task of this project was to create a thorough
            design proposal document highlighting research, insights, 
            and proposed changes.
            `,
          ]}
          images={[]}
        />
        <p className="job">Included sections:</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>Executive summary</li>
          <li>Stakeholder analysis</li>
          <li>Target audience & user goals</li>
          <li>Business needs & customer goals</li>
          <li>Map user and customer goals to key functional requirements</li>
          <li>Benchmarking competition</li>
          <li>Interview questions/results</li>
          <li>Use case analysis</li>
          <li>Persona development</li>
          <li>Task analyses</li>
          <li>Defining usability metrics</li>
          <li>Interface design proposal</li>
          <li>Color scheme and logo update</li>
          <li>Minor changes</li>
          <li>Website navigation and structure</li>
          <li>Card sorting</li>
          <li>Content generation, notification system</li>
          <li>Functional and technical requirements</li>
          <li>etc.</li>
        </ul>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
          }}
        >
          <p className="body-main">Download full proposal here!</p>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(proposal)}
          >
            <ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />
          </motion.button>
        </div>
        <Description
          title={"Proposed Changes"}
          desc={[
            `A summarized list of proposed changes are outlined below. See the design proposal for more details.`,
          ]}
          images={[]}
        />
      </div>
      <img
        loading="lazy"
        alt="img"
        src={change}
        className="nav-image"
        style={{ maxWidth: "100%" }}
      />
      <div className="project-main">
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            Textbook interface refresh: line width, contrast, sizing and
            structure
          </li>
          <li>
            User dashboard refresh: leaderboard addition, box layout, contrast,
            consistency
          </li>
          <li>Color scheme and logo update</li>
          <li>Various minor changes</li>
        </ul>
        <div style={{ height: "30px" }} />
      </div>
      <hr style={{ width: "12vw" }} />

      <div className="project-main">
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          ORGANIZATION
        </h4>
        <Description
          title={"Progress-tracking"}
          desc={[
            `Organizing and tracking tasks has been necessary throughout the project.   
            We have primarily been utlilzing Notion to schedule weekly meetings, assign
            tasks, and record overall progress. `,
          ]}
          images={[notion]}
        />
        <Description
          title={"Feedback Forms"}
          desc={[
            `Following our completion of the first design proposal, we created feedback forms
            in order to gather feedback from the LEAR lab. More detailed explanations of 
            the changes are included in the design proposal.`,
          ]}
          images={[]}
        />
        <p className="job">Project to be completed December 10th!</p>
      </div>

      <Footer />
    </div>
  );
}
