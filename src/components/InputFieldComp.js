import React from "react";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
const InputFieldComp = () => {
  return (
    <Box className="input-container">
      <Box className="location-container">
        <LocationOnIcon />
        <input placeholder="location" className="input" />
      </Box>
      <Box className="search-container">
        <SearchIcon />
        <input
          placeholder="Search doctors,clinics,hospitals,etc "
          className="input"
        />
      </Box>
    </Box>
  );
};

export default InputFieldComp;
