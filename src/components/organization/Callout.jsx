import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Callout({ content }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%"
        // width: `calc(100% + 200px)`,
        //         marginRight: "-100px",
        //         marginLeft: "-100px",
      }}
    >
      <div
        style={{
          width: "6px",
          minWidth: "6px",
          backgroundColor: "#D9D9D9",
        }}
      />
      <p className="header-subtitle">{content}</p>
    </div>
  );
}
