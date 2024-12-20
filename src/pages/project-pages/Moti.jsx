import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import Overview from "../../components/Overview";
import Description from "../../components/organization/Description";
import motiCoverEmpty from "../../media/moti/cover2.png";
import motiAll from "../../media/moti/mockup-final.png";
import table from "../../media/moti/Table.png";
import brand from "../../media/moti/brand.png";
import low from "../../media/moti/sketches.png";
import map from "../../media/moti/map.png";
import flow from "../../media/moti/flow.png";
import wireframe from "../../media/moti/wireframe.png";
import zoom from "../../media/moti/zoom.png";
import overviewImg from "../../media/moti/overview.png";
import three from "../../media/moti/three.png";
import sarah from "../../media/moti/sarah.png";
// import streak from "../../media/moti/streak.mp4";
// import voice from "../../media/moti/voice.mp4";
import apps from "../../media/moti/apps.png";
// import meditation from "../../media/moti/meditation.mp4";
import goals from "../../media/moti/goals.png";
import interviews from "../../media/moti/interviews.png";
import eye from "../../media/icons/eye.png";
import thisi from "../../media/icons/this.png";
import graph from "../../media/icons/graph.png";
import Problem from "../../components/Problem";
import Persona from "../../components/Persona";
import VideoOverlay from "../../components/organization/VideoOverlay";
import Side from "../../components/organization/Side";
import Callout from "../../components/organization/Callout";
import Subsection from "../../components/organization/Subsection";

