import React from "react";
import { Box, Button } from "@mui/material";
import PosterImg from "./images/poster.png";
import "./Styles/PosterStyle.css";
const Poster = () => {
  return (
    <Box className="poster-container">
      <Box className="poster-info-container">
        <p className="info1">.Practo.Care</p>
        <p className="info2">choose the expert in end to end surgical care</p>
        <p className="info3">You are in safe Hands</p>
        <Button
          sx={{ background: "#f6f6f6", color: "black" }}
          className="button"
        >
          Know more
        </Button>
      </Box>
      <Box className="poster-img-container">
        <img className="poster-img" src={PosterImg} alt="dbh" />
      </Box>
    </Box>
  );
};

export default Poster;
