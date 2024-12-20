import React from "react";
import "../pages-css/New.css";
import arrow from "../media/arrow.png";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function New() {
  return (
    <div className="new">
      <p className="new-font">
        Hello <span style={{ margin: "-5px" }} />
        <span
          style={{
            backgroundImage: "linear-gradient(340deg, #128cce, #041c32)",
            color: "transparent",
            backgroundClip: "text",
            fontStyle: "italic",
            padding: "5px",
            fontWeight: "400",
          }}
        >
          stranger
        </span>
        , you've found my old portfolio!
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p className="karla">Kindly navigate to my new one</p>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open("https://louisebfraser.com", "_blank")}
        >
          <ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />
        </motion.button>
      </div>
    </div>
  );
}

export default New;
