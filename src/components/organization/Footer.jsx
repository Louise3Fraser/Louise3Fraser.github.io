import React, { useEffect } from "react";
import "../../pages-css/Animations.css";
import "../../pages-css/Footer.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const renderMenuButton = (label, path) => (
    <button
      onClick={() => navigate(path)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
        padding: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <h4 className="navigation">{label}</h4>
      </motion.div>
    </button>
  );

  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
        <div>
        <p className="header-subtitle" style={{ color: "#FFFDF9", }}>
          Coded from scratch utilizing
        </p>
        <p className="header-subtitle" style={{ color: "#FFFDF9",}}>
        JS, CSS, HTML
        </p></div>
      </div>
      <div style={{display:"flex", flexDirection:"row", gap:"20px", alignSelf:"center"}}>
      <p className="job" style={{ color: "#FFFDF9" }}>
          Louise Fraser
        </p>
        <p className="job" style={{ color: "#FFFDF9" }}>
         | 
        </p>
        <p className="job" style={{ color: "#FFFDF9" }}>
          2024
        </p>
      </div>
     
    </div>
  );
}
