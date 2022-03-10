import React from "react";
import "./Styles/SpecialistStyle.css";
import { Box } from "@mui/material";
import Data from "./Data/SpecilalistData";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
const Specialists = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Box className="">
      <p className="main-title">
        Consult top doctors online for any health concern
      </p>

      <Box className="container1">
        <Slider {...settings}>
          {Data.map((item, i) => {
            return (
              <Box key={i} className="item-container1">
                <Box className="img-container1">
                  <img src={item.img} alt={item.title} className="img1" />
                </Box>
                <Box className="info-container1">
                  <p className="title1">{item.title}</p>
                  <p className="constant1">CONSULT NOW</p>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Specialists;
