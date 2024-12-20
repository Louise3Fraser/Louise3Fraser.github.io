import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Side({ side, title, left, desc }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      className="side"
      style={{
        display: "grid",
        gridTemplateColumns: screenSizeSm ? "1fr 1.5fr" : "1fr",
        gap: "5vw",
        direction: left ? "rtl" : "",
        alignItems: "center",
            width: `calc(100% + 200px)`,
            marginRight: "-100px",
            marginLeft: "-100px",
      }}
    >
      <div
        style={{
          margin: screenSizeSm ? "00px" : "9vw",
        }}
      >
        {side}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: left ? "flex-end" : "flex-start",
        }}
      >
        <h4 className="body-main-subtitle">{title}</h4>
        <p className="body-main" style={{ textAlign: "left" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