export default function Moti() {
  const themeQuery = useTheme();
  const screenSizeLg = useMediaQuery(themeQuery.breakpoints.up("sm"));

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="project">
      <ProjectHeading
        subTitle={"Product Design, Branding, UX"}
        img={motiCoverEmpty}
        type={"img"}
        yes={true}
      />
      <div className="project-header">
        <Overview
          title={"Moti"}
          subtitle={
            <p className="header-subtitle">
              Foster <span style={{ textDecoration: "underline" }}>moti</span>
              vation for consistent meditation practice
            </p>
          }
          tasks={["Product Design", "Branding", "UX"]}
          dates={"Aug. 2024"}
          roles={["UX/UI Designer"]}
          project={"Personal Project"}
          overview={[
            <p className="body-main">
              Moti is a meditation app designed to cultivate mindfulness and
              motivation through guided meditations and progress tracking. I
              completed this project over the course of a month and left with
              lots of takeaways, but overall a better understanding of the UX
              process as a whole
            </p>,
          ]}
        />
        <img
          loading="lazy"
          alt="img"
          src={three}
          style={{
            width: `calc(100% + 30vw)`,
            marginRight: "-15vw",
            marginLeft: "-15vw",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        />
      </div>

      {/* overview---------------------------- */}
      <div className="project-main">
        <Description
          section={"PROBLEM"}
          // icon={thisi}
          title={
            "People often find it hard to commit to consistent meditation practice"
          }
          desc={[
            <p className="body-main">
              Amid the mental health crisis our world faces, meditation has
              repeatedly proven to be an invaluable tool for taking steps in the
              right direction.
            </p>,
            <p className="body-main">
              However, many individuals struggle to maintain consistency with
              daily meditation. Factors such as busy schedules, lacking
              motivation, and not seeing results right away can hinder a
              person’s ability to develop their own mindfulness routine.
            </p>,
          ]}
        />
        <div style={{ height: "50px" }} />{" "}
        <Description
          title={"Habit forming tactics"}
          // icon={graph}
          section={"GOALS"}
          desc={[
            <p className="body-main">
              The primary goal of Moti is to create an engaging and simple app
              that encourages individuals to develop mindfulness habits. By
              providing motivation tools, such as daily reminders and
              emotion/streak tracking, Moti aims to make daily meditation a
              reachable goal.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={goals}
              style={{
                maxWidth: "70%",
                borderRadius: "10px",
                marginTop: "30px",
                marginBottom: "30px",
                alignSelf: "center",
              }}
            />,
          ]}
        />
        <Description
          title={"For the inexperienced meditator"}
          desc={[
            <p className="body-main">
              We all start somewhere. Moti aims to make meditation accessible
              and enjoyable for beginners who may feel unsure about how to start
              or worry about "doing it right." The goal is to guide
              inexperienced meditators on a clear and supportive path, helping
              them build confidence and establish a lasting meditation habit.
            </p>,
            <p className="body-main">
              Through a simple and intuitive design, the gentle reminders and
              progress tracking encourage users at every stage.
            </p>,
          ]}
        />
        <div style={{ height: "50px" }} />
        <Description
          title={"Understanding user motivations"}
          section={"RESEARCH"}
          desc={[
            <Subsection content={"Interviews"} />,
            <p className="body-main">
              To gain insights into the needs and preferences of potential
              users, interviews were conducted with friends, family, and peers.
              I interviewed 13 people in total, ages ranging from 16-52 years
              old, and including a range of professions such as student, doctor,
              nurse, and accountant.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={zoom}
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                width: "100%",
                // width: `calc(100% + 200px)`,
                // marginRight: "-100px",
                // marginLeft: "-100px",
              }}
            />,
            <p className="body-main">
              Here are some highlights from these discussions:
            </p>,
            <div
              style={{
                display: "flex",
                flexDirection: screenSizeLg ? "row" : "column",
                gap: screenSizeLg ? "20px" : "0px",
                width: "100%",
                // width: `calc(100% + 200px)`,
                // marginRight: "-100px",
                // marginLeft: "-100px",
              }}
            >
              <div style={{ flex: "1" }}>
                <p className="body-main quote">
                  "I've never meditated before. I would be interested but feel
                  like I'm currently too busy."
                </p>
                <p className="body-main quote">
                  "I've 'informally' meditated with breathing and just being
                  mindful."
                </p>
              </div>
              <div style={{ flex: "1" }}>
                <p className="body-main quote">
                  "It's hard for me to stay consistent with meditation. I either
                  forget or eventually lose motivation."
                </p>
                <p className="body-main quote">
                  "I think meditation would be helpful but I just haven't done
                  it yet."
                </p>
              </div>
            </div>,

            <Subsection content={"Affinity Mapping"} />,
            <p className="body-main">
              Using interviews from five of the people, I created an Affinity
              Map in Figma in order to organize our discussions into the most
              common categories and subsequentially highlight the most important
              issues to address.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={map}
              style={{
                // width: `calc(100% + 24vw)`,
                // marginRight: "-12vw",
                // marginLeft: "-12vw",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#F5F4F0",
              }}
            />,
            <p className="job">Key Findings</p>,
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <span style={{ fontStyle: "italic", fontWeight: "600" }}>
                  Lack of Confidence: <br />
                </span>{" "}
                There is a general lack of knowledge and/or confidence
                surrounding meditating correctly. Some people believed they were
                using making mistakes, that they "weren't doing it right." This
                provides support for a clear and beginner-friendly app.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Uncertainty:
                </span>{" "}
                Some people were uncertain about meditation as a whole, whether
                that be from lack of knowledge, doubt, or just unfamiliarity
                with the subject.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>Variety:</span>{" "}
                Those who had used apps before expressed how they valued having
                lots of meditation options/topics.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Aesthetic appeal:
                </span>{" "}
                People emphasized that the app should be pleasant to look at.
                More specifically, they wanted apps that were light and
                colorful.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Stuck in emotions:
                </span>{" "}
                As for reasons for starting, the interviews highlighted that
                people would be willing to try meditation because they feel
                stuck emotionally or mentally. Some people want to manage and
                understand their emotions better. Others have more specific
                targets, such as depression or anxiety.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Habit forming:
                </span>{" "}
                Being able to see progress is the most motivating factor in
                forming a habit.
              </li>
            </ul>,
            <Callout
              content={`Many people feel unsure about meditation, and need guidance to build
            confidence and form lasting habits.`}
            />,
            <div style={{ height: "20px" }} />,
            <Subsection content={"Competetive Analysis"} />,
            <p className="body-main">
              Next, I looked to analyze the current top meditation apps. In
              observing these apps, several key competetors were identified:
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={apps}
              className="nav-image"
              style={{
                maxWidth: "100%",
                marginTop: "30px",
                alignSelf: "center",
                marginLeft: "-10px",
              }}
            />,
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginTop: "30px" }}>
              <img
                loading="lazy"
                alt="img"
                src={table}
                className="nav-image"
                style={{
                  alignSelf: "center",
                  width: "100%",
                  // width: `calc(100% + 200px)`,
                  // marginRight: "-100px",
                  // marginLeft: "-100px",
                }}
              />
              <p style={{width: "150px"}} className="body-main-small">Apps were chosen from</p>
            </div>,
            <p className="job" style={{ paddingTop: "40px" }}>
              Key Findings
            </p>,
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>Guided meditations were available in all the apps.</li>
              <li>
                Basic free tier for most apps, and users need to upgrade and pay
                to get premium content. Often, the freemium content is very
                limited.
              </li>
              <li>
                Wide range of content is a major strength BUT has the potential
                to be confusing to some users.
              </li>
              <li>
                All these top apps have various voice options. Some even feature
                celebrity narrators.
              </li>
            </ul>,
          ]}
        />
        <div style={{ height: "50px" }} />{" "}
        {/* <Description
          title={"Meditation apps generally target large audiences"}
          section={"DEFINE"}
          desc={[
            <p className="body-main">
              Moti targets individuals with busy lives (professionals, students,
              parents alike) who value flexibility and ease of use.
            </p>,
          ]}
        /> */}
        <Description
          title={"Developing a persona"}
          section={"DEFINE"}
          desc={[
            <p className="body-main">
              After synthesizing my initial research, I was ready to develop a
              primary persona that represents my target user. The goals,
              frustrations, and motivations of Sarah were derived from the
              competetive analysis and interviews.
            </p>,
            <Persona
              age={"26"}
              name={"Sarah Borne"}
              location={"Boston"}
              job={"Office clerk"}
              img={sarah}
              desc={` Sarah leads a busy lifestyle and has struggled with anxiety and
              depression throughout her life. Despite knowing the benefits of
              meditation, she is unable to find time for herself. She has tried
              using meditation apps in the past but it has 'never stuck.'`}
              details={[
                <div className="body-main">
                  <span style={{ textDecoration: "underline" }}>Goals:</span>{" "}
                  start meditating, reduce anxiety, manage time more efficiently
                </div>,
                <div className="body-main">
                  <span style={{ textDecoration: "underline" }}>
                    Frustrations:
                  </span>{" "}
                  not enough time in the day, feels controlled by her emotions
                </div>,
              ]}
            />,
          ]}
        />
        <div style={{ height: "50px" }} />{" "}
        <Description
          title={"Putting it all together"}
          section={"FEATURE OVERVIEW"}
          desc={[
            <p className="body-main" style={{ marginBottom: "60px" }}>
              Based on the research findings, I began designing the app. Listed
              below is a collection of the most important findings gathered from
              the research and how they would be included in the app.
            </p>,

            // <Side
            //   side={<VideoOverlay video={voice} />}
            //   title={"Voice Options"}
            //   desc={`Voice variations stood out as a feature to include. All
            //   competitors included this, and some individuals admitted that
            //   they would feel more comfortable with a more masculine or
            //   feminine voice.`}
            // />,
            // <Side
            //   side={<VideoOverlay video={streak} />}
            //   title={"Emotion and Streak Tracking"}
            //   desc={
            //     <>
            //       In order to address lack of motivation and/or habit forming, I
            //       decided to include a streak/emotion calendar system. Steak
            //       tracking is common in a lot of health apps–not just meditation
            //       apps–and a{" "}
            //       <span
            //         className="small-link"
            //         onClick={() =>
            //           window.open(
            //             "https://academic.oup.com/jcr/article/49/6/1095/6623414?login=true"
            //           )
            //         }
            //       >
            //         proven
            //       </span>{" "}
            //       way to motivate individuals to stay consistent. Pairing this
            //       with emotion tracking gives individuals the ability to see
            //       their progress in an organized way.
            //     </>
            //   }
            //   left={true}
            // />,
            // <Side
            //   side={<VideoOverlay video={meditation} />}
            //   title={"Guided Meditations"}
            //   desc={`A guided meditation is a structured type of meditation in which
            //     there is a voiceover guiding the user throughout the session.
            //     All examined competitors include this type of meditation, and
            //     people from interviews agreed that this should be included.`}
            // />,

            <p className="job">Also included:</p>,
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Notification system:
                </span>{" "}
                Another way to help with habit-forming is a notification system.
                It will include basic once-a-day reminders that are sent as
                friendly messages (e.g., "Don't forget to meditate today!)" All
                examined competitors had this feature.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Light and colorful:
                </span>{" "}
                People emphasized that the app should be pleasant to look at.
                More specifically, they wanted apps that were light and
                colorful.
              </li>

              <li>
                <span style={{ textDecoration: "underline" }}>
                  Rotating quotes:
                </span>{" "}
                A concern raised was lack of certainty surrounding the
                benefits/uses of meditation. In addition to the educational
                guided meditations, rotating quotes will be placed at various
                points throughout the app that give basic information about
                meditation.
              </li>
            </ul>,
          ]}
        />
        <div style={{ height: "50px" }} />
        <Description
          title={"User flow, early stage prototyping"}
          section={"DESIGN"}
          desc={[
            <Subsection content={"Site Map"} />,
            <p className="body-main">
              The site map outlines the structure of Moti, highlighting key
              sections such as the home and explore pages, meditation
              categories, and profile features.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={flow}
              className="nav-image"
              style={{
                marginTop: "30px",
                alignSelf: "center",
                width: `calc(100% + 200px)`,
                marginRight: "-100px",
                marginLeft: "-100px",
              }}
            />,
            <Subsection content={"Low-Fidelity Prototype"} />,

            <p className="body-main">
              The low-fidelity prototype was designed to test basic layouts and
              user flow before adding more detail. This stage involved gathering
              initial feedback.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={low}
              className="nav-image"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                alignSelf: "center",
                borderRadius: "10px",
                width: `calc(100% + 400px)`,
                marginRight: "-200px",
                marginLeft: "-200px",
              }}
            />,
            <Subsection content={"Digital Wireframes"} />,

            <p className="body-main">
              I next created the digital wireframes, keeping in mind a simple
              user interface that would allow for simple navigation and
              exploration.
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={wireframe}
              className="nav-image"
              style={{
                marginBottom: "20px",
                width: `calc(100% + 200px)`,
                marginRight: "-100px",
                marginLeft: "-100px",
              }}
            />,
            <Subsection content={"Branding"} />,

            <p className="body-main">
              For the design, I chose a calming yet colorful color palette to
              reflect the app’s purpose—promoting mindfulness and mental
              clarity. The logo and overall aesthetic are designed to evoke a
              sense of peace and positivity.
            </p>,
            <p className="body-main">
              Notably, a lot of the apps I examined had darker color palettes.
              For example, Headspace and Calm had bluish blacks and dark
              purples. This is likely to create a nighttime feel or relaxing
              ambience. I decided to go with what my interviewees requested,
              though future considerations could include a nighttime mode as an
              option
            </p>,
            <img
              loading="lazy"
              alt="img"
              src={brand}
              className="nav-image"
              style={{ maxWidth: "100%", marginBottom: "20px" }}
            />,
          ]}
        />
        <Description
          title={"Final Product"}
          desc={[
            <p className="body-main">
              The high-fidelity prototype brought all the elements together,
              creating a polished, user-friendly design that was heavily rooted
              in the previous research.
            </p>,
          ]}
        />
        <img
          loading="lazy"
          alt="img"
          src={motiAll}
          className="nav-image"
          style={{ maxWidth: "100%" }}
        />
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>Landing Page:</span>{" "}
            The landing page displays the moti logo and motto, "consistency is
            key." Clicking on this page takes the user to the "sign up page",
            given that the user has not yet created an account.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Login/Sign Up:</span>{" "}
            Basic login/register page. Suggested use of the Google sign in
            feature.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Home:</span> The home
            page is the intitial navigated page after logging in. It displays a
            welcome message depending on the time of the day (either "Good
            morning, Good afternoon, or Good evening.") It then displays two
            basic stats: streaks and daily average meditation time. A unique
            feature of the home page is the calendar display. The user can
            either look at the streak calendar or the emotion calendar.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Explore:</span> The
            next page of the app is the explore page. Here, the user can access
            the rotating daily meditation as well as various meditation
            categories and their favorited audios. Clicking on an audio will
            take the user to the description screen, and clicking on any of the
            categories will take the user to the relevant category page.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Search:</span> A
            simple search page for searching audios. Popular searches are
            displayed.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Categories:</span> The
            category page displays all relevant category audios. Clicking on an
            audio will take the user to the description page.
          </li>
        </ul>
        <div style={{ height: "50px" }} />
        <Description
          title={"Gathering Input"}
          section={"TEST"}
          desc={[
            <Subsection content={"User Testing"} />,
            <p className="body-main">
              Usability testing was conducted at three points throughout
              development: 1) after low-fidelity prototype, 2) after digital
              wireframes, 3) after high-fidelity prototype. `, `Here are some
              key insights gathered from the tests:
            </p>,
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Favorited audios:
                </span>{" "}
                Users wanted to be able to view their favorited audios on the
                explore page.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Search tool:
                </span>{" "}
                Users thought it would be valuable to see suggested search
                options.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Description page:
                </span>{" "}
                Users wanted an information page for each audio.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>Stats:</span>{" "}
                Users wanted to be able to view more stats on the profile page.
              </li>
            </ul>,
            <Subsection content={"Future Considerations"} />,

            <p className="body-main">
              Several features and improvements were identified, based on
              usability testing feedback and overall observations:
            </p>,
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Community integration:
                </span>{" "}
                One potential feature would be a community section where users
                can share their meditation progress and participate in
                challenges. This could potentially help foster a sense of
                belonging and motivation.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Light/dark display:
                </span>{" "}
                During the day, the light display is activated, but in the
                evening a darker color scheme is activated.
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  More robust streak system:
                </span>{" "}
                In addition to the streak system, the app could include other
                incentives for maintaining streaks, such as achievement badges,
                "levels" (similar to the{" "}
                <span
                  className="small-link"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/us/app/oak-meditation-breathing/id1210209691"
                    )
                  }
                >
                  Oak
                </span>{" "}
                app level system), and progress reports.
              </li>
            </ul>,
          ]}
          images={[]}
        />
        <div style={{ height: "50px" }} />{" "}
        <Description
          section={"TAKEAWAYS"}
          title={"Process is not linear"}
          desc={[
            <p className="body-main">
              Although this case study is organized and presented sequentially,
              the actual process was not. There were many instances where I had
              to revisit and refine earlier steps, most of the time as a result
              of the usability tests and feedback. This iterative approach
              allowed me to continuously improve the design and user experience
              without feeling restricted by the bounds of an unrealistic linear
              process.
            </p>,
          ]}
          images={[]}
        />
        <Description
          title={"Importance of adaptability"}
          desc={[
            <p className="body-main">
              Throughout the project, I learned the importance of staying
              adaptable. Adjusting my designs was a given, but I also was
              required to adjust my way of thinking. Being flexible and open to
              new ideas proved essential in this project.
            </p>,
          ]}
          images={[]}
        />
        <Description
          title={"Interviewing"}
          desc={[
            <p className="body-main">
              Finally, this project also helped me improve my interview skills.
              Conducting interviews included prior preparation of questions, and
              during the interview I was required to actively listen and
              observe. I learned to dig deeper into people's responses and also
              ask follow up questions that usually revealed the best insights.
              These interviews helped shape key design choices and taught me the
              importance of empathy in the UX design process.
            </p>,
          ]}
          images={[]}
        />
      </div>
    </div>
  );
}
