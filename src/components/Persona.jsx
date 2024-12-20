import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Persona({
  img,
  main,
  desc,
  age,
  location,
  job,
  details,
  name,
}) {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: screenSize ? "1fr 2.5fr" : "1fr",
        gap: "50px",
        alignItems: "center",
            // width: `calc(100% + 200px)`,
            // marginRight: "-100px",
            // marginLeft: "-100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          loading="lazy"
          alt="img"
          src={img}
          className="nav-image"
          style={{
            maxWidth: "100%",
            alignSelf: "center",
            display: "flex",
          }}
        />
        <p className="header-subtitle">{name}</p>{" "}
        <p className="body-main" style={{ fontStyle: "italic" }}>
          {age}, {location}, {job}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <p
          style={{
            backgroundColor: "#F5F4F0",
            borderRadius: "10px",
            padding: "30px",
          }}
          className="body-main"
        >
          {desc}
        </p>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            listStyleType: "none",
            margin: "0px",
            backgroundColor: "#F5F4F0",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          {details.map((item) => {
            return <li> {item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
