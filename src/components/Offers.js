import React from "react";
import Data from "./Data/OffersData";
import { Box } from "@mui/material";
import "./Styles/OfferStyle.css";
const Offers = () => {
  return (
    <Box className="offers-container">
      {Data.map((item, i) => {
        return (
          <div className="items-container" key={i}>
            <div className="img-container">
              <img src={item.image} alt={item.title} className="img" />
            </div>
            <div className="info-container">
              <p className="title">{item.title}</p>
              <p className="info">{item.info}</p>
            </div>
          </div>
        );
      })}
    </Box>
  );
};

export default Offers;
