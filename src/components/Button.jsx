import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Button({content}) {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <div className="button">
        {content}
    </div>
  );
}