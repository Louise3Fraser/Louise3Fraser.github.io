import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Problem({ problem, solution }) {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      className="problem"
      style={{
        // width: `calc(100% + 200px)`,
        // marginRight: "-100px",
        // marginLeft: "-100px",
      }}
    >
      <div
        style={{
          backgroundColor: "#12144c",
          padding: "30px",
          borderRadius: "10px",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="job" style={{ color: "#FFFDF9" }}>
          THE PROBLEM
        </p>
        <p className="body-main" style={{ color: "#FFFDF9" }}>
          {problem}
        </p>
      </div>
      <div
        style={{
          border: "1.75px solid #12144c",
          padding: "30px",
          borderRadius: "10px",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="job" style={{ color: "#12144c" }}>
          THE SOLUTION
        </p>
        <p className="body-main" style={{ color: "#12144c" }}>
          {solution}
        </p>
      </div>
    </div>
  );
}
